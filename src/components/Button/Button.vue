<!-- //组件实现 -->
<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'sm',
  disabled: false,
  isCircle: false,
  outline: false,
  loading: false,
})

// 根据 variant 动态生成样式类
const variantClasses = computed(() => {
  const variants = {
    primary: props.outline
      ? 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: props.outline
      ? 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: props.outline
      ? 'border border-red-600 text-red-600 bg-white hover:bg-red-50'
      : 'bg-red-600 text-white hover:bg-red-700',
    success: props.outline
      ? 'border border-green-600 text-green-600 bg-white hover:bg-green-50'
      : 'bg-green-500 text-white hover:bg-green-600',
  }
  return variants[props.variant]
})

// 根据 size 动态生成样式类
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'text-sm px-2 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2',
  }
  return sizes[props.size]
})

// 点击事件
const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    @click="handleClick"
    class="font-medium transition-colors flex items-center justify-center gap-2"
    :class="[
      variantClasses,
      sizeClasses,
      props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      props.isCircle ? 'rounded-full' : 'rounded-md',
    ]"
    :disabled="props.disabled || props.loading"
  >
    <!-- 加载中状态 -->
    <svg
      v-if="props.loading"
      class="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- 插槽：默认插槽支持自定义文字 -->
    <slot v-if="!props.loading">Default Button</slot>
    <slot v-else>Loading...</slot>
  </button>
</template>
