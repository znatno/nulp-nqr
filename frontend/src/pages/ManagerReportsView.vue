<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { api } from '@/services/api';

interface QualificationCenter {
    id: number;
    name: string;
    edrpou: string;
    address: string;
}

interface ReportRow {
    period: string;
    from: string;
    to: string;
    applicationsTotal: number;
    applicationsApproved: number;
    applicationsRejected: number;
    applicationsPending: number;
    certificatesIssued: number;
}

const scope = ref<'global' | 'centre'>('global');
const selectedCentreId = ref<number | null>(null);
const periodType = ref<'monthly' | 'quarterly' | 'yearly'>('monthly');
const year = ref<number>(new Date().getFullYear());
const exportFormat = ref<'pdf' | 'excel' | 'csv' | 'txt'>('pdf');

const centres = ref<QualificationCenter[]>([]);
const reportData = ref<ReportRow[]>([]);
const loading = ref(false);
const loadingCentres = ref(false);
const error = ref<string | null>(null);
const exporting = ref(false);

const canGenerate = computed(() => {
    if (scope.value === 'centre' && !selectedCentreId.value) {
        return false;
    }
    return year.value >= 2000 && year.value <= 2100;
});

const canExport = computed(() => {
    return canGenerate.value && reportData.value.length > 0;
});

