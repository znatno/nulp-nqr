<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { api } from '@/services/api';

interface Profession { id: number; name: string }
interface Qualification {
  id: number;
  title: string;
  level: number;
  profession?: Profession | null;
}

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
  profession?: Profession | null;
}

interface Person {
  id: number;
  fullName: string;
  certificateNumber: string;
  dateReceived: string;
  qualificationCenter?: QualificationCenter | null;
  professionalQualification?: ProfessionalQualification | null;
}

const list = ref<Qualification[]>([]);
const centers = ref<QualificationCenter[]>([]);
const professionalQualifications = ref<ProfessionalQualification[]>([]);
const persons = ref<Person[]>([]);

const title = ref('');
const level = ref<number>(1);
const loading = ref(false);
const error = ref<string | null>(null);

const previewLimit = 5;

const personPreview = computed(() =>
  [...persons.value]
    .sort((a, b) => new Date(b.dateReceived).getTime() - new Date(a.dateReceived).getTime())
    .slice(0, previewLimit)
);

const qualificationPreview = computed(() =>
  [...list.value]
    .sort((a, b) => b.id - a.id)
    .slice(0, previewLimit)
);

const professionalPreview = computed(() =>
  [...professionalQualifications.value]
    .sort((a, b) => b.id - a.id)
    .slice(0, previewLimit)
);

const centerPreview = computed(() =>
  [...centers.value]
    .sort((a, b) => b.id - a.id)
    .slice(0, previewLimit)
);

const cards = computed(() => [
  { label: 'Кваліфікації', value: list.value.length },
  { label: 'Професійні кваліфікації', value: professionalQualifications.value.length },
  { label: 'Центри кваліфікацій', value: centers.value.length },
  { label: 'Зареєстровані особи', value: persons.value.length },
]);

function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString();
}

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const [qualificationRes, personRes, centersRes, professionalRes] = await Promise.all([
      api.get<Qualification[]>('/qualifications'),
      api.get<Person[]>('/persons'),
      api.get<QualificationCenter[]>('/qualification-centers'),
      api.get<ProfessionalQualification[]>('/professional-qualifications'),
    ]);

    list.value = qualificationRes.data;
    persons.value = personRes.data;
    centers.value = centersRes.data;
    professionalQualifications.value = professionalRes.data;
  } catch (err) {
    console.error(err);
    error.value = 'Не вдалося завантажити огляд бази даних. Повторіть спробу пізніше.';
  } finally {
    loading.value = false;
  }
}

async function add() {
  if (!title.value.trim()) return;
  await api.post('/qualifications', { title: title.value, level: level.value, professionId: 1 });
  title.value = '';
  level.value = 1;
  await load();
}

async function remove(id: number) {
  await api.delete('/qualifications/' + id);
  await load();
}

