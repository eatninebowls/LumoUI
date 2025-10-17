<template>
  <LumoButton @click="show = true">打开对话框</LumoButton>
  <LumoDialog v-model="show" type="alert" title="提示" message="这是内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>