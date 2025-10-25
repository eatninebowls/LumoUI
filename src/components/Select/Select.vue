<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { SelectProps, SelectOption } from './types'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Please select',
  disabled: false,
  clearable: false,
  size: 'md',
  isRound: false,
  state: 'normal',
  filterable: false,
  options: () => []
})

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])

const isOpen = ref(false)
const filterText = ref('')
const selectRef = ref<HTMLDivElement>()

// 状态样式
const stateClasses = computed(() => ({
  'border-gray-300 focus-within:border-blue-500 focus-within:ring-blue-200': props.state === 'normal',
  'border-red-500 focus-within:border-red-500 focus-within:ring-red-200': props.state === 'wrong',
  'border-emerald-500 focus-within:border-emerald-500 focus-within:ring-emerald-200': props.state === 'success',
}))

// 尺寸样式
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'h-7 text-xs',
    md: 'h-9',
    lg: 'h-11 text-lg'
  }
  return sizes[props.size]
})

// 当前选中的选项
const selectedOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})

// 过滤后的选项
const filteredOptions = computed(() => {
  if (!props.filterable || !filterText.value) {
    return props.options
  }
  return props.options.filter(option => 
    option.label.toLowerCase().includes(filterText.value.toLowerCase())
  )
})

// 显示文本
const displayText = computed(() => {
  if (props.filterable && isOpen.value) {
    return filterText.value
  }
  return selectedOption.value?.label || ''
})

// 切换下拉框
const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    emit('focus')
    if (props.filterable) {
      filterText.value = selectedOption.value?.label || ''
    }
  } else {
    emit('blur')
    if (props.filterable) {
      filterText.value = ''
    }
  }
}

// 选择选项
const selectOption = (option: SelectOption) => {
  if (option.disabled) return
  emit('update:modelValue', option.value)
  emit('change', option.value)
  isOpen.value = false
  if (props.filterable) {
    filterText.value = ''
  }
}

// 清空选择
const clearSelection = (e: Event) => {
  e.stopPropagation()
  emit('update:modelValue', undefined)
  emit('change', undefined)
  if (props.filterable) {
    filterText.value = ''
  }
}

// 处理输入
const handleInput = (e: Event) => {
  if (!props.filterable) return
  filterText.value = (e.target as HTMLInputElement).value
}

// 点击外部关闭
const handleClickOutside = (e: Event) => {
  if (selectRef.value && !selectRef.value.contains(e.target as Node)) {
    isOpen.value = false
    if (props.filterable) {
      filterText.value = ''
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="selectRef" class="relative">
    <!-- 交互容器：新增 lumoui-select 类与 data-state -->
    <div
      class="lumoui-select w-full border px-4 py-2 transition-all duration-200 cursor-pointer
             disabled:opacity-50 disabled:cursor-not-allowed
             focus-within:ring-2 focus-within:ring-opacity-50 focus-within:outline-none
             flex items-center justify-between"
      :class="[
        stateClasses,
        sizeClasses,
        props.disabled ? 'bg-gray-100' : 'bg-white',
        props.isRound ? 'rounded-2xl' : 'rounded-sm'
      ]"
      :data-state="props.state"
      @click="toggleDropdown"
    >
      <!-- 输入框或显示文本 -->
      <input
        v-if="props.filterable"
        :value="displayText"
        @input="handleInput"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        class="flex-1 bg-transparent outline-none cursor-pointer"
        readonly
      />
      <span
        v-else
        class="flex-1 truncate"
        :class="{ 'text-gray-400': !selectedOption }"
      >
        {{ selectedOption?.label || props.placeholder }}
      </span>

      <!-- 右侧图标 -->
      <div class="flex items-center space-x-1">
        <!-- 清空按钮 -->
        <button
          v-if="props.clearable && selectedOption"
          @click="clearSelection"
          class="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <!-- 下拉箭头 -->
        <svg
          class="w-4 h-4 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- 下拉选项：新增 lumoui-select-dropdown 类，用于暗黑模式样式覆盖 -->
    <div
      v-show="isOpen"
      class="lumoui-select-dropdown absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto"
    >
      <div
        v-if="filteredOptions.length === 0"
        class="px-4 py-2 text-gray-500 text-center"
      >
        No options
      </div>
      <div
        v-for="option in filteredOptions"
        :key="option.value"
        class="px-4 py-2 cursor-pointer transition-colors duration-150"
        :class="{
          'bg-blue-50 text-blue-600': option.value === props.modelValue,
          'hover:bg-gray-50': option.value !== props.modelValue && !option.disabled,
          'text-gray-400 cursor-not-allowed': option.disabled
        }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>