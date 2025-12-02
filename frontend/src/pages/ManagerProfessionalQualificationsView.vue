<script setup lang="ts">
import CrudTable from '@/components/CrudTable.vue';
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Профкваліфікації</h1>
            <p class="text-gray-600">Управління професійними кваліфікаціями</p>
        </div>

        <CrudTable entity-key="professionalQualifications" />
    </div>
</template>
