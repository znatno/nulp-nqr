<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { api } from '@/services/api';

interface QualificationCenter {
  id: number;
  name: string;
  edrpou: string;
  address: string;
}

interface ProfessionalQualification {
  id: number;
  name: string;
  nkrLevel: number;
}

interface Person {
  id: number;
  fullName: string;
  certificateNumber?: string;
  dateReceived: string;
  qualificationCenter?: QualificationCenter | null;
  professionalQualification?: ProfessionalQualification | null;
}

const persons = ref<Person[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const searchQuery = ref('');
const page = ref(1);
const pageSize = ref(25);
const total = ref(0);

const totalPages = computed(() => Math.ceil(total.value / pageSize.value));

function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('uk-UA');
}

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const response = await api.get<{ items: Person[]; total: number }>('/persons', {
      params: { 
        page: page.value, 
        pageSize: pageSize.value,
        search: searchQuery.value.trim() || undefined,
      },
    });
    persons.value = response.data.items || [];
    total.value = response.data.total || 0;
  } catch (err: any) {
    console.error('Failed to load persons:', err);
    error.value = err.response?.data?.error || 'Не вдалося завантажити дані про осіб';
  } finally {
    loading.value = false;
  }
}

function changePage(newPage: number) {
  if (newPage >= 1 && newPage <= totalPages.value) {
    page.value = newPage;
    load();
  }
}

// Debounce search to avoid too many API calls
let searchTimeout: ReturnType<typeof setTimeout> | null = null;
function onSearchChange() {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    page.value = 1; // Reset to first page when searching
    load();
  }, 300);
}

onMounted(load);
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Зареєстровані особи</h1>
      <p class="text-gray-600">Особи, які отримали професійні кваліфікації</p>
    </div>

    <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
      {{ error }}
    </div>

    <!-- Search -->
    <div class="flex items-center gap-4">
      <input
        v-model="searchQuery"
        @input="onSearchChange"
        type="text"
        placeholder="Пошук по ПІБ або номеру сертифікату..."
        class="flex-1 rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
      <div class="text-sm text-gray-600">
        Знайдено: {{ total }}
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
      Завантаження даних…
    </div>

    <!-- Table -->
    <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b border-slate-100">
            <th class="pb-3 px-4 pt-3">ID</th>
            <th class="pb-3 px-4 pt-3">ПІБ</th>
            <th class="pb-3 px-4 pt-3">Номер сертифікату</th>
            <th class="pb-3 px-4 pt-3">Професійна кваліфікація</th>
            <th class="pb-3 px-4 pt-3">Кваліфікаційний центр</th>
            <th class="pb-3 px-4 pt-3">Дата отримання</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="person in persons"
            :key="person.id"
            class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
          >
            <td class="py-3 px-4">{{ person.id }}</td>
            <td class="py-3 px-4 font-medium">{{ person.fullName }}</td>
            <td class="py-3 px-4">{{ person.certificateNumber || '—' }}</td>
            <td class="py-3 px-4">{{ person.professionalQualification?.name || '—' }}</td>
            <td class="py-3 px-4">{{ person.qualificationCenter?.name || '—' }}</td>
            <td class="py-3 px-4">{{ formatDate(person.dateReceived) }}</td>
          </tr>
          <tr v-if="persons.length === 0 && !loading">
            <td colspan="6" class="py-8 text-center text-gray-400">
              {{ searchQuery ? 'За особами не знайдено' : 'Осіб поки немає' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-between">
      <div class="text-sm text-gray-600">
        Показано {{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, total) }} з
        {{ total }}
      </div>
      <div class="flex items-center gap-2">
        <button
          @click="changePage(page - 1)"
          :disabled="page <= 1"
          class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Попередня
        </button>
        <span class="text-sm text-gray-600"> Сторінка {{ page }} з {{ totalPages }} </span>
        <button
          @click="changePage(page + 1)"
          :disabled="page >= totalPages"
          class="rounded border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Наступна
        </button>
      </div>
    </div>
  </div>
</template>
