<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

const router = useRouter();
const loading = ref(false);
const error = ref<string | null>(null);
const professionsCount = ref(0);
const qualificationsCount = ref(0);

async function loadStats() {
    loading.value = true;
    error.value = null;
    try {
        // Fetch professions and qualifications to get counts
        const [professionsRes, qualificationsRes] = await Promise.all([
            api.get<{ total: number }>('/developer/professions', { params: { page: 1, pageSize: 1 } }),
            api.get<{ total: number }>('/developer/qualifications', { params: { page: 1, pageSize: 1 } }),
        ]);
        professionsCount.value = professionsRes.data.total || 0;
        qualificationsCount.value = qualificationsRes.data.total || 0;
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
            <h1 class="text-3xl font-bold">Панель розробника</h1>
            <p class="text-gray-600 mt-1">Управління професіями та профкваліфікаціями</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <div v-if="loading" class="rounded border border-slate-200 bg-white p-8 text-center text-gray-500">
            Завантаження...
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Professions Card -->
            <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Професії</h2>
                        <p class="text-3xl font-bold text-blue-600 mt-2">{{ professionsCount }}</p>
                        <p class="text-sm text-gray-500 mt-1">Всього професій</p>
                    </div>
                    <div class="text-blue-600">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                </div>
                <button
                    @click="router.push('/developer/professions')"
                    class="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Переглянути професії
                </button>
            </div>

            <!-- Qualifications Card -->
            <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Профкваліфікації</h2>
                        <p class="text-3xl font-bold text-green-600 mt-2">{{ qualificationsCount }}</p>
                        <p class="text-sm text-gray-500 mt-1">Всього профкваліфікацій</p>
                    </div>
                    <div class="text-green-600">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                </div>
                <button
                    @click="router.push('/developer/qualifications')"
                    class="mt-4 w-full rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                    Переглянути профкваліфікації
                </button>
            </div>
        </div>
    </div>
</template>
