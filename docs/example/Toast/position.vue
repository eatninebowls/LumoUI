<template>
  <div class="grid grid-cols-3 gap-4">
    <LumoButton
      v-for="pos in positions"
      :key="pos"
      @click="show(pos)"
    >
      {{ pos }}
    </LumoButton>
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
