<script setup lang="ts">
import { provide, ref, computed, watch } from 'vue'
import type { TabsProps } from './types'

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: '',
  type: 'line',
  position: 'top',
  closable: false,
  addable: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'tab-click', name: string): void
  (e: 'tab-remove', name: string): void
  (e: 'tab-add'): void
}>()

// 当前激活的标签页
const activeTab = ref(props.modelValue)
// 注册的标签页列表
const tabs = ref<Array<{
  name: string
  label: string
  disabled: boolean
  closable: boolean
}>>([])

// 监听 modelValue 变化
watch(() => props.modelValue, (newValue) => {
  activeTab.value = newValue
})

// 监听 activeTab 变化
watch(activeTab, (newValue) => {
  emit('update:modelValue', newValue)
})

// 注册标签页
const registerTab = (tab: any) => {
  tabs.value.push(tab)
  
  // 如果没有激活的标签页，激活第一个
  if (!activeTab.value && !tab.disabled) {
    activeTab.value = tab.name
  }
}

// 注销标签页
const unregisterTab = (name: string) => {
  const index = tabs.value.findIndex(tab => tab.name === name)
  if (index > -1) {
    tabs.value.splice(index, 1)
  }
}

// 切换标签页
const handleTabClick = (name: string, disabled: boolean) => {
  if (disabled) return
  
  activeTab.value = name
  emit('tab-click', name)
}

// 关闭标签页
const handleTabRemove = (name: string, event: Event) => {
  event.stopPropagation()
  
  // 如果关闭的是当前激活的标签页，需要切换到其他标签页
  if (activeTab.value === name) {
    const currentIndex = tabs.value.findIndex(tab => tab.name === name)
    const nextTab = tabs.value[currentIndex + 1] || tabs.value[currentIndex - 1]
    if (nextTab) {
      activeTab.value = nextTab.name
    }
  }
  
  emit('tab-remove', name)
}

// 新增标签页
const handleTabAdd = () => {
  emit('tab-add')
}

// 标签页容器样式
const tabsClasses = computed(() => {
  const baseClasses = ['lumo-tabs']
  
  if (props.type === 'card') {
    baseClasses.push('lumo-tabs--card')
  } else {
    baseClasses.push('lumo-tabs--line')
  }
  
  baseClasses.push(`lumo-tabs--${props.position}`)
  
  return baseClasses
})

// 标签页导航样式
const navClasses = computed(() => {
  const baseClasses = ['flex']
  
  if (props.position === 'top' || props.position === 'bottom') {
    baseClasses.push('border-b border-gray-200')
  } else {
    baseClasses.push('flex-col border-r border-gray-200')
  }
  
  return baseClasses
})

// 单个标签页样式
const getTabClasses = (tab: any) => {
  const baseClasses = [
    'px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 relative'
  ]
  
  if (tab.disabled) {
    baseClasses.push('text-gray-400 cursor-not-allowed')
  } else if (activeTab.value === tab.name) {
    if (props.type === 'card') {
      baseClasses.push('bg-white text-blue-600 border-t border-l border-r border-gray-200 rounded-t-md')
    } else {
      baseClasses.push('text-blue-600 border-b-2 border-blue-600')
    }
  } else {
    if (props.type === 'card') {
      baseClasses.push('text-gray-600 hover:text-gray-800 bg-gray-50 border border-gray-200 rounded-t-md mr-1')
    } else {
      baseClasses.push('text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300')
    }
  }
  
  return baseClasses
}

// 提供给子组件的上下文
provide('tabsContext', {
  activeTab,
  registerTab,
  unregisterTab
})
</script>

<template>
  <div :class="tabsClasses">
    <!-- 标签页导航 -->
    <div :class="navClasses">
      <!-- 标签页列表 -->
      <div
        v-for="tab in tabs"
        :key="tab.name"
        :class="getTabClasses(tab)"
        @click="handleTabClick(tab.name, tab.disabled)"
      >
        <span>{{ tab.label || tab.name }}</span>
        
        <!-- 关闭按钮 -->
        <button
          v-if="(tab.closable || closable) && !tab.disabled"
          @click="handleTabRemove(tab.name, $event)"
          class="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <!-- 新增按钮 -->
      <button
        v-if="addable"
        @click="handleTabAdd"
        class="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer transition-colors duration-200 border-b-2 border-transparent hover:border-gray-300"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    
    <!-- 标签页内容 -->
    <div class="tab-content p-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.lumo-tabs--card .tab-content {
  border: 1px solid #e5e7eb;
  border-top: 0;
  border-radius: 0 0 0.375rem 0.375rem;
  background-color: white;
}
</style>