<template>
  <div class="flex flex-wrap gap-3">
    <LumoInput v-model="text" placeHolder="请输入内容" />
  </div>
</template>  
<script setup lang="ts">
  import { ref } from 'vue'
  const text = ref('')
</script>