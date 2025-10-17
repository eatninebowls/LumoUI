<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { ToastProps } from './types'
//defineProps是什么意思
const props = withDefaults(defineProps<ToastProps>(), {
  type: 'info',
  title: '',
  duration: 3000,
  position: 'top-right',
  closable: true
})
//这个地方好像是定义一个时间名？
const emit = defineEmits(['close'])
//visible 控制是否显示而 isLeaving 是为了执行退出动画时延迟卸载 DOM（这里不懂）
const visible = ref(false)
const isLeaving = ref(false)
// 根据类型生成样式
const typeClasses = computed(() => {
  const types = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }
  return types[props.type]
})

// 根据位置生成定位样式
const positionClasses = computed(() => {
  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    //这一行不懂
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2'//这里要加上translate不然会少半截在右边
  }
  return positions[props.position]
})
// 图标映射：这个是干嘛用的
const iconClasses = computed(() => {
  const icons = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  }
  return icons[props.type]
})
// 关闭 Toast
const closeToast = () => {
  isLeaving.value = true
  setTimeout(() => {
    visible.value = false
    emit('close')
  }, 300) // 等待动画完成
}

// 组件挂载后显示
onMounted(() => {
  visible.value = true

  // 自动关闭,这个判断是为了使duration=0时不自动关闭
  if (props.duration > 0) {
    setTimeout(() => {
      closeToast()
    }, props.duration)
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 transform translate-x-full"
    enter-to-class="opacity-100 transform translate-x-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 transform translate-x-0"
    leave-to-class="opacity-0 transform translate-x-full"
  >
    <div
      v-if="visible && !isLeaving"
      :class="[
        'fixed z-[9999] max-w-sm w-full border rounded-lg shadow-lg p-4 pointer-events-auto',
        typeClasses,
        positionClasses
      ]"
    >
      <div class="flex items-start">
        <!-- 图标 -->
        <div class="flex-shrink-0">
          <!-- Success 图标 -->
          <svg v-if="type === 'success'" :class="iconClasses" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>

          <!-- Error 图标 -->
          <svg v-else-if="type === 'error'" :class="iconClasses" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>

          <!-- Warning 图标 -->
          <svg v-else-if="type === 'warning'" :class="iconClasses" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>

          <!-- Info 图标 -->
          <svg v-else :class="iconClasses" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>

        <!-- 内容 -->
        <div class="ml-3 flex-1">
          <h3 v-if="title" class="text-sm font-medium mb-1">{{ title }}</h3>
          <p class="text-sm">{{ message }}</p>
        </div>

        <!-- 关闭按钮 -->
        <div v-if="closable" class="ml-4 flex-shrink-0">
          <button
            @click="closeToast"
            class="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
