<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

interface Application {
    id: number;
    status: string;
    comment: string | null;
    createdAt: string;
    preferredQualificationCenter?: {
        id: number;
        name: string;
        edrpou: string;
        address: string;
    } | null;
    assignedQualificationCenter?: {
        id: number;
        name: string;
        edrpou: string;
        address: string;
    } | null;
    professionalQualification: {
        id: number;
        name: string;
        nqrLevel: number;
        profession: {
            id: number;
            name: string;
            code: string;
        } | null;
    };
    testSessions?: Array<{
        id: number;
        scheduledAt: string;
        result: string;
        qualificationCenter: {
            id: number;
            name: string;
        };
    }>;
}

const applications = ref<Application[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const statusFilter = ref<string>('');

const router = useRouter();

const filteredApplications = computed(() => {
    if (!statusFilter.value) {
        return applications.value;
    }
    return applications.value.filter((app) => app.status === statusFilter.value);
});

function getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
        DRAFT: 'Чернетка',
        SUBMITTED: 'Подано',
        UNDER_REVIEW: 'На розгляді',
        SCHEDULED: 'Заплановано',
        TESTED: 'Протестовано',
        APPROVED: 'Схвалено',
        REFUSED: 'Відхилено',
    };
    return labels[status] || status;
}

function getStatusClass(status: string): string {
    const classes: Record<string, string> = {
        DRAFT: 'bg-gray-100 text-gray-800',
        SUBMITTED: 'bg-blue-100 text-blue-800',
        UNDER_REVIEW: 'bg-yellow-100 text-yellow-800',
        SCHEDULED: 'bg-purple-100 text-purple-800',
        TESTED: 'bg-indigo-100 text-indigo-800',
        APPROVED: 'bg-green-100 text-green-800',
        REFUSED: 'bg-red-100 text-red-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
}

function formatDate(dateString: string | null): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA');
    } catch {
        return dateString;
    }
}

async function loadApplications() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {
            page: page.value,
            pageSize: pageSize.value,
        };
        if (statusFilter.value) {
            params.status = statusFilter.value;
        }
        const response = await api.get<{ items: Application[]; total: number; page: number; pageSize: number }>(
            '/applicant/applications',
            { params }
        );
        applications.value = response.data.items || [];
        total.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load applications:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити заявки';
    } finally {
        loading.value = false;
    }
}

function changePage(newPage: number) {
    const totalPages = Math.ceil(total.value / pageSize.value);
    if (newPage >= 1 && newPage <= totalPages) {
        page.value = newPage;
        loadApplications();
    }
}

function applyFilter() {
    page.value = 1;
    loadApplications();
}

onMounted(loadApplications);
</script>

<template>
    <div class="space-y-6">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold">Мої заявки</h1>
                <p class="text-gray-600">Перегляньте статус ваших заявок на кваліфікацію</p>
            </div>
            <button
                @click="router.push('/applicant/centres')"
                class="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Нова заявка
            </button>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Filter -->
        <div class="flex items-center gap-4">
            <label for="statusFilter" class="text-sm font-medium text-slate-700">Фільтр по статусу:</label>
            <select
                id="statusFilter"
                v-model="statusFilter"
                @change="applyFilter"
                class="rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            >
                <option value="">Всі</option>
                <option value="PENDING">Очікує</option>
                <option value="SUBMITTED">Подано</option>
                <option value="APPROVED">Схвалено</option>
                <option value="REJECTED">Відхилено</option>
                <option value="COMPLETED">Завершено</option>
            </select>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження заявок...
        </div>

        <!-- Table -->
        <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 border-b border-slate-100">
                        <th class="pb-3 px-4 pt-3">ID</th>
                        <th class="pb-3 px-4 pt-3">Центр</th>
                        <th class="pb-3 px-4 pt-3">Кваліфікація</th>
                        <th class="pb-3 px-4 pt-3">Статус</th>
                        <th class="pb-3 px-4 pt-3">Дата створення</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="app in filteredApplications"
                        :key="app.id"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td class="py-3 px-4">{{ app.id }}</td>
                        <td class="py-3 px-4">
                            <div v-if="app.assignedQualificationCenter" class="font-medium">{{ app.assignedQualificationCenter.name }}</div>
                            <div v-else-if="app.preferredQualificationCenter" class="font-medium text-gray-500">{{ app.preferredQualificationCenter.name }} (бажаний)</div>
                            <div v-else class="text-gray-400">Не призначено</div>
                            <div v-if="app.assignedQualificationCenter" class="text-xs text-gray-500">{{ app.assignedQualificationCenter.edrpou }}</div>
                            <div v-else-if="app.preferredQualificationCenter" class="text-xs text-gray-500">{{ app.preferredQualificationCenter.edrpou }}</div>
                        </td>
                        <td class="py-3 px-4">
                            <div class="font-medium">{{ app.professionalQualification.name }}</div>
                            <div class="text-xs text-gray-500">
                                Рівень НКР: {{ app.professionalQualification.nqrLevel }}
                                <span v-if="app.professionalQualification.profession">
                                    | {{ app.professionalQualification.profession.name }}
                                </span>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            <span
                                :class="[
                                    'inline-flex rounded-full px-2 py-1 text-xs font-medium',
                                    getStatusClass(app.status)
                                ]"
                            >
                                {{ getStatusLabel(app.status) }}
                            </span>
                        </td>
                        <td class="py-3 px-4">-</td>
                        <td class="py-3 px-4">{{ formatDate(app.createdAt) }}</td>
                    </tr>
                    <tr v-if="filteredApplications.length === 0">
                        <td colspan="6" class="py-8 text-center text-gray-400">
                            {{ statusFilter ? 'Заявок з таким статусом не знайдено' : 'У вас поки немає заявок' }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div v-if="total > pageSize" class="flex items-center justify-between">
            <div class="text-sm text-gray-600">
                Показано {{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, total) }} з {{ total }}
            </div>
            <div class="flex items-center gap-2">
                <button
                    @click="changePage(page - 1)"
                    :disabled="page <= 1"
                    class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Попередня
                </button>
                <span class="text-sm text-gray-600">
                    Сторінка {{ page }} з {{ Math.ceil(total / pageSize) }}
                </span>
                <button
                    @click="changePage(page + 1)"
                    :disabled="page >= Math.ceil(total / pageSize)"
                    class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Наступна
                </button>
            </div>
        </div>
    </div>
</template>
