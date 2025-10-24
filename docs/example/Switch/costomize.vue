<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" activeColor="#22c55e" inactiveColor="#d1d5db" :width="60" />
  </div>
</template>
