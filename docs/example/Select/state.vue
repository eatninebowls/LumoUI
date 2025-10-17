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
    <LumoSelect clearable v-model="value" :options="options" placeholder="可清空" />
    <LumoSelect filterable v-model="value" :options="options" placeholder="可过滤" />
    <LumoSelect state="wrong" v-model="value" :options="options" placeholder="错误态" />
  </div>
</template>
