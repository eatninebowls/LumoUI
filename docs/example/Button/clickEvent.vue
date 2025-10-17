<template>
  <LumoButton @click="handleClick">点我增加计数</LumoButton>
  <span>点击次数：{{ clickCount }}</span>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const clickCount = ref(0)
const handleClick = () => { clickCount.value++ }
</script>