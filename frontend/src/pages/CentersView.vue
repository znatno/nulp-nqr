<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { api } from '@/services/api';

interface QualificationCenter {
  id: number;
  name: string;
  edrpou: string;
  address: string;
}

const centers = ref<QualificationCenter[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const searchQuery = ref('');
const page = ref(1);
const pageSize = ref(25);
const total = ref(0);

const filteredCenters = computed(() => {
  if (!searchQuery.value.trim()) {
    return centers.value;
  }
  const query = searchQuery.value.toLowerCase();
  return centers.value.filter(
    (center) =>
      center.name.toLowerCase().includes(query) ||
      center.edrpou.toLowerCase().includes(query) ||
      center.address.toLowerCase().includes(query)
  );
});

const paginatedCenters = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredCenters.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredCenters.value.length / pageSize.value));

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const response = await api.get<{ items: QualificationCenter[]; total: number }>('/centres', {
      params: { page: 1, pageSize: 1000 },
    });
    centers.value = response.data.items || [];
    total.value = response.data.total || 0;
  } catch (err: any) {
    console.error('Failed to load centers:', err);
    error.value = err.response?.data?.error || 'Не вдалося завантажити дані про центри';
  } finally {
    loading.value = false;
  }
}

function changePage(newPage: number) {
  if (newPage >= 1 && newPage <= totalPages.value) {
    page.value = newPage;
  }
}

onMounted(load);
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Кваліфікаційні центри</h1>
      <p class="text-gray-600">Список акредитованих кваліфікаційних центрів</p>
    </div>

    <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
      {{ error }}
    </div>

    <!-- Search -->
    <div class="flex items-center gap-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Пошук по назві, ЄДРПОУ або адресі..."
        class="flex-1 rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
      <div class="text-sm text-gray-600">
        Знайдено: {{ filteredCenters.length }} з {{ total }}
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
            <th class="pb-3 px-4 pt-3">Назва</th>
            <th class="pb-3 px-4 pt-3">ЄДРПОУ</th>
            <th class="pb-3 px-4 pt-3">Адреса</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="center in paginatedCenters"
            :key="center.id"
            class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
          >
            <td class="py-3 px-4">{{ center.id }}</td>
            <td class="py-3 px-4 font-medium">{{ center.name }}</td>
            <td class="py-3 px-4">{{ center.edrpou }}</td>
            <td class="py-3 px-4">{{ center.address }}</td>
          </tr>
          <tr v-if="paginatedCenters.length === 0">
            <td colspan="4" class="py-8 text-center text-gray-400">
              {{ searchQuery ? 'За центрами не знайдено' : 'Центрів поки немає' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-between">
      <div class="text-sm text-gray-600">
        Показано {{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, filteredCenters.length) }} з
        {{ filteredCenters.length }}
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
