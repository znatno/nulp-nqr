<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

interface User {
    id: number;
    email: string;
    role: 'VIEWER' | 'USER' | 'MANAGER';
    canApplyForQualification: boolean;
    canDevelopStandards: boolean;
    canAccreditCenters: boolean;
    createdAt: string;
    updatedAt: string;
    _count?: {
        applications: number;
        professionals: number;
    };
}

const users = ref<User[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const searchEmail = ref('');
const filterRole = ref<string>('');
const editingUser = ref<User | null>(null);
const showEditModal = ref(false);
const showGrantManagerModal = ref(false);
const userToGrantManager = ref<User | null>(null);
const grantingManager = ref(false);

const router = useRouter();

async function loadUsers() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {
            page: page.value,
            pageSize: pageSize.value,
        };
        if (searchEmail.value) {
            params.email = searchEmail.value;
        }
        if (filterRole.value) {
            params.role = filterRole.value;
        }
        const response = await api.get<{ items: User[]; total: number; page: number; pageSize: number }>(
            '/users',
            { params }
        );
        users.value = response.data.items || [];
        total.value = response.data.total || 0;
    } catch (err: any) {
        console.error('Failed to load users:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити користувачів';
    } finally {
        loading.value = false;
    }
}

function getRoleLabel(role: string): string {
    const labels: Record<string, string> = {
        MANAGER: 'Менеджер',
        USER: 'Користувач',
        VIEWER: 'Переглядач',
    };
    return labels[role] || role;
}

function openEditModal(user: User) {
    editingUser.value = { ...user };
    showEditModal.value = true;
}

function openGrantManagerModal(user: User) {
    userToGrantManager.value = user;
    showGrantManagerModal.value = true;
}

function closeGrantManagerModal() {
    showGrantManagerModal.value = false;
    userToGrantManager.value = null;
}

async function grantManagerRights() {
    if (!userToGrantManager.value) return;
    
    grantingManager.value = true;
    error.value = null;
    try {
        await api.put(`/users/${userToGrantManager.value.id}`, {
            role: 'MANAGER',
        });
        closeGrantManagerModal();
        await loadUsers();
    } catch (err: any) {
        console.error('Failed to grant manager rights:', err);
        error.value = err.response?.data?.error || 'Не вдалося надати права менеджера';
    } finally {
        grantingManager.value = false;
    }
}

async function saveUser() {
    if (!editingUser.value) return;
    
    loading.value = true;
    error.value = null;
    try {
        await api.put(`/users/${editingUser.value.id}`, {
            role: editingUser.value.role,
            canApplyForQualification: editingUser.value.canApplyForQualification,
            canDevelopStandards: editingUser.value.canDevelopStandards,
            canAccreditCenters: editingUser.value.canAccreditCenters,
        });
        showEditModal.value = false;
        await loadUsers();
    } catch (err: any) {
        console.error('Failed to update user:', err);
        error.value = err.response?.data?.error || 'Не вдалося оновити користувача';
    } finally {
        loading.value = false;
    }
}

function formatDate(dateString: string): string {
    try {
        return new Date(dateString).toLocaleDateString('uk-UA');
    } catch {
        return dateString;
    }
}

onMounted(() => {
    loadUsers();
});
</script>

