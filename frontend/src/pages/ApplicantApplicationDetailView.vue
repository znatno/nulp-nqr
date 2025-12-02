<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from '@/services/api';

interface Application {
    id: number;
    status: string;
    comment: string | null;
    createdAt: string;
    preferredQualificationCenter: {
        id: number;
        name: string;
        edrpou: string;
        address: string;
    } | null;
    assignedQualificationCenter: {
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
    testSessions: Array<{
        id: number;
        scheduledAt: string;
        result: string;
        qualificationCenter: {
            id: number;
            name: string;
        };
    }>;
}

const application = ref<Application | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const route = useRoute();
const router = useRouter();

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

async function loadApplication() {
    loading.value = true;
    error.value = null;
    try {
        const id = Number(route.params.id);
        if (!Number.isInteger(id)) {
            error.value = 'Невірний ID заявки';
            return;
        }

        // Fetch application by ID
        const response = await api.get<Application>(`/applicant/applications/${id}`);
        application.value = response.data;
    } catch (err: any) {
        console.error('Failed to load application:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити заявку';
        if (err.response?.status === 404 || err.response?.status === 403) {
            setTimeout(() => {
                router.push('/applicant/applications');
            }, 2000);
        }
    } finally {
        loading.value = false;
    }
}

onMounted(loadApplication);
</script>

<template>
    <div class="space-y-6">
        <div>
            <button
                @click="router.push('/applicant/applications')"
                class="text-blue-600 hover:text-blue-900 mb-4"
            >
                ← Назад до моїх заявок
            </button>
            <h1 class="text-3xl font-bold">Деталі заявки #{{ application?.id }}</h1>
        </div>

        <!-- Error message -->
        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Loading -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-8 text-center text-gray-500">
            Завантаження...
        </div>

        <!-- Application details -->
        <div v-else-if="application" class="space-y-6">
            <!-- Basic Info -->
            <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Основна інформація</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Статус</label>
                        <span
                            :class="[
                                'inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium',
                                getStatusClass(application.status)
                            ]"
                        >
                            {{ getStatusLabel(application.status) }}
                        </span>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Кваліфікація</label>
                        <p class="mt-1 text-sm text-gray-900">{{ application.professionalQualification.name }}</p>
                        <p class="text-xs text-gray-500 mt-1">
                            Рівень НКР: {{ application.professionalQualification.nqrLevel }}
                            <span v-if="application.professionalQualification.profession">
                                | {{ application.professionalQualification.profession.name }} ({{ application.professionalQualification.profession.code }})
                            </span>
                        </p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Дата створення</label>
                        <p class="mt-1 text-sm text-gray-900">{{ formatDate(application.createdAt) }}</p>
                    </div>
                    <div v-if="application.comment" class="md:col-span-2">
                        <label class="block text-sm font-medium text-gray-700">Коментар</label>
                        <p class="mt-1 text-sm text-gray-900">{{ application.comment }}</p>
                    </div>
                </div>
            </div>

            <!-- Centers -->
            <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Кваліфікаційні центри</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-if="application.preferredQualificationCenter">
                        <label class="block text-sm font-medium text-gray-700">Бажаний центр</label>
                        <div class="mt-1 p-3 bg-gray-50 rounded">
                            <p class="text-sm font-medium text-gray-900">{{ application.preferredQualificationCenter.name }}</p>
                            <p class="text-xs text-gray-500 mt-1">ЄДРПОУ: {{ application.preferredQualificationCenter.edrpou }}</p>
                            <p class="text-xs text-gray-500">{{ application.preferredQualificationCenter.address }}</p>
                        </div>
                    </div>
                    <div v-if="application.assignedQualificationCenter">
                        <label class="block text-sm font-medium text-gray-700">Призначений центр</label>
                        <div class="mt-1 p-3 bg-blue-50 rounded">
                            <p class="text-sm font-medium text-gray-900">{{ application.assignedQualificationCenter.name }}</p>
                            <p class="text-xs text-gray-500 mt-1">ЄДРПОУ: {{ application.assignedQualificationCenter.edrpou }}</p>
                            <p class="text-xs text-gray-500">{{ application.assignedQualificationCenter.address }}</p>
                        </div>
                    </div>
                    <div v-if="!application.assignedQualificationCenter && !application.preferredQualificationCenter" class="md:col-span-2">
                        <p class="text-sm text-gray-500">Центр не призначено</p>
                    </div>
                </div>
            </div>

            <!-- Test Sessions -->
            <div v-if="application.testSessions && application.testSessions.length > 0" class="rounded-lg bg-white shadow-sm border border-slate-100 p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Тестові сесії</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дата</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Центр</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Результат</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="session in application.testSessions" :key="session.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(session.scheduledAt) }}</td>
                                <td class="px-6 py-4 text-sm text-gray-900">{{ session.qualificationCenter.name }}</td>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Success message for approved applications -->
            <div v-if="application.status === 'APPROVED'" class="rounded-lg bg-green-50 border border-green-200 p-6">
                <h2 class="text-lg font-semibold text-green-900 mb-2">Заявку схвалено!</h2>
                <p class="text-sm text-green-700">
                    Вашу заявку схвалено. Перевірте розділ "Мої сертифікати" для отримання деталей про виданий сертифікат.
                </p>
                <button
                    @click="router.push('/applicant/certificates')"
                    class="mt-4 rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                    Переглянути сертифікати
                </button>
            </div>
        </div>
    </div>
</template>
