<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuth } from '@/composables/useAuth';
import Sidebar from '@/components/Sidebar.vue';

const { initAuth } = useAuth();

onMounted(() => {
    initAuth();
});
</script>

<template>
  <div class="flex min-h-screen text-gray-900">
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main -->
    <main class="flex-1 bg-slate-50 p-6"><RouterView /></main>
  </div>
</template>
