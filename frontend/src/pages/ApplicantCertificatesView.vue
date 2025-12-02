<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface Certificate {
    id: number;
    certificateNumber: string;
    fullName: string;
    qualification: {
        id: number;
        name: string;
        nqrLevel: number;
        profession: {
            id: number;
            name: string;
            code: string;
        } | null;
    };
    centre: {
        id: number;
        name: string;
        edrpou: string;
        address: string;
    };
    issueDate: string;
    expiryDate: string | null;
    status: string;
}

const certificates = ref<Certificate[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

function getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
        valid: 'Дійсний',
        expired: 'Протермінований',
        revoked: 'Анульований',
    };
    return labels[status] || status;
}

function getStatusClass(status: string): string {
    const classes: Record<string, string> = {
        valid: 'bg-green-100 text-green-800',
        expired: 'bg-red-100 text-red-800',
        revoked: 'bg-gray-100 text-gray-800',
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
}

function formatDate(dateString: string | null): string {
    if (!dateString) return '-';
    try {
        return new Date(dateString).toLocaleDateString('uk-UA');
    } catch {
        return dateString;
    }
}

async function loadCertificates() {
    loading.value = true;
    error.value = null;
    try {
        const response = await api.get<Certificate[]>('/applicant/certificates');
        certificates.value = response.data;
    } catch (err: any) {
        console.error('Failed to load certificates:', err);
        error.value = err.response?.data?.error || 'Не вдалося завантажити сертифікати';
    } finally {
        loading.value = false;
    }
}

onMounted(loadCertificates);
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Мої сертифікати</h1>
            <p class="text-gray-600">Перегляньте ваші отримані сертифікати кваліфікації</p>
        </div>

        <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
            {{ error }}
        </div>

        <!-- Loading -->
        <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
            Завантаження сертифікатів...
        </div>

        <!-- Table -->
        <div v-else class="overflow-x-auto rounded-lg bg-white shadow-sm border border-slate-100">
            <table class="min-w-full text-sm">
                <thead>
                    <tr class="text-left text-gray-500 border-b border-slate-100">
                        <th class="pb-3 px-4 pt-3">Номер сертифікату</th>
                        <th class="pb-3 px-4 pt-3">ПІБ</th>
                        <th class="pb-3 px-4 pt-3">Кваліфікація</th>
                        <th class="pb-3 px-4 pt-3">Центр</th>
                        <th class="pb-3 px-4 pt-3">Дата видачі</th>
                        <th class="pb-3 px-4 pt-3">Дата закінчення</th>
                        <th class="pb-3 px-4 pt-3">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="cert in certificates"
                        :key="cert.id"
                        class="border-t border-slate-100 text-gray-700 hover:bg-slate-50"
                    >
                        <td class="py-3 px-4 font-mono text-sm">{{ cert.certificateNumber }}</td>
                        <td class="py-3 px-4 font-medium">{{ cert.fullName }}</td>
                        <td class="py-3 px-4">
                            <div class="font-medium">{{ cert.qualification.name }}</div>
                            <div class="text-xs text-gray-500">
                                Рівень НКР: {{ cert.qualification.nqrLevel }}
                                <span v-if="cert.qualification.profession">
                                    | {{ cert.qualification.profession.name }} ({{ cert.qualification.profession.code }})
                                </span>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            <div class="font-medium">{{ cert.centre.name }}</div>
                            <div class="text-xs text-gray-500">{{ cert.centre.edrpou }}</div>
                        </td>
                        <td class="py-3 px-4">{{ formatDate(cert.issueDate) }}</td>
                        <td class="py-3 px-4">{{ formatDate(cert.expiryDate) }}</td>
                        <td class="py-3 px-4">
                            <span
                                :class="[
                                    'inline-flex rounded-full px-2 py-1 text-xs font-medium',
                                    getStatusClass(cert.status)
                                ]"
                            >
                                {{ getStatusLabel(cert.status) }}
                            </span>
                        </td>
                    </tr>
                    <tr v-if="certificates.length === 0">
                        <td colspan="7" class="py-8 text-center text-gray-400">
                            У вас поки немає сертифікатів
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
