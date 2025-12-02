<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

const router = useRouter();
const loading = ref(false);
const error = ref<string | null>(null);
const expertisesCount = ref(0);

async function loadStats() {
    loading.value = true;
    error.value = null;
    try {
        // Fetch expertises to get count
        const response = await api.get<{ total: number }>('/expert/expertises', { params: { page: 1, pageSize: 1 } });
        expertisesCount.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load stats:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити статистику';
    } finally {
        loading.value = false;
    }
}

onMounted(loadStats);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Панель експерта</h1>
            <p class="text-gray-600 mt-1">Управління експертизами кваліфікаційних центрів</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <div v-if="loading" class="rounded border border-slate-200 bg-white p-8 text-center text-gray-500">
            Завантаження...
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl">
            <!-- Expertises Card -->
            <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Експертизи</h2>
                        <p class="text-3xl font-bold text-purple-600 mt-2">{{ expertisesCount }}</p>
                        <p class="text-sm text-gray-500 mt-1">Всього експертиз</p>
                    </div>
                    <div class="text-purple-600">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                    </div>
                </div>
                <button
                    @click="router.push('/expert/expertises')"
                    class="mt-4 w-full rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                >
                    Переглянути експертизи
                </button>
            </div>
        </div>
    </div>
</template>
