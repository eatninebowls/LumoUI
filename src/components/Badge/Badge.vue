<script lang="ts" setup>
import {computed} from 'vue'
import type{BadgeProps} from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
  value: '1',
  max: 99,
  type: 'danger',
  isDot: false,
  hidden: false,
  showZero: false,
})

// 计算显示的内容
const displayValue = computed(() => {
  if (props.isDot) return ''

  const val = props.value
  if (val === '' || val === null || val === undefined) return ''

  // 如果是数字类型，处理负数和边界情况
  if (typeof val === 'number') {
    // 处理负数：显示为 0
    if (val < 0) return '0'
    if (val === 0 && !props.showZero) return ''
    if (val > props.max) return `${props.max}+`
    return val.toString()
  }

  // 如果是字符串类型
  return val.toString()
})

// 是否显示badge
const shouldShow = computed(() => {
  if (props.hidden) return false
  if (props.isDot) return true
  return displayValue.value !== ''
})

// 根据类型生成样式类
const typeClasses = computed(() => {
  // 如果设置了自定义颜色，不使用预设类型样式
  if (props.color || props.backgroundColor) {
    return ''
  }

  const types = {
    primary: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white',
    info: 'bg-gray-500 text-white',
  }
  return types[props.type]
})

// 自定义样式
const customStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.color) {
    style.color = props.color
  }

  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor
  }

  return style
})

// Badge大小样式
const sizeClasses = computed(() => {
  if (props.isDot) {
    return 'w-2 h-2 min-w-0'
  }

  const content = displayValue.value
  if (content.length === 1) {
    return 'w-5 h-5 min-w-[20px]'
  } else if (content.length === 2) {
    return 'w-6 h-5 min-w-[24px]'
  } else {
    return 'h-5 min-w-[24px] px-1'
  }
})
</script>

<template>
  <div class="relative inline-block">
    <!-- 主要内容插槽 -->
    <slot></slot>

    <!-- Badge -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-0"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-0"
    >
      <span
        v-if="shouldShow"
        :class="[
          'text-white',
          'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-xs font-medium leading-none z-10',
          typeClasses,
          sizeClasses,
          props.isDot ? '' : 'border-2 border-white',
        ]"
        :style="customStyle"
      >
        {{ displayValue }}
      </span>
    </Transition>
  </div>
</template>