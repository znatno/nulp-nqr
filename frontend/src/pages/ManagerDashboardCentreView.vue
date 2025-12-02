<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from '@/services/api';

interface QualificationCenter {
    id: number;
    name: string;
    edrpou: string;
    address: string;
}

interface CentreMetrics {
    centreId: number;
    centreName: string;
    totalQualifications: number;
    activeCertificates: number;
    applicationsLast30Days: number;
    applicationsLast90Days: number;
    applicationsLast365Days: number;
    applicationsByStatus: Record<string, number>;
}

const route = useRoute();
const router = useRouter();

const centres = ref<QualificationCenter[]>([]);
const selectedCentreId = ref<number | null>(null);
const metrics = ref<CentreMetrics | null>(null);
const loading = ref(false);
const loadingCentres = ref(false);
const error = ref<string | null>(null);

function getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
        PENDING: 'Очікує',
        SUBMITTED: 'Подано',
        APPROVED: 'Схвалено',
        REJECTED: 'Відхилено',
        COMPLETED: 'Завершено',
    };
    return labels[status] || status;
}

async function loadCentres() {
    loadingCentres.value = true;
    try {
        const response = await api.get<{ items: QualificationCenter[] }>('/centres', {
            params: { page: 1, pageSize: 1000 },
        });
        centres.value = response.data.items || [];
        
        // If route has centreId param, use it
        if (route.params.centreId) {
            const paramId = Number(route.params.centreId);
            if (!isNaN(paramId) && centres.value.some((c) => c.id === paramId)) {
                selectedCentreId.value = paramId;
            }
        } else if (centres.value.length > 0) {
            // Otherwise select first centre by default
            selectedCentreId.value = centres.value[0].id;
        }
    } catch (err: any) {
        console.error('Failed to load centres:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити центри';
    } finally {
        loadingCentres.value = false;
    }
}

async function loadMetrics() {
    if (!selectedCentreId.value) {
        metrics.value = null;
        return;
    }

    loading.value = true;
    error.value = null;
    try {
        const response = await api.get<CentreMetrics>(`/dashboard/centre/${selectedCentreId.value}`);
        metrics.value = response.data;
    } catch (err: any) {
        console.error('Failed to load centre metrics:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити метрики';
        metrics.value = null;
    } finally {
        loading.value = false;
    }
}

function onCentreChange() {
    if (selectedCentreId.value) {
        // Update route if using route param approach
        if (route.name === 'manager-centre-dashboard') {
            router.push(`/manager/centres/${selectedCentreId.value}/dashboard`);
        }
        loadMetrics();
    }
}

// Watch for route param changes
watch(
    () => route.params.centreId,
    (newId) => {
        if (newId) {
            const id = Number(newId);
            if (!isNaN(id) && id !== selectedCentreId.value) {
                selectedCentreId.value = id;
                loadMetrics();
            }
        }
    }
);

onMounted(async () => {
    await loadCentres();
    if (selectedCentreId.value) {
        loadMetrics();
    }
});
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Панель центру</h1>
            <p class="text-gray-600">Метрики для конкретного кваліфікаційного центру</p>
        </div>

        <!-- Centre Selector -->
        <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <label for="centreSelect" class="mb-2 block text-sm font-medium text-gray-700">
                Виберіть кваліфікаційний центр:
            </label>
            <select
                id="centreSelect"
                v-model="selectedCentreId"
                @change="onCentreChange"
                :disabled="loadingCentres"
                class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none disabled:bg-gray-100"
            >
                <option :value="null">-- Виберіть центр --</option>
                <option v-for="centre in centres" :key="centre.id" :value="centre.id">
                    {{ centre.name }} ({{ centre.edrpou }})
                </option>
            </select>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження метрик...
        </div>

        <div v-else-if="metrics" class="space-y-6">
            <!-- Centre Info Header -->
            <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 class="text-xl font-semibold text-gray-900">{{ metrics.centreName }}</h2>
                <p class="mt-1 text-sm text-gray-600">ID центру: {{ metrics.centreId }}</p>
            </div>

            <!-- Main Metrics Cards -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div class="text-sm font-medium text-gray-600">Кваліфікацій для цього центру</div>
                    <div class="mt-2 text-3xl font-bold text-gray-900">{{ metrics.totalQualifications }}</div>
                </div>
                <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div class="text-sm font-medium text-gray-600">Активні сертифікати</div>
                    <div class="mt-2 text-3xl font-bold text-gray-900">{{ metrics.activeCertificates }}</div>
                </div>
            </div>

            <!-- Applications Over Time -->
            <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-lg font-semibold text-gray-900">Заявки за періодами</h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded border border-slate-100 bg-slate-50 p-4">
                        <div class="text-sm font-medium text-gray-600">За останні 30 днів</div>
                        <div class="mt-1 text-2xl font-bold text-gray-900">{{ metrics.applicationsLast30Days }}</div>
                    </div>
                    <div class="rounded border border-slate-100 bg-slate-50 p-4">
                        <div class="text-sm font-medium text-gray-600">За останні 90 днів</div>
                        <div class="mt-1 text-2xl font-bold text-gray-900">{{ metrics.applicationsLast90Days }}</div>
                    </div>
                    <div class="rounded border border-slate-100 bg-slate-50 p-4">
                        <div class="text-sm font-medium text-gray-600">За останні 365 днів</div>
                        <div class="mt-1 text-2xl font-bold text-gray-900">{{ metrics.applicationsLast365Days }}</div>
                    </div>
                </div>
            </div>

            <!-- Applications By Status -->
            <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 class="mb-4 text-lg font-semibold text-gray-900">Заявки за статусом</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full text-sm">
                        <thead>
                            <tr class="text-left text-gray-500 border-b border-slate-100">
                                <th class="pb-3 px-4 pt-3">Статус</th>
                                <th class="pb-3 px-4 pt-3">Кількість</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(count, status) in metrics.applicationsByStatus"
                                :key="status"
                                class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                            >
                                <td class="py-3 px-4 font-medium">{{ getStatusLabel(status) }}</td>
                                <td class="py-3 px-4">{{ count }}</td>
                            </tr>
                            <tr v-if="Object.keys(metrics.applicationsByStatus).length === 0">
                                <td colspan="2" class="py-8 text-center text-gray-400">Немає даних</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-else-if="!loadingCentres && !selectedCentreId" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Виберіть кваліфікаційний центр для перегляду метрик
        </div>
    </div>
</template>
