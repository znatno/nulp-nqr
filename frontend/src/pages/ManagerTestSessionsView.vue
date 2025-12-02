<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

interface TestSession {
    id: number;
    scheduledAt: string;
    result: string;
    notes: string | null;
    application: {
        id: number;
        applicant: {
            id: number;
            email: string;
        };
        professionalQualification: {
            id: number;
            name: string;
        };
    };
    qualificationCenter: {
        id: number;
        name: string;
        edrpou: string;
    };
}

const testSessions = ref<TestSession[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const applicationFilter = ref<string>('');
const centerFilter = ref<string>('');
const resultFilter = ref<string>('');

const router = useRouter();

function getResultLabel(result: string): string {
    const labels: Record<string, string> = {
        PENDING: 'Очікує',
        PASSED: 'Пройдено',
        FAILED: 'Не пройдено',
    };
    return labels[result] || result;
}

function getResultClass(result: string): string {
    const classes: Record<string, string> = {
        PENDING: 'bg-yellow-100 text-yellow-800',
        PASSED: 'bg-green-100 text-green-800',
        FAILED: 'bg-red-100 text-red-800',
    };
    return classes[result] || 'bg-gray-100 text-gray-800';
}

function formatDate(dateString: string | null): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    } catch {
        return dateString;
    }
}

async function loadTestSessions() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {
            page: page.value,
            pageSize: pageSize.value,
        };
        if (applicationFilter.value) {
            params.applicationId = applicationFilter.value;
        }
        if (centerFilter.value) {
            params.centerId = centerFilter.value;
        }
        if (resultFilter.value) {
            params.result = resultFilter.value;
        }
        const response = await api.get<{ items: TestSession[]; total: number; page: number; pageSize: number }>(
            '/test-sessions',
            { params }
        );
        testSessions.value = response.data.items || [];
        total.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load test sessions:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити тестові сесії';
    } finally {
        loading.value = false;
    }
}

function changePage(newPage: number) {
    const totalPages = Math.ceil(total.value / pageSize.value);
    if (newPage >= 1 && newPage <= totalPages) {
        page.value = newPage;
        loadTestSessions();
    }
}

function applyFilter() {
    page.value = 1;
    loadTestSessions();
}

function viewApplication(id: number) {
    router.push(`/manager/applications/${id}`);
}

onMounted(loadTestSessions);
</script>

<template>
    <div class="p-6">
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Тести / Оцінювання</h1>
            <p class="text-gray-600 mt-1">Управління тестовими сесіями та результатами оцінювання</p>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-lg shadow p-4 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">ID Заявки</label>
                    <input
                        v-model="applicationFilter"
                        type="text"
                        placeholder="ID заявки"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @input="applyFilter"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">ID Центру</label>
                    <input
                        v-model="centerFilter"
                        type="text"
                        placeholder="ID центру"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @input="applyFilter"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Результат</label>
                    <select
                        v-model="resultFilter"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @change="applyFilter"
                    >
                        <option value="">Всі</option>
                        <option value="PENDING">Очікує</option>
                        <option value="PASSED">Пройдено</option>
                        <option value="FAILED">Не пройдено</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Error message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {{ error }}
        </div>

        <!-- Test Sessions table -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
            <div v-if="loading" class="p-8 text-center text-gray-500">Завантаження...</div>
            <table v-else class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Заявка</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Кваліфікація</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Центр</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Результат</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дії</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="session in testSessions" :key="session.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ session.id }}</td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            <div class="font-medium">#{{ session.application.id }}</div>
                            <div class="text-xs text-gray-500">{{ session.application.applicant.email }}</div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">{{ session.application.professionalQualification.name }}</td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            <div>{{ session.qualificationCenter.name }}</div>
                            <div class="text-xs text-gray-400">ЄДРПОУ: {{ session.qualificationCenter.edrpou }}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(session.scheduledAt) }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span
                                :class="[
                                    'px-2 py-1 rounded-full text-xs font-medium',
                                    getResultClass(session.result)
                                ]"
                            >
                                {{ getResultLabel(session.result) }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                                @click="viewApplication(session.application.id)"
                                class="text-blue-600 hover:text-blue-900 font-medium"
                            >
                                Переглянути заявку
                            </button>
                        </td>
                    </tr>
                    <tr v-if="testSessions.length === 0">
                        <td colspan="7" class="px-6 py-8 text-center text-gray-500">Тестових сесій не знайдено</td>
                    </tr>
                </tbody>
            </table>

            <!-- Pagination -->
            <div v-if="total > pageSize" class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div class="text-sm text-gray-700">
                    Показано {{ (page - 1) * pageSize + 1 }} - {{ Math.min(page * pageSize, total) }} з {{ total }}
                </div>
                <div class="flex gap-2">
                    <button
                        @click="changePage(page - 1)"
                        :disabled="page === 1"
                        class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                        Назад
                    </button>
                    <button
                        @click="changePage(page + 1)"
                        :disabled="page * pageSize >= total"
                        class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                        Вперед
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
