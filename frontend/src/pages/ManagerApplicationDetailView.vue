<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { api } from '@/services/api';

interface Application {
    id: number;
    status: string;
    comment: string | null;
    fullName: string;
    createdAt: string;
    applicant: {
        id: number;
        email: string;
    };
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
    testSessions: Array<{
        id: number;
        scheduledAt: string;
        result: string;
        notes: string | null;
        qualificationCenter: {
            id: number;
            name: string;
            edrpou: string;
        };
    }>;
    resultingProfessional: {
        id: number;
        fullName: string;
        certificateNumber: string;
        certificateReceivedAt: string;
        qualificationCenter: {
            id: number;
            name: string;
            edrpou: string;
        };
        professionalQualification: {
            id: number;
            name: string;
        };
    } | null;
}

const application = ref<Application | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const updatingStatus = ref(false);
const showStatusModal = ref(false);
const newStatus = ref<string>('');
const issuingCertificate = ref(false);
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
        const id = route.params.id;
        const response = await api.get<Application>(`/applications/${id}`);
        application.value = response.data;
    } catch (err: any) {
        console.error('Failed to load application:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити заявку';
        if (err.response?.status === 404) {
            setTimeout(() => {
                router.push('/manager/applications');
            }, 2000);
        }
    } finally {
        loading.value = false;
    }
}

function openStatusModal() {
    if (application.value) {
        newStatus.value = application.value.status;
        showStatusModal.value = true;
    }
}

function closeStatusModal() {
    showStatusModal.value = false;
    newStatus.value = '';
}

async function updateStatus() {
    if (!application.value) return;
    
    updatingStatus.value = true;
    error.value = null;
    try {
        const response = await api.put<Application>(`/applications/${application.value.id}`, {
            status: newStatus.value,
        });
        application.value = response.data;
        closeStatusModal();
    } catch (err: any) {
        console.error('Failed to update status:', err);
        error.value = err.response?.data?.error || 'Не вдалося оновити статус';
    } finally {
        updatingStatus.value = false;
    }
}

async function issueCertificate() {
    if (!application.value) return;
    
    if (!confirm('Ви впевнені, що хочете видати сертифікат для цієї заявки?')) {
        return;
    }
    
    issuingCertificate.value = true;
    error.value = null;
    try {
        await api.post(`/applications/${application.value.id}/issue-certificate`);
        // Reload application to get the updated resultingProfessional
        await loadApplication();
    } catch (err: any) {
        console.error('Failed to issue certificate:', err);
        error.value = err.response?.data?.error || 'Не вдалося видати сертифікат';
    } finally {
        issuingCertificate.value = false;
    }
}

const statusOptions = [
    { value: 'DRAFT', label: 'Чернетка' },
    { value: 'SUBMITTED', label: 'Подано' },
    { value: 'UNDER_REVIEW', label: 'На розгляді' },
    { value: 'SCHEDULED', label: 'Заплановано' },
    { value: 'TESTED', label: 'Протестовано' },
    { value: 'APPROVED', label: 'Схвалено' },
    { value: 'REFUSED', label: 'Відхилено' },
];

onMounted(loadApplication);
</script>

<template>
    <div class="p-6">
        <div class="mb-6">
            <button
                @click="router.push('/manager/applications')"
                class="text-blue-600 hover:text-blue-900 mb-4"
            >
                ← Назад до списку заявок
            </button>
            <h1 class="text-2xl font-bold text-gray-900">Деталі заявки #{{ application?.id }}</h1>
        </div>

        <!-- Error message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {{ error }}
        </div>

        <!-- Loading -->
        <div v-if="loading" class="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            Завантаження...
        </div>

        <!-- Application details -->
        <div v-else-if="application" class="space-y-6">
            <!-- Basic Info -->
            <div class="bg-white rounded-lg shadow p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold text-gray-900">Основна інформація</h2>
                    <div class="flex gap-2">
                        <button
                            v-if="application.status === 'APPROVED' && !application.resultingProfessional"
                            @click="issueCertificate"
                            :disabled="issuingCertificate"
                            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ issuingCertificate ? 'Видача...' : 'Видати сертифікат' }}
                        </button>
                        <button
                            @click="openStatusModal"
                            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                        >
                            Змінити статус
                        </button>
                    </div>
                </div>
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
                        <label class="block text-sm font-medium text-gray-700">ПІБ</label>
                        <p class="mt-1 text-sm text-gray-900">{{ application.fullName }}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Email заявника</label>
                        <p class="mt-1 text-sm text-gray-900">{{ application.applicant.email }}</p>
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
            <div class="bg-white rounded-lg shadow p-6">
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
            <div v-if="application.testSessions && application.testSessions.length > 0" class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Тестові сесії</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дата</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Центр</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Результат</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Примітки</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="session in application.testSessions" :key="session.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(session.scheduledAt) }}</td>
                                <td class="px-6 py-4 text-sm text-gray-900">
                                    <div>{{ session.qualificationCenter.name }}</div>
                                    <div class="text-xs text-gray-500">ЄДРПОУ: {{ session.qualificationCenter.edrpou }}</div>
                                </td>
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
                                <td class="px-6 py-4 text-sm text-gray-500">{{ session.notes || '-' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Certificate -->
            <div v-if="application.resultingProfessional" class="bg-white rounded-lg shadow p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Сертифікат</h2>
                <div class="p-4 bg-green-50 rounded border border-green-200">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Номер сертифікату</label>
                            <p class="mt-1 text-sm font-medium text-gray-900">{{ application.resultingProfessional.certificateNumber }}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Дата отримання</label>
                            <p class="mt-1 text-sm text-gray-900">{{ formatDate(application.resultingProfessional.certificateReceivedAt) }}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Власник</label>
                            <p class="mt-1 text-sm text-gray-900">{{ application.resultingProfessional.fullName }}</p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Центр</label>
                            <p class="mt-1 text-sm text-gray-900">{{ application.resultingProfessional.qualificationCenter.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Status Change Modal -->
        <div
            v-if="showStatusModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            @click.self="closeStatusModal"
        >
            <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Змінити статус заявки</h3>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Новий статус</label>
                    <select
                        v-model="newStatus"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option v-for="option in statusOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>

                <div class="flex justify-end gap-3">
                    <button
                        @click="closeStatusModal"
                        class="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        :disabled="updatingStatus"
                    >
                        Скасувати
                    </button>
                    <button
                        @click="updateStatus"
                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        :disabled="updatingStatus || newStatus === application?.status"
                    >
                        {{ updatingStatus ? 'Оновлення...' : 'Зберегти' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
