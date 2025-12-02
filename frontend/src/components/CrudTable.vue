<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { api } from '@/services/api';
import { entitiesConfig, type EntityConfig } from '@/config/entitiesConfig';

interface Props {
    entityKey: string;
}

const props = defineProps<Props>();

const config = computed<EntityConfig | undefined>(() => entitiesConfig[props.entityKey]);

if (!config.value) {
    console.error(`Entity config not found for key: ${props.entityKey}`);
}

interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}

const items = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const page = ref(1);
const pageSize = ref(10);
const total = ref(0);
const searchQuery = ref('');
const showModal = ref(false);
const editingItem = ref<any | null>(null);
const formData = ref<Record<string, any>>({});

// Debounced search
let searchTimeout: ReturnType<typeof setTimeout> | null = null;
watch(searchQuery, () => {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        page.value = 1;
        loadData();
    }, 300);
});

async function loadData() {
    if (!config.value) return;

    loading.value = true;
    error.value = null;
    try {
        const params: Record<string, string> = {
            page: page.value.toString(),
            pageSize: pageSize.value.toString(),
        };
        if (searchQuery.value.trim()) {
            params.search = searchQuery.value.trim();
        }

        console.log('Loading data from:', config.value.apiBasePath, 'with params:', params);
        const response = await api.get<PaginatedResponse<any>>(config.value.apiBasePath, { params });
        
        console.log('API Response:', {
            status: response.status,
            data: response.data,
            dataType: typeof response.data,
            isArray: Array.isArray(response.data),
            hasItems: response.data?.items !== undefined,
        });
        
        // Handle response - check if it's the expected format
        if (response.data && typeof response.data === 'object') {
            if (Array.isArray(response.data)) {
                // If API returns array directly (legacy format), convert to paginated format
                console.log('Response is array, converting to paginated format');
                items.value = response.data;
                total.value = response.data.length;
            } else if (response.data.items !== undefined) {
                // Paginated format
                console.log('Response is paginated format, items count:', response.data.items?.length);
                items.value = response.data.items || [];
                total.value = response.data.total || 0;
                page.value = response.data.page || page.value;
                pageSize.value = response.data.pageSize || pageSize.value;
                console.log('Set items:', items.value.length, 'total:', total.value);
            } else {
                console.error('Unexpected response format:', response.data);
                throw new Error('Unexpected response format from API');
            }
        } else {
            console.error('Invalid response:', response.data);
            throw new Error('Invalid response from API');
        }
    } catch (err: any) {
        console.error('Failed to load data', err);
        const errorMessage = err.response?.data?.error || err.message || 'Unknown error';
        console.error('Error details:', {
            url: config.value.apiBasePath,
            status: err.response?.status,
            statusText: err.response?.statusText,
            data: err.response?.data,
            message: errorMessage,
            fullError: err,
        });
        error.value = err.response?.data?.error || 'Не вдалося завантажити дані';
    } finally {
        loading.value = false;
    }
}

function openAddModal() {
    editingItem.value = null;
    formData.value = {};
    config.value?.formFields.forEach((field) => {
        formData.value[field.key] = field.type === 'number' ? 0 : '';
    });
    showModal.value = true;
}

function openEditModal(item: any) {
    if (!config.value) return;
    
    editingItem.value = item;
    formData.value = {};
    
    // Extract only the fields we need from formFields config
    config.value.formFields.forEach((field) => {
        const value = item[field.key];
        
        // Handle nested objects - extract ID (e.g., developer.id -> developerId)
        if (field.key.endsWith('Id') && typeof field.key === 'string') {
            const relationName = field.key.replace('Id', '');
            if (item[relationName] && typeof item[relationName] === 'object' && item[relationName].id !== undefined) {
                formData.value[field.key] = item[relationName].id;
            } else if (value !== undefined) {
                formData.value[field.key] = value;
            }
        } else if (value !== undefined && value !== null) {
            // Handle date fields - convert to date string for input[type="date"]
            if (field.type === 'text' && field.key.toLowerCase().includes('date')) {
                if (value instanceof Date) {
                    formData.value[field.key] = value.toISOString().split('T')[0];
                } else if (typeof value === 'string' && value.includes('T')) {
                    // If it's already an ISO string, extract just the date part
                    formData.value[field.key] = value.split('T')[0];
                } else {
                    formData.value[field.key] = value;
                }
            } else {
                formData.value[field.key] = value;
            }
        }
    });
    
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
    editingItem.value = null;
    formData.value = {};
}

