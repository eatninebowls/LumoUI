<script setup lang="ts">
import { ref } from 'vue'
const active2 = ref('card1')
</script>
<template>
  <LumoTabs v-model="active2" type="card" position="top">
    <LumoTabPane name="card1" label="卡片一">内容一</LumoTabPane>
    <LumoTabPane name="card2" label="卡片二" lazy>首次激活时渲染</LumoTabPane>
  </LumoTabs>  
</template>
