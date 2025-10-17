<script setup lang="ts">
import { ref } from 'vue'
const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用', value: 'disabled', disabled: true },
]
</script>

<template>
  <div class="flex flex-col gap-3">
    <LumoSelect size="sm" v-model="value" :options="options" />
    <LumoSelect size="md" v-model="value" :options="options" :isRound="true" />
    <LumoSelect size="lg" v-model="value" :options="options" />
  </div>
</template>