<template>
  <div class="grid grid-cols-3 gap-4">
    <button
      v-for="pos in positions"
      :key="pos"
      class="border rounded px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
      @click="show(pos)"
    >
      {{ pos }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { toast } = useToast()

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-right'
]

const show = (pos: string) => {
  toast.show({
    message: `当前位置：${pos}`,
    type: 'info',
    position: pos as any
  })
}
</script>
