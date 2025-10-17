  <script setup lang="ts">
import { ref } from 'vue'
const active = ref('tab1')
</script>
<template>
  <LumoTabs v-model="active" type="line" position="top">
    <LumoTabPane name="tab1" label="标签一">内容一</LumoTabPane>
    <LumoTabPane name="tab2" label="标签二" closable>内容二</LumoTabPane>
    <LumoTabPane name="tab3" label="标签三" disabled>禁用</LumoTabPane>
  </LumoTabs>
</template>