<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DialogProps } from './types';

const props = withDefaults(defineProps<DialogProps>(), {
  type: 'alert',
  title: '提示',
  modelValue: false,
  visible: false,  // 保留 visible 属性
  showTitle: true,
  confirmText: '确定',
  cancelText: '取消',
  showCancel: false,
  closable: true,
  maskClosable: true
})

const emit = defineEmits(['update:modelValue', 'update:visible', 'confirm', 'cancel', 'close'])

// 内部显示状态 - 支持两种绑定方式
const isVisible = ref(props.modelValue || props.visible)
const isLeaving = ref(false)

// 监听外部 modelValue 变化
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    isVisible.value = true
    isLeaving.value = false
  } else {
    closeDialog()
  }
})

// 监听外部 visible 变化（兼容旧版本）
watch(() => props.visible, (newVal) => {
  if (newVal) {
    isVisible.value = true
    isLeaving.value = false
  } else {
    closeDialog()
  }
})

// 根据类型生成样式
const typeClasses = computed(() => {
  const types = {
    alert: 'border-blue-200',
    confirm: 'border-orange-200'
  }
  return types[props.type]
})

// 图标映射
const iconClasses = computed(() => {
  const icons = {
    alert: 'text-blue-500',
    confirm: 'text-orange-500'
  }
  return icons[props.type]
})

// 关闭弹窗
const closeDialog = () => {
  isLeaving.value = true
  setTimeout(() => {
    isVisible.value = false
    // 同时触发两种事件，保持兼容性
    emit('update:modelValue', false)
    emit('update:visible', false)
    emit('close')
  }, 200)
}

// 确认操作
const handleConfirm = () => {
  emit('confirm')
  closeDialog()
}

// 取消操作
const handleCancel = () => {
  emit('cancel')
  closeDialog()
}

// 点击遮罩
const handleMaskClick = () => {
  if (props.maskClosable) {
    closeDialog()
  }
}

// 阻止弹窗内容点击事件冒泡
const handleContentClick = (e: Event) => {
  e.stopPropagation()
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible && !isLeaving"
        @click="handleMaskClick"
        class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-100"
      >
        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform scale-100"
          leave-to-class="opacity-0 transform scale-95"
        >
          <div
            v-if="!isLeaving"
            @click="handleContentClick"
            :class="[
              'relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 border',
              typeClasses
            ]"
          >
            <!-- 关闭按钮 -->
            <button
              v-if="closable"
              @click="closeDialog"
              class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- 内容区域 -->
            <div class="p-6">
              <!-- 图标和标题区域 -->
              <div class="flex items-start mb-4">
                <!-- 图标 -->
                <div class="flex-shrink-0 mr-3">
                  <!-- Alert 图标 -->
                  <svg
                    v-if="type === 'alert'"
                    :class="iconClasses"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <!-- Confirm 图标 -->
                  <svg
                    v-else
                    :class="iconClasses"
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <!-- 标题和内容 -->
                <div class="flex-1">
                  <h3 v-if="showTitle && title" class="text-lg font-medium text-gray-900 mb-2">
                    {{ title }}
                  </h3>
                  <p class="text-sm text-gray-600 leading-relaxed">
                    {{ message }}
                  </p>
                </div>
              </div>

              <!-- 按钮区域 -->
              <div class="flex justify-end space-x-3 mt-6">
                <!-- 取消按钮 -->
                <button
                  v-if="type === 'confirm' || showCancel"
                  @click="handleCancel"
                  class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  {{ cancelText }}
                </button>

                <!-- 确认按钮 -->
                <button
                  @click="handleConfirm"
                  :class="[
                    'px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
                    type === 'alert'
                      ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                      : 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500'
                  ]"
                >
                  {{ confirmText }}
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 自定义样式可以在这里添加 */
</style>