async function loadCentres() {
    loadingCentres.value = true;
    try {
        const response = await api.get<{ items: QualificationCenter[] }>('/centres', {
            params: { page: 1, pageSize: 1000 },
        });
        centres.value = response.data.items || [];
    } catch (err: any) {
        console.error('Failed to load centres:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити центри';
    } finally {
        loadingCentres.value = false;
    }
}

async function generateReport() {
    if (!canGenerate.value) {
        return;
    }

    loading.value = true;
    error.value = null;
    reportData.value = [];

    try {
        const params: any = {
            scope: scope.value,
            periodType: periodType.value,
            year: year.value,
        };

        if (scope.value === 'centre' && selectedCentreId.value) {
            params.centreId = selectedCentreId.value;
        }

        const response = await api.get<ReportRow[]>('/reports', { params });
        reportData.value = response.data || [];
    } catch (err: any) {
        console.error('Failed to generate report:', err);
        error.value = err.response?.data?.error || 'Не вдалося згенерувати звіт';
        reportData.value = [];
    } finally {
        loading.value = false;
    }
}

async function exportReport() {
    if (!canExport.value) {
        return;
    }

    exporting.value = true;
    error.value = null;

    try {
        const params: any = {
            scope: scope.value,
            periodType: periodType.value,
            year: year.value,
            format: exportFormat.value,
        };

        if (scope.value === 'centre' && selectedCentreId.value) {
            params.centreId = selectedCentreId.value;
        }

        // Request blob response
        const response = await api.get('/reports/export', {
            params,
            responseType: 'blob',
        });

        // Determine file extension
        const extension = exportFormat.value === 'excel' ? 'xlsx' : exportFormat.value;

        // Create blob and download
        const blob = new Blob([response.data], {
            type: response.headers['content-type'] || 'application/octet-stream',
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;

        const scopePart = scope.value === 'centre' ? `centre-${selectedCentreId.value}` : 'global';
        link.download = `nqr-report-${scopePart}-${year.value}-${periodType.value}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (err: any) {
        console.error('Failed to export report:', err);
        error.value = err.response?.data?.error || 'Не вдалося експортувати звіт';
    } finally {
        exporting.value = false;
    }
}

function formatDate(dateString: string): string {
    try {
        return new Date(dateString).toLocaleDateString('uk-UA');
    } catch {
        return dateString;
    }
}

// Generate year options (current year ± 5 years)
const yearOptions = computed(() => {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        years.push(i);
    }
    return years;
});

onMounted(() => {
    loadCentres();
});
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Звіти</h1>
            <p class="text-gray-600">Генерація та експорт звітів за періодами</p>
        </div>

        <!-- Filters -->
        <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold text-gray-900">Параметри звіту</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <!-- Scope -->
                <div>
                    <label for="scope" class="mb-2 block text-sm font-medium text-gray-700">
                        Обсяг:
                    </label>
                    <select
                        id="scope"
                        v-model="scope"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="global">Глобальний</option>
                        <option value="centre">По центру</option>
                    </select>
                </div>

                <!-- Centre selector (only when scope=centre) -->
                <div v-if="scope === 'centre'">
                    <label for="centreId" class="mb-2 block text-sm font-medium text-gray-700">
                        Кваліфікаційний центр:
                    </label>
                    <select
                        id="centreId"
                        v-model="selectedCentreId"
                        :disabled="loadingCentres"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:bg-gray-100"
                    >
                        <option :value="null">-- Виберіть центр --</option>
                        <option v-for="centre in centres" :key="centre.id" :value="centre.id">
                            {{ centre.name }} ({{ centre.edrpou }})
                        </option>
                    </select>
                </div>

                <!-- Period Type -->
                <div>
                    <label for="periodType" class="mb-2 block text-sm font-medium text-gray-700">
                        Тип періоду:
                    </label>
                    <select
                        id="periodType"
                        v-model="periodType"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="monthly">Місячний</option>
                        <option value="quarterly">Квартальний</option>
                        <option value="yearly">Річний</option>
                    </select>
                </div>

                <!-- Year -->
                <div>
                    <label for="year" class="mb-2 block text-sm font-medium text-gray-700">
                        Рік:
                    </label>
                    <select
                        id="year"
                        v-model.number="year"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option v-for="y in yearOptions" :key="y" :value="y">{{ y }}</option>
                    </select>
                </div>
            </div>

            <div class="mt-4">
                <button
                    @click="generateReport"
                    :disabled="!canGenerate || loading"
                    class="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {{ loading ? 'Генерація...' : 'Згенерувати звіт' }}
                </button>
            </div>
        </div>

        <!-- Error message -->
        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Export section -->
        <div v-if="reportData.length > 0" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-lg font-semibold text-gray-900">Експорт звіту</h2>
            <div class="flex items-center gap-4">
                <div>
                    <label for="exportFormat" class="mb-2 block text-sm font-medium text-gray-700">
                        Формат:
                    </label>
                    <select
                        id="exportFormat"
                        v-model="exportFormat"
                        class="rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                        <option value="pdf">PDF</option>
                        <option value="excel">Excel</option>
                        <option value="csv">CSV</option>
                        <option value="txt">TXT</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button
                        @click="exportReport"
                        :disabled="!canExport || exporting"
                        class="rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {{ exporting ? 'Експорт...' : 'Експортувати' }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Report Table -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження звіту...
        </div>

        <div v-else-if="reportData.length > 0" class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 border-b border-slate-100">
                        <th class="pb-3 px-4 pt-3">Період</th>
                        <th class="pb-3 px-4 pt-3">Від</th>
                        <th class="pb-3 px-4 pt-3">До</th>
                        <th class="pb-3 px-4 pt-3">Заявок всього</th>
                        <th class="pb-3 px-4 pt-3">Схвалено</th>
                        <th class="pb-3 px-4 pt-3">Відхилено</th>
                        <th class="pb-3 px-4 pt-3">Очікує</th>
                        <th class="pb-3 px-4 pt-3">Сертифікатів видано</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="row in reportData"
                        :key="row.period"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td class="py-3 px-4 font-medium">{{ row.period }}</td>
                        <td class="py-3 px-4">{{ formatDate(row.from) }}</td>
                        <td class="py-3 px-4">{{ formatDate(row.to) }}</td>
                        <td class="py-3 px-4">{{ row.applicationsTotal }}</td>
                        <td class="py-3 px-4">{{ row.applicationsApproved }}</td>
                        <td class="py-3 px-4">{{ row.applicationsRejected }}</td>
                        <td class="py-3 px-4">{{ row.applicationsPending }}</td>
                        <td class="py-3 px-4">{{ row.certificatesIssued }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else-if="!loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Налаштуйте параметри та натисніть "Згенерувати звіт" для перегляду даних
        </div>
    </div>
</template>
