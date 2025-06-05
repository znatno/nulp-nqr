<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '@/services/api';

interface Qualification { id:number; title:string; level:number }

const list = ref<Qualification[]>([]);
const title = ref('');        // controlled input
const level = ref<number>(1); // controlled input

async function load() {
  list.value = (await api.get('/qualifications')).data;
}
async function add() {
  if (!title.value) return;
  await api.post('/qualifications', { title: title.value, level: level.value, professionId: 1 });
  title.value = ''; level.value = 1;
  await load();
}
async function remove(id: number) {
  await api.delete('/qualifications/' + id);
  await load();
}

onMounted(load);
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Qualifications</h1>

  <!-- ADD form -->
  <form @submit.prevent="add" class="flex gap-2 mb-4">
    <input v-model="title" placeholder="Title" class="border px-2 py-1 rounded flex-1" />
    <input v-model.number="level" type="number" min="1" max="8" class="border px-2 py-1 w-20" />
    <button class="bg-blue-600 text-white px-4 rounded">Add</button>
  </form>

  <!-- LIST -->
  <table class="w-full text-sm bg-white shadow rounded">
    <thead><tr class="bg-gray-100"><th class="p-2 text-left">Title</th><th>Level</th><th></th></tr></thead>
    <tbody>
    <tr v-for="q in list" :key="q.id" class="border-t">
      <td class="p-2">{{ q.title }}</td>
      <td class="text-center">{{ q.level }}</td>
      <td class="text-right pr-2">
        <button @click="remove(q.id)" class="text-red-500">🗑</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