onMounted(load);
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Огляд бази даних</h1>
      <p class="text-gray-600">Швидкий перегляд кваліфікацій, осіб і супровідних довідників.</p>
    </div>

    <div v-if="error" class="rounded border border-red-200 bg-red-50 p-4 text-red-700">
      {{ error }}
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="card in cards"
        :key="card.label"
        class="rounded-lg bg-white p-4 shadow-sm border border-slate-100"
      >
        <p class="text-sm text-gray-500">{{ card.label }}</p>
        <p class="mt-2 text-3xl font-semibold text-slate-900">{{ card.value }}</p>
      </div>
    </div>

    <div v-if="loading" class="rounded border border-slate-200 bg-white p-6 text-center text-gray-500">
      Завантаження даних…
    </div>

    <div v-else class="space-y-6">
      <div class="grid gap-6 lg:grid-cols-2">
        <section class="rounded-lg bg-white p-5 shadow-sm border border-slate-100">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Останні записи осіб</h2>
            <span class="text-sm text-gray-500">Показано останні {{ personPreview.length }} записів</span>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="text-left text-gray-500">
                  <th class="pb-2 pr-4">ПІБ</th>
                  <th class="pb-2 pr-4">Кваліфікація</th>
                  <th class="pb-2 pr-4">Центр</th>
                  <th class="pb-2">Отримано</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="person in personPreview"
                  :key="person.id"
                  class="border-t border-slate-100 text-gray-700"
                >
                  <td class="py-2 pr-4 font-medium">{{ person.fullName }}</td>
                  <td class="py-2 pr-4">{{ person.professionalQualification?.name ?? '—' }}</td>
                  <td class="py-2 pr-4">{{ person.qualificationCenter?.name ?? '—' }}</td>
                  <td class="py-2">{{ formatDate(person.dateReceived) }}</td>
                </tr>
                <tr v-if="personPreview.length === 0">
                  <td colspan="4" class="py-4 text-center text-gray-400">Записів про осіб поки немає.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="rounded-lg bg-white p-5 shadow-sm border border-slate-100">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Центри кваліфікацій</h2>
            <span class="text-sm text-gray-500">Показано останні {{ centerPreview.length }} записів</span>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="text-left text-gray-500">
                  <th class="pb-2 pr-4">Назва</th>
                  <th class="pb-2 pr-4">ЄДРПОУ</th>
                  <th class="pb-2">Адреса</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="center in centerPreview"
                  :key="center.id"
                  class="border-t border-slate-100 text-gray-700"
                >
                  <td class="py-2 pr-4 font-medium">{{ center.name }}</td>
                  <td class="py-2 pr-4">{{ center.edrpou }}</td>
                  <td class="py-2">{{ center.address }}</td>
                </tr>
                <tr v-if="centerPreview.length === 0">
                  <td colspan="3" class="py-4 text-center text-gray-400">Центрів ще немає.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <section class="rounded-lg bg-white p-5 shadow-sm border border-slate-100">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Професійні кваліфікації</h2>
            <span class="text-sm text-gray-500">Показано останні {{ professionalPreview.length }} записів</span>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="text-left text-gray-500">
                  <th class="pb-2 pr-4">Назва</th>
                  <th class="pb-2 pr-4">Рівень НРК</th>
                  <th class="pb-2">Професія</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="qualification in professionalPreview"
                  :key="qualification.id"
                  class="border-t border-slate-100 text-gray-700"
                >
                  <td class="py-2 pr-4 font-medium">{{ qualification.name }}</td>
                  <td class="py-2 pr-4">{{ qualification.nkrLevel }}</td>
                  <td class="py-2">{{ qualification.profession?.name ?? '—' }}</td>
                </tr>
                <tr v-if="professionalPreview.length === 0">
                  <td colspan="3" class="py-4 text-center text-gray-400">Професійних кваліфікацій не знайдено.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="rounded-lg bg-white p-5 shadow-sm border border-slate-100">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Останні кваліфікації</h2>
            <span class="text-sm text-gray-500">Показано останні {{ qualificationPreview.length }} записів</span>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="text-left text-gray-500">
                  <th class="pb-2 pr-4">Назва</th>
                  <th class="pb-2 pr-4">Рівень</th>
                  <th class="pb-2">Професія</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="qualification in qualificationPreview"
                  :key="qualification.id"
                  class="border-t border-slate-100 text-gray-700"
                >
                  <td class="py-2 pr-4 font-medium">{{ qualification.title }}</td>
                  <td class="py-2 pr-4">{{ qualification.level }}</td>
                  <td class="py-2">{{ qualification.profession?.name ?? '—' }}</td>
                </tr>
                <tr v-if="qualificationPreview.length === 0">
                  <td colspan="3" class="py-4 text-center text-gray-400">Кваліфікацій не знайдено.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section class="rounded-lg bg-white p-6 shadow-sm border border-slate-100">
        <h2 class="text-lg font-semibold mb-4">Додати нову кваліфікацію</h2>
        <form @submit.prevent="add" class="flex flex-col gap-3 sm:flex-row">
          <input
            v-model="title"
            placeholder="Назва кваліфікації"
            class="flex-1 rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          <input
            v-model.number="level"
            type="number"
            min="1"
            max="8"
            class="w-full rounded border border-slate-200 px-3 py-2 focus:border-blue-500 focus:outline-none sm:w-24"
          />
          <button class="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">Додати</button>
        </form>

        <div class="mt-6 overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="text-left text-gray-500">
                <th class="pb-2 pr-4">Назва</th>
                <th class="pb-2 pr-4">Рівень</th>
                <th class="pb-2 pr-4">Професія</th>
                <th class="pb-2 text-right">Дії</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="qualification in list"
                :key="qualification.id"
                class="border-t border-slate-100 text-gray-700"
              >
                <td class="py-2 pr-4 font-medium">{{ qualification.title }}</td>
                <td class="py-2 pr-4">{{ qualification.level }}</td>
                <td class="py-2 pr-4">{{ qualification.profession?.name ?? '—' }}</td>
                <td class="py-2 text-right">
                  <button
                    @click="remove(qualification.id)"
                    class="rounded px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-50"
                  >
                    Видалити
                  </button>
                </td>
              </tr>
              <tr v-if="list.length === 0">
                <td colspan="4" class="py-4 text-center text-gray-400">Кваліфікацій поки немає.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
