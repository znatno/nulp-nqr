<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { useRole } from '@/composables/useRole';

const router = useRouter();
const { userEmail, user, isAuthenticated, logout } = useAuth();
const { isManager, isApplicant, isDeveloper, isExpert, hasCertificates } = useRole();

function handleLogout() {
    logout();
    router.push('/login');
}

function getRoleLabel(role: string | null | undefined): string {
    if (!role) return 'Гість';
    switch (role) {
        case 'MANAGER':
            return 'Менеджер';
        case 'USER':
            if (user.value?.canApplyForQualification) return 'Заявник';
            if (user.value?.canDevelopStandards) return 'Розробник';
            if (user.value?.canAccreditCenters) return 'Експерт';
            return 'Користувач';
        case 'VIEWER':
            return 'Переглядач';
        default:
            return 'Користувач';
    }
}
</script>

<template>
    <aside class="w-64 bg-slate-900 text-white flex flex-col">
        <!-- Header -->
        <div class="p-5 border-b border-slate-700">
            <h2 class="text-xl font-bold">NQR IS</h2>
            <p class="text-xs text-slate-400 mt-1">Національний реєстр кваліфікацій</p>
        </div>
        
        <nav class="flex-1 overflow-y-auto">
            <!-- Section A: Перевірка (visible to everyone) -->
            <div class="p-4 border-b border-slate-700">
                <div class="mb-3">
                    <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Перевірка
                    </h3>
                    <RouterLink
                        to="/verify"
                        class="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm"
                        active-class="bg-blue-700"
                    >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Перевірка сертифікату
                    </RouterLink>
                </div>
            </div>

            <!-- Section B: Навігація (visible to everyone) -->
            <div class="p-4 border-b border-slate-700">
                <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Навігація
                </h3>
                <div class="space-y-1">
                    <RouterLink
                        to="/"
                        class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                        :class="{ 'bg-slate-800 text-blue-400': $route.path === '/' }"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Головна
                    </RouterLink>
                    <RouterLink
                        to="/qualifications"
                        class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                        active-class="bg-slate-800 text-blue-400"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Кваліфікації
                    </RouterLink>
                    <RouterLink
                        to="/centers"
                        class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                        active-class="bg-slate-800 text-blue-400"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Центри
                    </RouterLink>
                    <RouterLink
                        to="/persons"
                        class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                        active-class="bg-slate-800 text-blue-400"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Особи
                    </RouterLink>
                </div>
            </div>

            <!-- Section C: Управління (visible only for authenticated users) -->
            <template v-if="isAuthenticated">
                <div class="p-4 border-b border-slate-700">
                    <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Управління
                    </h3>
                    <div class="space-y-1">
                        <!-- System Manager -->
                        <template v-if="isManager">
                            <RouterLink
                                to="/manager"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                :class="{ 'bg-slate-800 text-blue-400': $route.path === '/manager' || $route.path === '/manager/' || $route.path === '/manager/dashboard' }"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Панель менеджера
                            </RouterLink>
                            <RouterLink
                                to="/manager/users"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                Користувачі
                            </RouterLink>
                            <RouterLink
                                to="/manager/developers"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Розробники стандартів
                            </RouterLink>
                            <RouterLink
                                to="/manager/professions"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Професії
                            </RouterLink>
                            <RouterLink
                                to="/manager/professional-qualifications"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Профкваліфікації
                            </RouterLink>
                            <RouterLink
                                to="/manager/centres"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Кваліфікаційні центри
                            </RouterLink>
                            <RouterLink
                                to="/manager/accreditations"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Акредитації
                            </RouterLink>
                            <RouterLink
                                to="/manager/experts"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Експерти
                            </RouterLink>
                            <RouterLink
                                to="/manager/examinations"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                Експертизи
                            </RouterLink>
                            <RouterLink
                                to="/manager/applications"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Заявки
                            </RouterLink>
                            <RouterLink
                                to="/manager/test-sessions"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                Тести / Оцінювання
                            </RouterLink>
                            <RouterLink
                                to="/manager/reports"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Звіти
                            </RouterLink>
                        </template>

                        <!-- Applicant / Professional -->
                        <template v-if="isApplicant">
                            <RouterLink
                                to="/applicant/applications"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Мої заявки
                            </RouterLink>
                            <RouterLink
                                v-if="hasCertificates || true"
                                to="/applicant/certificates"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Мої сертифікати
                            </RouterLink>
                        </template>

                        <!-- Developer -->
                        <template v-if="isDeveloper">
                            <RouterLink
                                to="/developer"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                :class="{ 'bg-slate-800 text-blue-400': $route.path === '/developer' || $route.path === '/developer/' }"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Панель розробника
                            </RouterLink>
                            <RouterLink
                                to="/developer/professions"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Мої професії
                            </RouterLink>
                            <RouterLink
                                to="/developer/qualifications"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Мої профкваліфікації
                            </RouterLink>
                        </template>

                        <!-- Expert -->
                        <template v-if="isExpert">
                            <RouterLink
                                to="/expert"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                :class="{ 'bg-slate-800 text-blue-400': $route.path === '/expert' || $route.path === '/expert/' }"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Панель експерта
                            </RouterLink>
                            <RouterLink
                                to="/expert/expertises"
                                class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-sm"
                                active-class="bg-slate-800 text-blue-400"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                Мої експертизи
                            </RouterLink>
                        </template>
                    </div>
                </div>
            </template>
        </nav>

        <!-- User info and logout (authenticated) -->
        <div v-if="isAuthenticated" class="mt-auto p-4 border-t border-slate-700 bg-slate-800/50">
            <div class="mb-3 text-sm">
                <div class="text-slate-200 font-medium">{{ userEmail }}</div>
                <div class="text-slate-400 text-xs mt-1">{{ getRoleLabel(user?.role) }}</div>
            </div>
            <button
                @click="handleLogout"
                class="w-full rounded-md bg-slate-700 px-3 py-2 text-sm hover:bg-slate-600 transition-colors font-medium"
            >
                Вийти
            </button>
        </div>

        <!-- Login button (unauthenticated) -->
        <div v-else class="mt-auto p-4 border-t border-slate-700">
            <RouterLink
                to="/login"
                class="flex items-center justify-center gap-2 w-full rounded-md bg-blue-600 px-3 py-2.5 text-sm hover:bg-blue-700 transition-colors font-medium shadow-sm"
                :class="{ 'bg-blue-700': $route.path === '/login' }"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Увійти
            </RouterLink>
            <p class="text-xs text-slate-400 text-center mt-2">
                Немає облікового запису?
                <RouterLink to="/register" class="text-blue-400 hover:text-blue-300 underline">
                    Зареєструватися
                </RouterLink>
            </p>
        </div>
    </aside>
</template>
