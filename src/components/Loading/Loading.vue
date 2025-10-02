<script setup lang="ts">
import { computed } from 'vue'
import type { LoadingProps } from './types'

const props = withDefaults(defineProps<LoadingProps>(), {
  type: 'circular',
  size: 30,
  color: '#c9c9c9',
  textColor: '#c9c9c9',
  textSize: 14,
  vertical: false
})

// 计算样式
const iconStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  color: props.color
}))

const textStyle = computed(() => ({
  color: props.textColor,
  fontSize: typeof props.textSize === 'number' ? `${props.textSize}px` : props.textSize
}))

const containerClasses = computed(() => [
  'lumo-loading',
  'inline-flex',
  'items-center',
  props.vertical ? 'flex-col' : 'flex-row'
])
</script>

<template>
  <div :class="containerClasses">
    <!-- 加载图标 -->
    <div class="lumo-loading__icon" :style="iconStyle">
      <slot name="icon">
        <!-- 圆形加载图标 -->
        <svg
          v-if="props.type === 'circular'"
          class="animate-spin"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="31.416"
            stroke-dashoffset="31.416"
            class="animate-dash"
          />
        </svg>
        
        <!-- 点状加载图标 -->
        <svg
          v-else-if="props.type === 'spinner'"
          class="animate-spin"
          viewBox="0 0 50 50"
        >
          <g fill="currentColor">
            <circle cx="25" cy="10" r="3" opacity="1">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0s"/>
            </circle>
            <circle cx="35.36" cy="14.64" r="3" opacity="0.875">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
            </circle>
            <circle cx="40" cy="25" r="3" opacity="0.75">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
            </circle>
            <circle cx="35.36" cy="35.36" r="3" opacity="0.625">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
            </circle>
            <circle cx="25" cy="40" r="3" opacity="0.5">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
            </circle>
            <circle cx="14.64" cy="35.36" r="3" opacity="0.375">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.625s"/>
            </circle>
            <circle cx="10" cy="25" r="3" opacity="0.25">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
            </circle>
            <circle cx="14.64" cy="14.64" r="3" opacity="0.125">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
            </circle>
          </g>
        </svg>
      </slot>
    </div>

    <!-- 加载文案 -->
    <div
      v-if="$slots.default"
      class="lumo-loading__text"
      :class="props.vertical ? 'mt-2' : 'ml-2'"
      :style="textStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.lumo-loading__icon {
  display: inline-block;
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -124px;
  }
}

.animate-dash {
  animation: dash 1.5s ease-in-out infinite;
}
</style>