<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
    nqrLevel: number;
    profession: {
        id: number;
        name: string;
        code: string;
    } | null;
}

const centres = ref<QualificationCenter[]>([]);
const selectedCentre = ref<QualificationCenter | null>(null);
const qualifications = ref<ProfessionalQualification[]>([]);
const loading = ref(false);
const loadingQualifications = ref(false);
const error = ref<string | null>(null);
const searchQuery = ref('');

// Application form state
const showApplicationModal = ref(false);
const selectedQualification = ref<ProfessionalQualification | null>(null);
const fullName = ref('');
const preferredDate = ref('');
const comment = ref('');
const submitting = ref(false);
const submitError = ref<string | null>(null);
const submitSuccess = ref(false);

async function loadCentres() {
    loading.value = true;
    error.value = null;
    try {
        const params: any = {};
        if (searchQuery.value.trim()) {
            params.search = searchQuery.value.trim();
        }
        const response = await api.get<QualificationCenter[]>('/applicant/centres', { params });
        centres.value = response.data;
    } catch (err: any) {
        console.error('Failed to load centres:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити дані про центри';
    } finally {
        loading.value = false;
    }
}

async function loadQualifications(centreId: number) {
    loadingQualifications.value = true;
    try {
        const response = await api.get<ProfessionalQualification[]>(`/applicant/centres/${centreId}/qualifications`);
        qualifications.value = response.data;
    } catch (err: any) {
        console.error('Failed to load qualifications:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити кваліфікації';
    } finally {
        loadingQualifications.value = false;
    }
}

function selectCentre(centre: QualificationCenter) {
    selectedCentre.value = centre;
    qualifications.value = [];
    loadQualifications(centre.id);
}

function openApplicationForm(qualification: ProfessionalQualification) {
    selectedQualification.value = qualification;
    fullName.value = '';
    preferredDate.value = '';
    comment.value = '';
    submitError.value = null;
    submitSuccess.value = false;
    showApplicationModal.value = true;
}

function closeApplicationModal() {
    showApplicationModal.value = false;
    selectedQualification.value = null;
    fullName.value = '';
    preferredDate.value = '';
    comment.value = '';
    submitError.value = null;
    submitSuccess.value = false;
}

async function submitApplication() {
    if (!selectedCentre.value || !selectedQualification.value) {
        return;
    }

    submitting.value = true;
    submitError.value = null;
    submitSuccess.value = false;

    try {
        const payload: any = {
            centreId: selectedCentre.value.id,
            qualificationId: selectedQualification.value.id,
            fullName: fullName.value.trim(),
        };

        if (preferredDate.value.trim()) {
            payload.preferredDate = preferredDate.value.trim();
        }

        if (comment.value.trim()) {
            payload.comment = comment.value.trim();
        }

        await api.post('/applicant/applications', payload);
        submitSuccess.value = true;

        // Close modal after 2 seconds and optionally navigate
        setTimeout(() => {
            closeApplicationModal();
            // Optionally navigate to applications page
            // router.push('/applicant/applications');
        }, 2000);
    } catch (err: any) {
        console.error('Failed to submit application:', err);
        submitError.value = err.response?.data?.error || 'Не вдалося подати заявку';
    } finally {
        submitting.value = false;
    }
}

onMounted(loadCentres);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Кваліфікаційні центри</h1>
            <p class="text-gray-600">Перегляньте доступні кваліфікаційні центри та їх кваліфікації</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Search -->
        <div class="flex items-center gap-4">
            <input
                v-model="searchQuery"
                @input="loadCentres"
                type="text"
                placeholder="Пошук по назві, ЄДРПОУ або адресі..."
                class="flex-1 rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Centres List -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold">Кваліфікаційні центри</h2>

                <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
                    Завантаження...
                </div>

                <div v-else class="space-y-2">
                    <div
                        v-for="centre in centres"
                        :key="centre.id"
                        @click="selectCentre(centre)"
                        :class="[
                            'rounded border p-4 cursor-pointer transition-colors',
                            selectedCentre?.id === centre.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        ]"
                    >
                        <div class="font-medium text-slate-900">{{ centre.name }}</div>
                        <div class="text-sm text-slate-600 mt-1">ЄДРПОУ: {{ centre.edrpou }}</div>
                        <div class="text-sm text-slate-600">{{ centre.address }}</div>
                    </div>

                    <div v-if="centres.length === 0" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-400">
                        Центрів не знайдено
                    </div>
                </div>
            </div>

            <!-- Qualifications List -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold">
                    Кваліфікації
                    <span v-if="selectedCentre" class="text-base font-normal text-gray-600">
                        - {{ selectedCentre.name }}
                    </span>
                </h2>

                <div v-if="!selectedCentre" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-400">
                    Оберіть центр для перегляду кваліфікацій
                </div>

                <div v-else-if="loadingQualifications" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
                    Завантаження кваліфікацій...
                </div>

                <div v-else class="space-y-2">
                    <div
                        v-for="qual in qualifications"
                        :key="qual.id"
                        class="rounded border border-slate-200 p-4 hover:border-slate-300 hover:bg-slate-50"
                    >
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <div class="font-medium text-slate-900">{{ qual.name }}</div>
                                <div class="text-sm text-slate-600 mt-1">
                                    Рівень НКР: {{ qual.nqrLevel }}
                                    <span v-if="qual.profession">
                                        | Професія: {{ qual.profession.name }} ({{ qual.profession.code }})
                                    </span>
                                </div>
                            </div>
                            <button
                                @click="openApplicationForm(qual)"
                                class="ml-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Подати заявку
                            </button>
                        </div>
                    </div>

                    <div v-if="qualifications.length === 0" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-400">
                        У цьому центрі немає доступних кваліфікацій
                    </div>
                </div>
            </div>
        </div>

        <!-- Application Modal -->
        <div
            v-if="showApplicationModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            @click.self="closeApplicationModal"
        >
            <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg" @click.stop>
                <h3 class="text-xl font-semibold mb-4">Подача заявки</h3>

                <div v-if="selectedCentre && selectedQualification" class="space-y-4">
                    <div class="rounded bg-slate-50 p-3 text-sm">
                        <div><strong>Центр:</strong> {{ selectedCentre.name }}</div>
                        <div class="mt-1"><strong>Кваліфікація:</strong> {{ selectedQualification.name }}</div>
                    </div>

                    <div>
                        <label for="fullName" class="block text-sm font-medium text-slate-700 mb-1">
                            ПІБ <span class="text-red-500">*</span>
                        </label>
                        <input
                            id="fullName"
                            v-model="fullName"
                            type="text"
                            required
                            placeholder="Введіть ваше повне ім'я"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label for="preferredDate" class="block text-sm font-medium text-slate-700 mb-1">
                            Бажана дата (необов'язково)
                        </label>
                        <input
                            id="preferredDate"
                            v-model="preferredDate"
                            type="date"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label for="comment" class="block text-sm font-medium text-slate-700 mb-1">
                            Коментар (необов'язково)
                        </label>
                        <textarea
                            id="comment"
                            v-model="comment"
                            rows="3"
                            class="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                            placeholder="Додаткові відомості..."
                        ></textarea>
                    </div>

                    <div v-if="submitError" class="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {{ submitError }}
                    </div>

                    <div v-if="submitSuccess" class="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                        Заявку успішно подано!
                    </div>

                    <div class="flex items-center gap-3 pt-2">
                        <button
                            @click="submitApplication"
                            :disabled="submitting || submitSuccess || !fullName.trim()"
                            class="flex-1 rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span v-if="submitting">Відправка...</span>
                            <span v-else>Подати заявку</span>
                        </button>
                        <button
                            @click="closeApplicationModal"
                            :disabled="submitting"
                            class="rounded border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Скасувати
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
