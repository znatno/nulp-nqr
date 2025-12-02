<script setup lang="ts">
import CrudTable from '@/components/CrudTable.vue';
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Кваліфікаційні центри</h1>
            <p class="text-gray-600">Управління кваліфікаційними центрами</p>
        </div>

        <CrudTable entity-key="centres" />
    </div>
</template>
