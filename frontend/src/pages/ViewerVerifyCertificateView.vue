<script setup lang="ts">
import { ref } from 'vue';
import { api } from '@/services/api';

interface VerificationResult {
    found: boolean;
    certificateNumber?: string;
    validity?: string;
    status?: string;
    holder?: {
        fullName: string;
    };
    qualification?: {
        id: number;
        name: string;
        nkrLevel: number;
        profession: {
            id: number;
            name: string;
            code: string;
        } | null;
    };
    centre?: {
        id: number;
        name: string;
        edrpou: string;
        address: string;
    };
    issueDate?: string;
    expiryDate?: string | null;
    message?: string;
}

const certificateNumber = ref('');
const holderName = ref('');
const qualificationCode = ref('');
const result = ref<VerificationResult | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const verificationTime = ref<Date | null>(null);

function getValidityLabel(validity: string): string {
    const labels: Record<string, string> = {
        VALID: 'Дійсний',
        EXPIRED: 'Протермінований',
        REVOKED: 'Анульований',
    };
    return labels[validity] || validity;
}

function getValidityClass(validity: string): string {
    const classes: Record<string, string> = {
        VALID: 'bg-green-100 text-green-800 border-green-300',
        EXPIRED: 'bg-orange-100 text-orange-800 border-orange-300',
        REVOKED: 'bg-red-100 text-red-800 border-red-300',
    };
    return classes[validity] || 'bg-gray-100 text-gray-800 border-gray-300';
}

function formatDate(dateString: string | null | undefined): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch {
        return dateString;
    }
}

async function handleVerify() {
    if (!certificateNumber.value.trim()) {
        error.value = 'Будь ласка, введіть номер сертифікату';
        return;
    }

    loading.value = true;
    error.value = null;
    result.value = null;
    verificationTime.value = null;

    try {
        const params: Record<string, string> = {
            certificateNumber: certificateNumber.value.trim(),
        };

        if (holderName.value.trim()) {
            params.holderName = holderName.value.trim();
        }

        if (qualificationCode.value.trim()) {
            params.qualificationCode = qualificationCode.value.trim();
        }

        const response = await api.get<VerificationResult>('/verify-certificate', { params });
        result.value = response.data;
        verificationTime.value = new Date();
    } catch (err: any) {
        console.error('Failed to verify certificate:', err);
        error.value = err.response?.data?.error || 'Не вдалося перевірити сертифікат. Спробуйте ще раз.';
        result.value = null;
    } finally {
        loading.value = false;
    }
}

function handleReset() {
    certificateNumber.value = '';
    holderName.value = '';
    qualificationCode.value = '';
    result.value = null;
    error.value = null;
    verificationTime.value = null;
}
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Перевірка сертифікату</h1>
            <p class="text-gray-600">Введіть дані сертифікату для перевірки його дійсності</p>
        </div>

        <!-- Verification Form -->
        <div class="rounded-lg bg-white shadow-sm border border-slate-100 p-6">
            <form @submit.prevent="handleVerify" class="space-y-4">
                <div>
                    <label for="certificateNumber" class="block text-sm font-medium text-gray-700 mb-1">
                        Номер сертифікату <span class="text-red-500">*</span>
                    </label>
                    <input
                        id="certificateNumber"
                        v-model="certificateNumber"
                        type="text"
                        placeholder="Наприклад: CERT-123 або 123"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        :disabled="loading"
                        required
                    />
                </div>

                <div>
                    <label for="holderName" class="block text-sm font-medium text-gray-700 mb-1">
                        ПІБ власника (необов'язково)
                    </label>
                    <input
                        id="holderName"
                        v-model="holderName"
                        type="text"
                        placeholder="Повне ім'я власника сертифікату"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        :disabled="loading"
                    />
                </div>

                <div>
                    <label for="qualificationCode" class="block text-sm font-medium text-gray-700 mb-1">
                        Код кваліфікації (необов'язково)
                    </label>
                    <input
                        id="qualificationCode"
                        v-model="qualificationCode"
                        type="text"
                        placeholder="Код професії"
                        class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        :disabled="loading"
                    />
                </div>

                <div class="flex gap-3">
                    <button
                        type="submit"
                        :disabled="loading || !certificateNumber.trim()"
                        class="rounded bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        <span v-if="loading">Перевірка...</span>
                        <span v-else>Перевірити</span>
                    </button>
                    <button
                        type="button"
                        @click="handleReset"
                        :disabled="loading"
                        class="rounded border border-slate-300 px-4 py-2 text-gray-700 font-medium hover:bg-slate-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                        Очистити
                    </button>
                </div>
            </form>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Not Found Result -->
        <div
            v-if="result && !result.found"
            class="rounded-lg border border-orange-200 bg-orange-50 p-6"
        >
            <div class="flex items-center gap-3">
                <svg
                    class="h-6 w-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
                <div>
                    <h3 class="font-semibold text-orange-900">Сертифікат не знайдено</h3>
                    <p class="text-orange-700">{{ result.message || 'Сертифікат з вказаним номером не існує в системі.' }}</p>
                </div>
            </div>
        </div>

        <!-- Found Result -->
        <div
            v-if="result && result.found"
            class="rounded-lg border border-slate-200 bg-white shadow-sm p-6 space-y-4"
        >
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 class="text-xl font-bold">Результат перевірки</h2>
                <span
                    v-if="result.validity"
                    :class="[
                        'rounded-full border px-3 py-1 text-sm font-medium',
                        getValidityClass(result.validity)
                    ]"
                >
                    {{ getValidityLabel(result.validity) }}
                </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div class="text-sm text-gray-500">Номер сертифікату</div>
                    <div class="font-mono font-semibold text-lg">{{ result.certificateNumber }}</div>
                </div>

                <div>
                    <div class="text-sm text-gray-500">ПІБ власника</div>
                    <div class="font-medium">{{ result.holder?.fullName || '-' }}</div>
                </div>

                <div>
                    <div class="text-sm text-gray-500">Кваліфікація</div>
                    <div class="font-medium">{{ result.qualification?.name || '-' }}</div>
                    <div v-if="result.qualification" class="text-xs text-gray-500 mt-1">
                        Рівень НКР: {{ result.qualification.nkrLevel }}
                        <span v-if="result.qualification.profession">
                            | {{ result.qualification.profession.name }} ({{ result.qualification.profession.code }})
                        </span>
                    </div>
                </div>

                <div>
                    <div class="text-sm text-gray-500">Кваліфікаційний центр</div>
                    <div class="font-medium">{{ result.centre?.name || '-' }}</div>
                    <div v-if="result.centre" class="text-xs text-gray-500 mt-1">
                        ЄДРПОУ: {{ result.centre.edrpou }}
                    </div>
                </div>

                <div>
                    <div class="text-sm text-gray-500">Дата видачі</div>
                    <div class="font-medium">{{ formatDate(result.issueDate) }}</div>
                </div>

                <div>
                    <div class="text-sm text-gray-500">Дата закінчення</div>
                    <div class="font-medium">{{ formatDate(result.expiryDate) }}</div>
                </div>
            </div>

            <div v-if="verificationTime" class="pt-3 border-t border-slate-200 text-xs text-gray-500">
                Час перевірки: {{ verificationTime.toLocaleString('uk-UA') }}
            </div>
        </div>
    </div>
</template>
