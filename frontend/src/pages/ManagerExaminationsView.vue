<script setup lang="ts">
import CrudTable from '@/components/CrudTable.vue';
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Експертизи</h1>
            <p class="text-gray-600">Управління експертизами кваліфікаційних центрів</p>
        </div>

        <CrudTable entity-key="examinations" />
    </div>
</template>
