<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { api } from '@/services/api';

interface Stats {
  qualifications: number;
  professionalQualifications: number;
  centers: number;
  persons: number;
}

const router = useRouter();
const { isAuthenticated, userRole } = useAuth();
const stats = ref<Stats>({
  qualifications: 0,
  professionalQualifications: 0,
  centers: 0,
  persons: 0,
});
const loading = ref(false);

async function loadStats() {
  loading.value = true;
  try {
    const [qualificationRes, personRes, centersRes, professionalRes] = await Promise.all([
      api.get<any[]>('/qualifications').catch(() => ({ data: [] })),
      api.get<{ items: any[] }>('/persons', { params: { page: 1, pageSize: 1 } }).catch(() => ({ data: { items: [], total: 0 } })),
      api.get<{ items: any[] }>('/centres', { params: { page: 1, pageSize: 1 } }).catch(() => ({ data: { items: [], total: 0 } })),
      api.get<{ items: any[] }>('/professional-qualifications', { params: { page: 1, pageSize: 1 } }).catch(() => ({ data: { items: [], total: 0 } })),
    ]);

    stats.value = {
      qualifications: Array.isArray(qualificationRes.data) ? qualificationRes.data.length : 0,
      professionalQualifications: (professionalRes.data && 'total' in professionalRes.data) ? professionalRes.data.total : 0,
      centers: (centersRes.data && 'total' in centersRes.data) ? centersRes.data.total : 0,
      persons: (personRes.data && 'total' in personRes.data) ? personRes.data.total : 0,
    };
  } catch (err) {
    console.error('Failed to load stats', err);
  } finally {
    loading.value = false;
  }
}

function navigateTo(path: string) {
  router.push(path);
}

onMounted(() => {
  if (isAuthenticated.value) {
    loadStats();
  }
});
</script>

<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Головна</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Національний реєстр кваліфікацій — централізована система обліку та управління професійними кваліфікаціями, кваліфікаційними центрами та особами, які отримали кваліфікації
      </p>
    </div>

    <!-- Stats Cards -->
    <div v-if="isAuthenticated && !loading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-100">
        <div class="text-sm text-gray-500 mb-2">Кваліфікації</div>
        <div class="text-3xl font-bold text-slate-900">{{ stats.qualifications }}</div>
      </div>
      <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-100">
        <div class="text-sm text-gray-500 mb-2">Професійні кваліфікації</div>
        <div class="text-3xl font-bold text-slate-900">{{ stats.professionalQualifications }}</div>
      </div>
      <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-100">
        <div class="text-sm text-gray-500 mb-2">Кваліфікаційні центри</div>
        <div class="text-3xl font-bold text-slate-900">{{ stats.centers }}</div>
      </div>
      <div class="rounded-lg bg-white p-6 shadow-sm border border-slate-100">
        <div class="text-sm text-gray-500 mb-2">Зареєстровані особи</div>
        <div class="text-3xl font-bold text-slate-900">{{ stats.persons }}</div>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- View Qualifications -->
      <div
        @click="navigateTo('/qualifications')"
        class="rounded-lg bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-300 cursor-pointer transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-blue-100 p-3">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Перегляд кваліфікацій</h3>
            <p class="text-sm text-gray-500">Огляд всіх кваліфікацій та професійних стандартів</p>
          </div>
        </div>
      </div>

      <!-- View Centers -->
      <div
        @click="navigateTo('/centers')"
        class="rounded-lg bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-green-300 cursor-pointer transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-green-100 p-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Кваліфікаційні центри</h3>
            <p class="text-sm text-gray-500">Список акредитованих кваліфікаційних центрів</p>
          </div>
        </div>
      </div>

      <!-- View Persons -->
      <div
        @click="navigateTo('/persons')"
        class="rounded-lg bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-purple-300 cursor-pointer transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-purple-100 p-3">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Зареєстровані особи</h3>
            <p class="text-sm text-gray-500">Особи, які отримали професійні кваліфікації</p>
          </div>
        </div>
      </div>

      <!-- Manager Dashboard (only for managers) -->
      <div
        v-if="userRole === 'MANAGER'"
        @click="navigateTo('/manager')"
        class="rounded-lg bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-300 cursor-pointer transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-orange-100 p-3">
            <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Панель менеджера</h3>
            <p class="text-sm text-gray-500">Управління даними системи</p>
          </div>
        </div>
      </div>

      <!-- Applicant Dashboard (only for applicants) -->
      <div
        v-if="userRole === 'APPLICANT'"
        @click="navigateTo('/applicant')"
        class="rounded-lg bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-300 cursor-pointer transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="rounded-full bg-indigo-100 p-3">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Мої заявки</h3>
            <p class="text-sm text-gray-500">Перегляд та управління вашими заявками</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="rounded-lg bg-slate-50 p-6 border border-slate-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Про систему</h2>
      <div class="grid gap-4 sm:grid-cols-2 text-sm text-gray-600">
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Мета системи</h3>
          <p>Забезпечення прозорості та доступності інформації про професійні кваліфікації, кваліфікаційні центри та осіб, які отримали кваліфікації.</p>
        </div>
        <div>
          <h3 class="font-semibold text-gray-900 mb-2">Функціонал</h3>
          <p>Система дозволяє переглядати кваліфікації, центри, акредитації та іншу інформацію про систему професійної кваліфікації.</p>
        </div>
      </div>
    </div>
  </div>
</template>
