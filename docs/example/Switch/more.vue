<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
</script>
<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" size="sm" />
    <LumoSwitch v-model="s1" size="md" />
    <LumoSwitch v-model="s1" size="lg" />
    <LumoSwitch v-model="s1" disabled />
    <LumoSwitch v-model="s1" loading />
  </div>
</template>
