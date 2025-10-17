<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="item in types"
      :key="item.type"
      class="px-3 py-1 rounded text-white text-sm"
      :class="item.color"
      @click="item.fn(item.label + ' 提示')"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { success, error, warning, info } = useToast()

const types = [
  { type: 'success', label: '成功', fn: success, color: 'bg-green-500 hover:bg-green-600' },
  { type: 'error', label: '错误', fn: error, color: 'bg-red-500 hover:bg-red-600' },
  { type: 'warning', label: '警告', fn: warning, color: 'bg-yellow-500 hover:bg-yellow-600' },
  { type: 'info', label: '信息', fn: info, color: 'bg-blue-500 hover:bg-blue-600' }
]
</script>