async function saveItem() {
    if (!config.value) return;

    // Validate required fields
    for (const field of config.value.formFields) {
        if (field.required && !formData.value[field.key]?.toString().trim()) {
            error.value = `Поле "${field.label}" обов'язкове для заповнення`;
            return;
        }
    }

    // Build clean payload with only form fields, ensuring correct types
    const payload: Record<string, any> = {};
    for (const field of config.value.formFields) {
        const value = formData.value[field.key];
        if (value !== undefined && value !== null && value !== '') {
            if (field.type === 'number') {
                payload[field.key] = Number(value);
            } else if (field.type === 'text' && field.key.toLowerCase().includes('date')) {
                // Date fields: send as ISO string if it's a date input value
                payload[field.key] = value;
            } else {
                payload[field.key] = typeof value === 'string' ? value.trim() : value;
            }
        }
    }

    loading.value = true;
    error.value = null;
    try {
        if (editingItem.value) {
            // Update
            await api.put(`${config.value.apiBasePath}/${editingItem.value.id}`, payload);
        } else {
            // Create
            await api.post(config.value.apiBasePath, payload);
        }
        closeModal();
        await loadData();
    } catch (err: any) {
        console.error('Failed to save item', err);
        error.value = err.response?.data?.error || 'Не вдалося зберегти дані';
    } finally {
        loading.value = false;
    }
}

async function deleteItem(item: any) {
    if (!config.value) return;

    if (!confirm(`Ви впевнені, що хочете видалити цей запис?`)) {
        return;
    }

    loading.value = true;
    error.value = null;
    try {
        await api.delete(`${config.value.apiBasePath}/${item.id}`);
        await loadData();
    } catch (err: any) {
        console.error('Failed to delete item', err);
        error.value = err.response?.data?.error || 'Не вдалося видалити запис';
    } finally {
        loading.value = false;
    }
}

function changePage(newPage: number) {
    const totalPages = Math.ceil(total.value / pageSize.value);
    if (newPage >= 1 && newPage <= totalPages) {
        page.value = newPage;
        loadData();
    }
}

function changePageSize(newSize: number) {
    pageSize.value = newSize;
    page.value = 1;
    loadData();
}

const totalPages = computed(() => Math.ceil(total.value / pageSize.value));

// Helper function to format dates
function formatDate(value: any): string {
    if (!value) return '—';
    try {
        const date = new Date(value);
        if (isNaN(date.getTime())) return '—';
        return date.toLocaleDateString('uk-UA');
    } catch {
        return '—';
    }
}

// Helper function to get nested property values (e.g., 'developer.name')
function getNestedValue(obj: any, path: string): any {
    if (!obj) return '—';
    const keys = path.split('.');
    let value = obj;
    for (const key of keys) {
        if (value === null || value === undefined) return '—';
        value = value[key];
    }
    if (value === null || value === undefined) return '—';
    // If it's an object, try to get a meaningful display value
    if (typeof value === 'object' && value !== null) {
        return value.name || value.fullName || value.id || '—';
    }
    // Check if it's a date field (by checking if the path contains 'date' or 'Date')
    if (path.toLowerCase().includes('date') && (typeof value === 'string' || value instanceof Date)) {
        return formatDate(value);
    }
    return value;
}

onMounted(() => {
    loadData();
});
</script>

