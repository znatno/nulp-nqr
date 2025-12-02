<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface Profession {
    id: number;
    name: string;
    code: string;
    approvalDate: string;
    qualificationStandardDeveloper: {
        id: number;
        name: string;
        edrpou: string;
    };
}

const professions = ref<Profession[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const search = ref('');

function formatDate(dateString: string | null): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA');
    } catch {
        return dateString;
    }
}

async function loadProfessions() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {
            page: page.value,
            pageSize: pageSize.value,
        };
        if (search.value) {
            params.search = search.value;
        }
        const response = await api.get<{ items: Profession[]; total: number; page: number; pageSize: number }>(
            '/developer/professions',
            { params }
        );
        professions.value = response.data.items || [];
        total.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load professions:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити професії';
    } finally {
        loading.value = false;
    }
}

function changePage(newPage: number) {
    const totalPages = Math.ceil(total.value / pageSize.value);
    if (newPage >= 1 && newPage <= totalPages) {
        page.value = newPage;
        loadProfessions();
    }
}

function applySearch() {
    page.value = 1;
    loadProfessions();
}

onMounted(loadProfessions);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Мої професії</h1>
            <p class="text-gray-600">Перегляд професій у системі</p>
        </div>

        <!-- Search -->
        <div class="flex items-center gap-4">
            <input
                v-model="search"
                type="text"
                placeholder="Пошук за назвою або кодом..."
                class="flex-1 rounded border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                @keyup.enter="applySearch"
            />
            <button
                @click="applySearch"
                class="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
                Пошук
            </button>
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
                        <th class="pb-3 px-4 pt-3">Назва</th>
                        <th class="pb-3 px-4 pt-3">Код</th>
                        <th class="pb-3 px-4 pt-3">Розробник</th>
                        <th class="pb-3 px-4 pt-3">Дата затвердження</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="profession in professions"
                        :key="profession.id"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td class="py-3 px-4">{{ profession.id }}</td>
                        <td class="py-3 px-4 font-medium">{{ profession.name }}</td>
                        <td class="py-3 px-4">{{ profession.code }}</td>
                        <td class="py-3 px-4">
                            <div>{{ profession.qualificationStandardDeveloper.name }}</div>
                            <div class="text-xs text-gray-500">ЄДРПОУ: {{ profession.qualificationStandardDeveloper.edrpou }}</div>
                        </td>
                        <td class="py-3 px-4">{{ formatDate(profession.approvalDate) }}</td>
                    </tr>
                    <tr v-if="professions.length === 0">
                        <td colspan="5" class="py-8 text-center text-gray-400">
                            {{ search ? 'Професій не знайдено' : 'Професій поки немає' }}
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
