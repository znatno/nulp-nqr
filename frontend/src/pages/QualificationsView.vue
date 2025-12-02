<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface Profession {
  id: number;
  name: string;
  code?: string;
}
interface Qualification {
  id: number;
  title: string;
  level: number;
  profession?: Profession | null;
}

interface ProfessionalQualification {
  id: number;
  name: string;
  nkrLevel: number;
  profession?: Profession | null;
}

const list = ref<Qualification[]>([]);
const professionalQualifications = ref<ProfessionalQualification[]>([]);

const loading = ref(false);
const error = ref<string | null>(null);

function formatProfession(profession?: Profession | null): string {
  if (!profession) return '—';
  if (profession.code) {
    return `${profession.name} (${profession.code})`;
  }
  return profession.name;
}

async function load() {
  loading.value = true;
  error.value = null;
  try {
    // Get qualifications data
    const [qualificationRes, professionalRes] = await Promise.all([
      api.get<Qualification[]>('/qualifications'),
      api.get<{ items: ProfessionalQualification[] }>('/professional-qualifications', {
        params: { page: 1, pageSize: 1000 },
      }),
    ]);

    list.value = qualificationRes.data;
    professionalQualifications.value = professionalRes.data.items || [];
  } catch (err: any) {
    console.error('Failed to load data:', err);
    const errorMessage = err.response?.data?.error || err.message || 'Unknown error';
    console.error('Error details:', {
      status: err.response?.status,
      statusText: err.response?.statusText,
      data: err.response?.data,
      message: errorMessage,
    });
    error.value = `Не вдалося завантажити кваліфікації: ${errorMessage}. Повторіть спробу пізніше.`;
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Професійні кваліфікації</h1>
      <p class="text-gray-600">Перегляд всіх кваліфікацій та професійних стандартів</p>
    </div>

    <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
      {{ error }}
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <div class="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
        <p class="text-sm text-gray-500">Кваліфікації</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900">{{ list.length }}</p>
      </div>
      <div class="rounded-lg bg-white p-4 shadow-sm border border-slate-100">
        <p class="text-sm text-gray-500">Професійні кваліфікації</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900">{{ professionalQualifications.length }}</p>
      </div>
    </div>

    <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
      Завантаження даних…
    </div>

    <!-- Table with all qualifications -->
    <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="text-left text-gray-500 border-b border-slate-100">
            <th class="pb-3 px-4 pt-3">ID</th>
            <th class="pb-3 px-4 pt-3">Назва</th>
            <th class="pb-3 px-4 pt-3">Рівень</th>
            <th class="pb-3 px-4 pt-3">Професія</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="qualification in list"
            :key="qualification.id"
            class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
          >
            <td class="py-3 px-4">{{ qualification.id }}</td>
            <td class="py-3 px-4 font-medium">{{ qualification.title }}</td>
            <td class="py-3 px-4">{{ qualification.level }}</td>
            <td class="py-3 px-4">{{ formatProfession(qualification.profession) }}</td>
          </tr>
          <tr v-if="list.length === 0">
            <td colspan="4" class="py-8 text-center text-gray-400">Кваліфікацій не знайдено.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Professional Qualifications Table -->
    <div v-if="!loading && professionalQualifications.length > 0" class="space-y-4">
      <h2 class="text-xl font-semibold">Професійні кваліфікації</h2>
      <div class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
        <table class="min-w-full text-sm">
          <thead>
            <tr class="text-left text-gray-500 border-b border-slate-100">
              <th class="pb-3 px-4 pt-3">ID</th>
              <th class="pb-3 px-4 pt-3">Назва</th>
              <th class="pb-3 px-4 pt-3">Рівень НРК</th>
              <th class="pb-3 px-4 pt-3">Професія</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="qualification in professionalQualifications"
              :key="qualification.id"
              class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
            >
              <td class="py-3 px-4">{{ qualification.id }}</td>
              <td class="py-3 px-4 font-medium">{{ qualification.name }}</td>
              <td class="py-3 px-4">{{ qualification.nkrLevel }}</td>
              <td class="py-3 px-4">{{ formatProfession(qualification.profession) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
