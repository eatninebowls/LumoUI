<script setup lang="ts">
import { inject, computed, ref, onMounted, watchEffect } from 'vue'
import type { TabPaneProps } from './types'

const props = withDefaults(defineProps<TabPaneProps>(), {
  label: '',
  disabled: false,
  closable: false,
  lazy: false
})

interface TabsContext {
  activeTab: any
  registerTab: (tab: any) => void
  unregisterTab: (name: string) => void
}

const tabsContext = inject<TabsContext>('tabsContext')
if (!tabsContext) {
  throw new Error('TabPane must be used inside Tabs')
}

const isRendered = ref(false)

// 是否激活
const isActive = computed(() => {
  return tabsContext.activeTab.value === props.name
})

// 是否应该渲染内容
const shouldRender = computed(() => {
  if (!props.lazy) return true
  return isRendered.value || isActive.value
})

// 监听激活状态，延迟渲染
if (props.lazy) {
  watchEffect(() => {
    if (isActive.value && !isRendered.value) {
      isRendered.value = true
    }
  })
}

onMounted(() => {
  // 注册到父组件
  tabsContext.registerTab({
    name: props.name,
    label: props.label,
    disabled: props.disabled,
    closable: props.closable
  })

  // 如果不是延迟渲染，立即标记为已渲染
  if (!props.lazy) {
    isRendered.value = true
  }
})
</script>

<template>
  <div 
    v-if="shouldRender"
    v-show="isActive" 
    class="tab-pane"
  >
    <slot></slot>
  </div>
</template>