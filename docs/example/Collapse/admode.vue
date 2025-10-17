<script setup lang="ts">
import { ref } from 'vue'
const onlyOne = ref(['item2'])
</script>
<template>
<LumoCollapse v-model="onlyOne" :accordion="true">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三">内容三</LumoCollapseItem>
</LumoCollapse>  
</template>
