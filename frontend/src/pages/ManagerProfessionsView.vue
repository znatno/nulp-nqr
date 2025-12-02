<script setup lang="ts">
import CrudTable from '@/components/CrudTable.vue';
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Професії</h1>
            <p class="text-gray-600">Управління професіями</p>
        </div>

        <CrudTable entity-key="professions" />
    </div>
</template>
