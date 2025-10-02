<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SwitchProps } from './types'

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  size: 'md',
  disabled: false,
  loading: false,
  activeColor: '',
  inactiveColor: '',
  activeText: '',
  inactiveText: '',
  width: 0
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const isChanging = ref(false)

// 根据 size 动态生成样式类
const sizeClasses = computed(() => {
  const sizes = {
    sm: {
      switch: 'h-5 w-9',
      circle: 'h-4 w-4',
      translate: 'translate-x-4'
    },
    md: {
      switch: 'h-6 w-11',
      circle: 'h-5 w-5',
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'h-7 w-14',
      circle: 'h-6 w-6',
      translate: 'translate-x-7'
    }
  }
  return sizes[props.size]
})

// 开关容器样式
const switchClasses = computed(() => {
  const baseClasses = [
    'relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
    sizeClasses.value.switch
  ]

  if (props.disabled || props.loading) {
    baseClasses.push('opacity-50 cursor-not-allowed')
  } else {
    baseClasses.push('cursor-pointer')
  }

  // 根据状态设置颜色
  if (props.modelValue) {
    if (props.activeColor) {
      // 自定义激活颜色通过 style 设置
      baseClasses.push('focus:ring-blue-500')
    } else {
      baseClasses.push('bg-blue-600 focus:ring-blue-500')
    }
  } else {
    if (props.inactiveColor) {
      // 自定义非激活颜色通过 style 设置
      baseClasses.push('focus:ring-gray-300')
    } else {
      baseClasses.push('bg-gray-200 focus:ring-gray-300')
    }
  }

  return baseClasses
})

// 圆形按钮样式
const circleClasses = computed(() => {
  const baseClasses = [
    'inline-block rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out',
    sizeClasses.value.circle
  ]

  if (props.modelValue) {
    baseClasses.push(sizeClasses.value.translate)
  } else {
    baseClasses.push('translate-x-0.5')
  }

  return baseClasses
})

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.width > 0) {
    style.width = `${props.width}px`
  }
  
  if (props.modelValue && props.activeColor) {
    style.backgroundColor = props.activeColor
  } else if (!props.modelValue && props.inactiveColor) {
    style.backgroundColor = props.inactiveColor
  }
  
  return style
})

// 处理点击事件
const handleClick = async () => {
  if (props.disabled || props.loading || isChanging.value) {
    return
  }

  // 如果有 beforeChange 钩子，先执行
  if (props.beforeChange) {
    isChanging.value = true
    try {
      const result = await props.beforeChange()
      if (!result) {
        isChanging.value = false
        return
      }
    } catch (error) {
      isChanging.value = false
      return
    }
    isChanging.value = false
  }

  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <!-- 非激活状态文字 -->
    <span 
      v-if="inactiveText && !modelValue" 
      class="text-sm text-gray-600"
    >
      {{ inactiveText }}
    </span>

    <!-- 开关主体 -->
    <button
      type="button"
      :class="switchClasses"
      :style="customStyle"
      :disabled="disabled || loading"
      @click="handleClick"
    >
      <!-- 圆形滑块 -->
      <span :class="circleClasses">
        <!-- 加载中图标 -->
        <svg
          v-if="loading"
          class="animate-spin h-3 w-3 text-gray-400 absolute inset-0 m-auto"
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
      </span>
    </button>

    <!-- 激活状态文字 -->
    <span 
      v-if="activeText && modelValue" 
      class="text-sm text-gray-600"
    >
      {{ activeText }}
    </span>
  </div>
</template>