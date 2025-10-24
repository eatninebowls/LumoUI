<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" />
    <LumoSwitch v-model="s2" activeText="开启" inactiveText="关闭" />
  </div>
</template>