<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import type { User } from '@/types/auth';

const router = useRouter();
const { login, user } = useAuth();

const email = ref('');
const password = ref('');
const error = ref<string | null>(null);
const loading = ref(false);

function getRoleHome(user: User | null): string {
    if (!user) {
        return '/';
    }
    
    if (user.role === 'MANAGER') {
        return '/manager';
    }
    
    if (user.role === 'USER' && user.canApplyForQualification) {
        return '/applicant';
    }
    
    if (user.role === 'USER' && user.canDevelopStandards) {
        return '/developer';
    }
    
    if (user.role === 'USER' && user.canAccreditCenters) {
        return '/expert';
    }
    
    // VIEWER or USER without capabilities -> home page
    return '/';
}

async function handleSubmit() {
    if (!email.value.trim() || !password.value) {
        error.value = 'Будь ласка, введіть email та пароль';
        return;
    }

    loading.value = true;
    error.value = null;

    try {
        await login(email.value, password.value);
        // User is now set after login, get the home route based on user capabilities
        const homeRoute = getRoleHome(user.value);
        router.push(homeRoute);
    } catch (err: any) {
        console.error('Login error:', err);
        // Show the actual error message from the backend or a generic one
        const errorMsg = err.message || err.response?.data?.error || 'Помилка входу. Перевірте дані та спробуйте ще раз.';
        error.value = errorMsg;
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div class="w-full max-w-md">
            <div class="mb-8 text-center">
                <h1 class="text-3xl font-bold text-slate-900">NQR IS</h1>
                <p class="mt-2 text-slate-600">Увійдіть до системи</p>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-sm border border-slate-200">
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div v-if="error" class="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {{ error }}
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-slate-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            v-model="email"
                            type="email"
                            required
                            autocomplete="email"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="your@email.com"
                            :disabled="loading"
                        />
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-slate-700 mb-1">
                            Пароль
                        </label>
                        <input
                            id="password"
                            v-model="password"
                            type="password"
                            required
                            autocomplete="current-password"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="••••••••"
                            :disabled="loading"
                        />
                    </div>

                    <button
                        type="submit"
                        :disabled="loading"
                        class="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span v-if="loading">Вхід...</span>
                        <span v-else>Увійти</span>
                    </button>
                </form>

                <div class="mt-6 border-t border-slate-200 pt-6">
                    <p class="text-sm text-slate-600 text-center mb-3">
                        Немає облікового запису?
                        <RouterLink to="/register" class="text-blue-600 hover:text-blue-700 font-medium">
                            Зареєструватися
                        </RouterLink>
                    </p>
                    <p class="text-xs text-slate-500 text-center">
                        Тестові облікові записи:<br />
                        <span class="font-mono">manager@nqr.test</span> / <span class="font-mono">Password123!</span><br />
                        <span class="font-mono">applicant@nqr.test</span> / <span class="font-mono">Password123!</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
