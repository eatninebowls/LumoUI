<script setup lang="ts">
import { computed } from 'vue'
import type{ ProgressProps } from './types'
/**
 * Progress 进度条组件支持：
 * - 圆形进度条：带图标、不同状态颜色
 * - 线性进度条：百分比在内部或右侧
 * - 自定义颜色、大小、动画效果
 */


const props = withDefaults(defineProps<ProgressProps>(), {
  type: 'line',
  percentage: 0,
  strokeWidth: 6,
  width: 120,
  showText: true,
  textInside: false
})

// 计算进度百分比，确保在0-100范围内
const normalizedPercentage = computed(() => {
  return Math.max(0, Math.min(100, props.percentage))
})

// 进度条颜色
const progressColor = computed(() => {
  return props.color || '#3b82f6' // 默认使用 blue-500
})

// 背景色
const bgColor = '#e4e7ed'

// 格式化文字
const formattedText = computed(() => {
  return `${normalizedPercentage.value}%`
})

// 圆形进度条相关计算
const circleRadius = computed(() => {
  return (props.width - props.strokeWidth) / 2
})

const circleCircumference = computed(() => {
  return 2 * Math.PI * circleRadius.value
})

const circleStrokeDasharray = computed(() => {
  const progress = (normalizedPercentage.value / 100) * circleCircumference.value
  return `${progress} ${circleCircumference.value}`
})


// 线性进度条样式
const lineProgressStyle = computed(() => {
  return {
    height: `${props.strokeWidth}px`,
    backgroundColor: bgColor,
    borderRadius: `${props.strokeWidth / 2}px`
  }
})

const lineProgressBarStyle = computed(() => {
  return {
    width: `${normalizedPercentage.value}%`,
    height: '100%',
    backgroundColor: progressColor.value,
    borderRadius: `${props.strokeWidth / 2}px`,
    transition: 'width 0.3s ease'
  }
})
</script>

<template>
  <!-- 线性进度条 -->
  <div v-if="type === 'line'" class="flex items-center gap-3">
    <div class="flex-1 relative">
      <div :style="lineProgressStyle" class="overflow-hidden">
        <div :style="lineProgressBarStyle"></div>
      </div>

      <!-- 文字在进度条内部 -->
      <div
        v-if="showText && textInside"
        class="absolute inset-0 flex items-center justify-center text-xs font-medium text-white"
        :style="{ fontSize: `${Math.max(12, props.strokeWidth - 2)}px` }"
      >
        {{ formattedText }}
      </div>
    </div>

    <!-- 文字在右侧 -->
    <div
      v-if="showText && !textInside"
      class="text-sm font-medium text-gray-600 min-w-[3rem] text-right"
    >
      {{ formattedText }}
    </div>
  </div>

  <!-- 圆形进度条 -->
  <div v-else class="relative inline-flex items-center justify-center">
    <svg
      :width="width"
      :height="width"
      class="transform -rotate-90"
    >
      <!-- 背景圆环 -->
      <circle
        :cx="width / 2"
        :cy="width / 2"
        :r="circleRadius"
        :stroke="bgColor"
        :stroke-width="strokeWidth"
        fill="none"
      />

      <!-- 进度圆环 -->
      <circle
        :cx="width / 2"
        :cy="width / 2"
        :r="circleRadius"
        :stroke="progressColor"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circleStrokeDasharray"
        :stroke-linecap="'round'"
        fill="none"
        class="transition-all duration-300 ease-out"
      />
    </svg>

    <!-- 中心内容 -->
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- 显示百分比文字 -->
      <div v-if="showText" class="text-center">
        <div class="text-lg font-semibold text-gray-700">
          {{ formattedText }}
        </div>
      </div>
    </div>
  </div>
</template>