<template>
    <div class="p-6">
        <div class="mb-6">
            <h1 class="text-2xl font-bold text-gray-900">Користувачі</h1>
            <p class="text-gray-600 mt-1">Управління користувачами системи та їх правами доступу</p>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-lg shadow p-4 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Пошук за email</label>
                    <input
                        v-model="searchEmail"
                        type="text"
                        placeholder="email@example.com"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @input="loadUsers"
                    />
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Роль</label>
                    <select
                        v-model="filterRole"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        @change="loadUsers"
                    >
                        <option value="">Всі</option>
                        <option value="MANAGER">Менеджер</option>
                        <option value="USER">Користувач</option>
                        <option value="VIEWER">Переглядач</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Error message -->
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {{ error }}
        </div>

        <!-- Users table -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
            <div v-if="loading" class="p-8 text-center text-gray-500">Завантаження...</div>
            <table v-else class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Роль</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Права</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата створення</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дії</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ user.email }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span class="px-2 py-1 rounded-full text-xs font-medium"
                                :class="{
                                    'bg-purple-100 text-purple-800': user.role === 'MANAGER',
                                    'bg-blue-100 text-blue-800': user.role === 'USER',
                                    'bg-gray-100 text-gray-800': user.role === 'VIEWER',
                                }">
                                {{ getRoleLabel(user.role) }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-500">
                            <div class="flex flex-wrap gap-2">
                                <span v-if="user.canApplyForQualification" class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Заявник</span>
                                <span v-if="user.canDevelopStandards" class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Розробник</span>
                                <span v-if="user.canAccreditCenters" class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Експерт</span>
                                <span v-if="!user.canApplyForQualification && !user.canDevelopStandards && !user.canAccreditCenters" class="text-gray-400 text-xs">Немає</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(user.createdAt) }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                            <div class="flex items-center gap-3">
                                <button
                                    @click="openEditModal(user)"
                                    class="text-blue-600 hover:text-blue-900 font-medium"
                                >
                                    Редагувати
                                </button>
                                <button
                                    v-if="user.role !== 'MANAGER'"
                                    @click="openGrantManagerModal(user)"
                                    class="text-purple-600 hover:text-purple-900 font-medium text-xs"
                                    title="Надати права менеджера"
                                >
                                    ⭐ Менеджер
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="users.length === 0">
                        <td colspan="5" class="px-6 py-8 text-center text-gray-500">Користувачів не знайдено</td>
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
                        @click="page--; loadUsers()"
                        :disabled="page === 1"
                        class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                        Назад
                    </button>
                    <button
                        @click="page++; loadUsers()"
                        :disabled="page * pageSize >= total"
                        class="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
                    >
                        Вперед
                    </button>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div v-if="showEditModal && editingUser" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-4">Редагувати користувача</h2>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                :value="editingUser.email"
                                disabled
                                class="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Роль</label>
                            <select
                                v-model="editingUser.role"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="VIEWER">Переглядач</option>
                                <option value="USER">Користувач</option>
                                <option value="MANAGER">Менеджер</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Права доступу</label>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input
                                        v-model="editingUser.canApplyForQualification"
                                        type="checkbox"
                                        class="mr-2"
                                    />
                                    <span class="text-sm">Може подавати заявки</span>
                                </label>
                                <label class="flex items-center">
                                    <input
                                        v-model="editingUser.canDevelopStandards"
                                        type="checkbox"
                                        class="mr-2"
                                    />
                                    <span class="text-sm">Може розробляти стандарти</span>
                                </label>
                                <label class="flex items-center">
                                    <input
                                        v-model="editingUser.canAccreditCenters"
                                        type="checkbox"
                                        class="mr-2"
                                    />
                                    <span class="text-sm">Може акредитувати центри</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end gap-3">
                        <button
                            @click="showEditModal = false"
                            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Скасувати
                        </button>
                        <button
                            @click="saveUser"
                            :disabled="loading"
                            class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                        >
                            Зберегти
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grant Manager Rights Confirmation Modal -->
        <div
            v-if="showGrantManagerModal && userToGrantManager"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeGrantManagerModal"
        >
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-4 text-purple-900">Надати права менеджера</h2>
                    <div class="space-y-4">
                        <div class="bg-purple-50 border border-purple-200 rounded-md p-4">
                            <p class="text-sm text-purple-900 mb-2">
                                Ви впевнені, що хочете надати права <strong>Менеджера системи</strong> користувачу:
                            </p>
                            <p class="font-semibold text-purple-900">{{ userToGrantManager.email }}</p>
                        </div>
                        <div class="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                            <p class="text-xs text-yellow-800">
                                ⚠️ <strong>Увага:</strong> Менеджери мають повний доступ до системи, включаючи можливість управління користувачами, заявками та всіма даними.
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end gap-3">
                        <button
                            @click="closeGrantManagerModal"
                            :disabled="grantingManager"
                            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                        >
                            Скасувати
                        </button>
                        <button
                            @click="grantManagerRights"
                            :disabled="grantingManager"
                            class="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
                        >
                            {{ grantingManager ? 'Надання прав...' : 'Підтвердити' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
