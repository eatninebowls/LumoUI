<script setup lang="ts">
import { ref } from 'vue'
const active = ref('tab1')
const onClick = (name:string) => console.log('tab-click', name)
const onRemove = (name:string) => console.log('tab-remove', name)
</script>
<template>
  <LumoTabs v-model="active" @tab-click="onClick" @tab-remove="onRemove">
    <LumoTabPane name="tab1" label="一">一</LumoTabPane>
    <LumoTabPane name="tab2" label="二" closable>二</LumoTabPane>
  </LumoTabs>
</template>
