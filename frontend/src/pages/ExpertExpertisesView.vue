<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface Expertise {
    id: number;
    expertiseDate: string;
    result: string | null;
    notes: string | null;
    professionalQualification: {
        id: number;
        name: string;
        nqrLevel: number;
    };
    qualificationCenter: {
        id: number;
        name: string;
        edrpou: string;
    };
    accreditationExpert: {
        id: number;
        fullName: string;
    };
}

const expertises = ref<Expertise[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);

function formatDate(dateString: string | null): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch {
        return dateString;
    }
}

async function loadExpertises() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {
            page: page.value,
            pageSize: pageSize.value,
        };
        const response = await api.get<{ items: Expertise[]; total: number; page: number; pageSize: number }>(
            '/expert/expertises',
            { params }
        );
        expertises.value = response.data.items || [];
        total.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load expertises:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити експертизи';
    } finally {
        loading.value = false;
    }
}

function changePage(newPage: number) {
    const totalPages = Math.ceil(total.value / pageSize.value);
    if (newPage >= 1 && newPage <= totalPages) {
        page.value = newPage;
        loadExpertises();
    }
}

onMounted(loadExpertises);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Мої експертизи</h1>
            <p class="text-gray-600">Перегляд експертиз кваліфікаційних центрів</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Loading -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-8 text-center text-gray-500">
            Завантаження...
        </div>

        <!-- Table -->
        <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 border-b border-slate-100">
                        <th class="pb-3 px-4 pt-3">ID</th>
                        <th class="pb-3 px-4 pt-3">Кваліфікація</th>
                        <th class="pb-3 px-4 pt-3">Центр</th>
                        <th class="pb-3 px-4 pt-3">Експерт</th>
                        <th class="pb-3 px-4 pt-3">Дата експертизи</th>
                        <th class="pb-3 px-4 pt-3">Результат</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="expertise in expertises"
                        :key="expertise.id"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td class="py-3 px-4">{{ expertise.id }}</td>
                        <td class="py-3 px-4">
                            <div class="font-medium">{{ expertise.professionalQualification.name }}</div>
                            <div class="text-xs text-gray-500">Рівень НКР: {{ expertise.professionalQualification.nqrLevel }}</div>
                        </td>
                        <td class="py-3 px-4">
                            <div class="font-medium">{{ expertise.qualificationCenter.name }}</div>
                            <div class="text-xs text-gray-500">ЄДРПОУ: {{ expertise.qualificationCenter.edrpou }}</div>
                        </td>
                        <td class="py-3 px-4">{{ expertise.accreditationExpert.fullName }}</td>
                        <td class="py-3 px-4">{{ formatDate(expertise.expertiseDate) }}</td>
                        <td class="py-3 px-4">
                            <span v-if="expertise.result" class="text-sm">{{ expertise.result }}</span>
                            <span v-else class="text-gray-400 text-sm">-</span>
                        </td>
                    </tr>
                    <tr v-if="expertises.length === 0">
                        <td colspan="6" class="py-8 text-center text-gray-400">
                            Експертиз поки немає
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
