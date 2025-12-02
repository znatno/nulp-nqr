<script setup lang="ts">
import CrudTable from '@/components/CrudTable.vue';
</script>

<template>
    <div class="space-y-6">
        <div>
            <h1 class="text-3xl font-bold">Акредитації</h1>
            <p class="text-gray-600">Управління акредитаціями кваліфікаційних центрів</p>
        </div>

        <CrudTable entity-key="accreditations" />
    </div>
</template>
