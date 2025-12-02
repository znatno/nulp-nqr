<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { api } from '@/services/api';
import type { Role } from '@/types/auth';

const router = useRouter();
const { setFromTokenPayload } = useAuth();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref<string | null>(null);
const loading = ref(false);

function getRoleHome(role: Role): string {
    switch (role) {
        case 'MANAGER':
            return '/manager';
        case 'APPLICANT':
            return '/applicant';
        case 'VIEWER':
            return '/';
        default:
            return '/';
    }
}

async function handleSubmit() {
    if (!email.value.trim() || !password.value) {
        error.value = 'Будь ласка, введіть email та пароль';
        return;
    }

    if (password.value.length < 6) {
        error.value = 'Пароль повинен містити принаймні 6 символів';
        return;
    }

    if (password.value !== confirmPassword.value) {
        error.value = 'Паролі не співпадають';
        return;
    }

    loading.value = true;
    error.value = null;

    try {
        // Register
        const response = await api.post<{ token: string; user: { id: number; email: string; role: Role } }>(
            '/auth/register',
            {
                email: email.value.trim(),
                password: password.value,
            }
        );

        // Auto-login after registration
        setFromTokenPayload(response.data.token, response.data.user);
        const homeRoute = getRoleHome(response.data.user.role);
        router.push(homeRoute);
    } catch (err: any) {
        console.error('Registration error:', err);
        const errorMsg = err.response?.data?.error || 'Помилка реєстрації. Спробуйте ще раз.';
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
                <h1 class="text-3xl font-bold text-slate-900">NQF Register</h1>
                <p class="mt-2 text-slate-600">Створіть обліковий запис заявника</p>
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
                            autocomplete="new-password"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="••••••••"
                            :disabled="loading"
                        />
                        <p class="mt-1 text-xs text-slate-500">Мінімум 6 символів</p>
                    </div>

                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium text-slate-700 mb-1">
                            Підтвердіть пароль
                        </label>
                        <input
                            id="confirmPassword"
                            v-model="confirmPassword"
                            type="password"
                            required
                            autocomplete="new-password"
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
                        <span v-if="loading">Реєстрація...</span>
                        <span v-else>Зареєструватися</span>
                    </button>
                </form>

                <div class="mt-6 border-t border-slate-200 pt-6">
                    <p class="text-sm text-slate-600 text-center">
                        Вже маєте обліковий запис?
                        <RouterLink to="/login" class="text-blue-600 hover:text-blue-700 font-medium">
                            Увійти
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
