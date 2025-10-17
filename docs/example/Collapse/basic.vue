<template>
  <LumoCollapse v-model="active">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三" :disabled="true">禁用内容</LumoCollapseItem>
</LumoCollapse>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(['item1'])
</script>