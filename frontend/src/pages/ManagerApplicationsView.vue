<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
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
    } | null;
    assignedQualificationCenter: {
        id: number;
        name: string;
        edrpou: string;
    } | null;
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
const qualificationFilter = ref<string>('');
const centerFilter = ref<string>('');
const updatingStatus = ref<Record<number, boolean>>({});
const statusChangeModal = ref<{ show: boolean; appId: number | null; currentStatus: string; newStatus: string }>({
    show: false,
    appId: null,
    currentStatus: '',
    newStatus: '',
});

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
        if (qualificationFilter.value) {
            params.qualificationId = qualificationFilter.value;
        }
        if (centerFilter.value) {
            params.centerId = centerFilter.value;
        }
        const response = await api.get<{ items: Application[]; total: number; page: number; pageSize: number }>(
            '/applications',
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

function viewDetails(id: number) {
    router.push(`/manager/applications/${id}`);
}

function openStatusChangeModal(app: Application) {
    statusChangeModal.value = {
        show: true,
        appId: app.id,
        currentStatus: app.status,
        newStatus: app.status,
    };
}

function closeStatusChangeModal() {
    statusChangeModal.value = {
        show: false,
        appId: null,
        currentStatus: '',
        newStatus: '',
    };
}

async function updateApplicationStatus() {
    if (!statusChangeModal.value.appId) return;

    const appId = statusChangeModal.value.appId;
    updatingStatus.value[appId] = true;
    error.value = null;

    try {
        await api.put(`/applications/${appId}`, {
            status: statusChangeModal.value.newStatus,
        });
        await loadApplications();
        closeStatusChangeModal();
    } catch (err: any) {
        console.error('Failed to update status:', err);
        error.value = err.response?.data?.error || 'Не вдалося оновити статус';
    } finally {
        updatingStatus.value[appId] = false;
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

onMounted(loadApplications);
</script>

<template>
    <div class="p-6">
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Заявки</h1>
            <p class="text-gray-600 mt-1">Управління заявками на кваліфікацію</p>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-lg shadow p-4 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Статус</label>
                    <select
                        v-model="statusFilter"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @change="applyFilter"
                    >
                        <option value="">Всі</option>
                        <option value="DRAFT">Чернетка</option>
                        <option value="SUBMITTED">Подано</option>
                        <option value="UNDER_REVIEW">На розгляді</option>
                        <option value="SCHEDULED">Заплановано</option>
                        <option value="TESTED">Протестовано</option>
                        <option value="APPROVED">Схвалено</option>
                        <option value="REFUSED">Відхилено</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">ID Кваліфікації</label>
                    <input
                        v-model="qualificationFilter"
                        type="text"
                        placeholder="ID кваліфікації"
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
            </div>
        </div>

        <!-- Error message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {{ error }}
        </div>

        <!-- Applications table -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
            <div v-if="loading" class="p-8 text-center text-gray-500">Завантаження...</div>
            <table v-else class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ПІБ</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Кваліфікація</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Центр</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата створення</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дії</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="app in applications" :key="app.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ app.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ app.fullName }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ app.applicant.email }}</td>
                        <td class="px-6 py-4 text-sm text-gray-900">
                            <div class="font-medium">{{ app.professionalQualification.name }}</div>
                            <div class="text-xs text-gray-500">
                                Рівень НКР: {{ app.professionalQualification.nqrLevel }}
                                <span v-if="app.professionalQualification.profession">
                                    | {{ app.professionalQualification.profession.name }}
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            <div v-if="app.assignedQualificationCenter" class="font-medium">
                                {{ app.assignedQualificationCenter.name }}
                            </div>
                            <div v-else-if="app.preferredQualificationCenter" class="text-gray-400">
                                {{ app.preferredQualificationCenter.name }} (бажаний)
                            </div>
                            <div v-else class="text-gray-400">Не призначено</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center gap-2">
                                <span
                                    :class="[
                                        'px-2 py-1 rounded-full text-xs font-medium',
                                        getStatusClass(app.status)
                                    ]"
                                >
                                    {{ getStatusLabel(app.status) }}
                                </span>
                                <button
                                    @click="openStatusChangeModal(app)"
                                    class="text-blue-600 hover:text-blue-900 text-xs"
                                    title="Змінити статус"
                                >
                                    ✏️
                                </button>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(app.createdAt) }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                                @click="viewDetails(app.id)"
                                class="text-blue-600 hover:text-blue-900 font-medium"
                            >
                                Деталі
                            </button>
                        </td>
                    </tr>
                    <tr v-if="applications.length === 0">
                        <td colspan="8" class="px-6 py-8 text-center text-gray-500">Заявок не знайдено</td>
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

        <!-- Status Change Modal -->
        <div
            v-if="statusChangeModal.show"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            @click.self="closeStatusChangeModal"
        >
            <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Змінити статус заявки</h3>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Новий статус</label>
                    <select
                        v-model="statusChangeModal.newStatus"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option v-for="option in statusOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>

                <div class="flex justify-end gap-3">
                    <button
                        @click="closeStatusChangeModal"
                        class="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        :disabled="updatingStatus[statusChangeModal.appId || 0]"
                    >
                        Скасувати
                    </button>
                    <button
                        @click="updateApplicationStatus"
                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        :disabled="updatingStatus[statusChangeModal.appId || 0] || statusChangeModal.newStatus === statusChangeModal.currentStatus"
                    >
                        {{ updatingStatus[statusChangeModal.appId || 0] ? 'Оновлення...' : 'Зберегти' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