<template>
    <div v-if="!config" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
        Конфігурацію для сутності "{{ entityKey }}" не знайдено.
    </div>

    <div v-else class="space-y-4">
        <!-- Header with search and add button -->
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex-1">
                <input
                    v-model="searchQuery"
                    type="text"
                    :placeholder="`Пошук по ${config.searchableFields.join(', ')}...`"
                    class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none sm:w-64"
                />
            </div>
            <button
                @click="openAddModal"
                class="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
                Додати
            </button>
        </div>

        <!-- Error message -->
        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Debug info (remove in production) -->
        <div v-if="!loading && !error" class="rounded border border-blue-200 bg-blue-50 p-2 text-xs text-blue-700">
            Debug: Items loaded: {{ items.length }}, Total: {{ total }}, Page: {{ page }}/{{ totalPages }}
        </div>

        <!-- Loading state -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження даних…
        </div>

        <!-- Table -->
        <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 border-b border-slate-100">
                        <th v-for="column in config.columns" :key="column.key" class="pb-3 px-4 pt-3">
                            {{ column.label }}
                        </th>
                        <th class="pb-3 px-4 pt-3 text-right">Дії</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :key="item.id"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td v-for="column in config.columns" :key="column.key" class="py-3 px-4">
                            {{ getNestedValue(item, column.key) }}
                        </td>
                        <td class="py-3 px-4 text-right">
                            <div class="flex justify-end gap-2">
                                <button
                                    @click="openEditModal(item)"
                                    class="rounded px-3 py-1 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                                >
                                    Редагувати
                                </button>
                                <button
                                    @click="deleteItem(item)"
                                    class="rounded px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-50"
                                >
                                    Видалити
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="items.length === 0">
                        <td :colspan="config.columns.length + 1" class="py-8 text-center text-gray-400">
                            Записів не знайдено.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div v-if="total > 0" class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="text-sm text-gray-600">
                Показано {{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, total) }} з {{ total }}
            </div>
            <div class="flex items-center gap-2">
                <select
                    :value="pageSize"
                    @change="changePageSize(Number(($event.target as HTMLSelectElement).value))"
                    class="rounded border border-slate-200 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
                >
                    <option :value="10">10</option>
                    <option :value="25">25</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                </select>
                <button
                    @click="changePage(page - 1)"
                    :disabled="page <= 1"
                    class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Попередня
                </button>
                <span class="text-sm text-gray-600">
                    Сторінка {{ page }} з {{ totalPages }}
                </span>
                <button
                    @click="changePage(page + 1)"
                    :disabled="page >= totalPages"
                    class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Наступна
                </button>
            </div>
        </div>

        <!-- Modal for Add/Edit -->
        <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            @click.self="closeModal"
        >
            <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 class="mb-4 text-xl font-semibold">
                    {{ editingItem ? 'Редагувати запис' : 'Додати новий запис' }}
                </h2>

                <form @submit.prevent="saveItem" class="space-y-4">
                    <div v-for="field in config.formFields" :key="field.key">
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            {{ field.label }}
                            <span v-if="field.required" class="text-red-500">*</span>
                        </label>
                        <input
                            v-if="field.type === 'text'"
                            v-model="formData[field.key]"
                            :type="field.key.toLowerCase().includes('date') ? 'date' : 'text'"
                            :required="field.required"
                            class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                        <textarea
                            v-else-if="field.type === 'textarea'"
                            v-model="formData[field.key]"
                            :required="field.required"
                            rows="3"
                            class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                        <input
                            v-else-if="field.type === 'number'"
                            v-model.number="formData[field.key]"
                            type="number"
                            :required="field.required"
                            class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                        <select
                            v-else-if="field.type === 'select'"
                            v-model="formData[field.key]"
                            :required="field.required"
                            class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        >
                            <option value="">Виберіть...</option>
                            <option
                                v-for="option in field.options"
                                :key="option.value"
                                :value="option.value"
                            >
                                {{ option.label }}
                            </option>
                        </select>
                    </div>

                    <div class="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            @click="closeModal"
                            class="rounded border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {{ loading ? 'Збереження...' : 'Зберегти' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
