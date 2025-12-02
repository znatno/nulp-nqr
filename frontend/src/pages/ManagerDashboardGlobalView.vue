<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface GlobalMetrics {
    totalCentres: number;
    totalQualifications: number;
    activeCertificates: number;
    applicationsLast30Days: number;
    applicationsLast90Days: number;
    applicationsLast365Days: number;
    applicationsByStatus: Record<string, number>;
}

const metrics = ref<GlobalMetrics | null>(null);
const loading = ref(false);
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

async function loadMetrics() {
    loading.value = true;
    error.value = null;
    try {
        const response = await api.get<GlobalMetrics>('/dashboard/global');
        metrics.value = response.data;
    } catch (err: any) {
        console.error('Failed to load global metrics:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити метрики';
    } finally {
        loading.value = false;
    }
}

onMounted(loadMetrics);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Панель менеджера</h1>
            <p class="text-gray-600">Метрики по всій системі</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження метрик...
        </div>

        <div v-else-if="metrics" class="space-y-6">
            <!-- Main Metrics Cards -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div class="text-sm font-medium text-gray-600">Всього центрів</div>
                    <div class="mt-2 text-3xl font-bold text-gray-900">{{ metrics.totalCentres }}</div>
                </div>
                <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div class="text-sm font-medium text-gray-600">Всього кваліфікацій</div>
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
    </div>
</template>
