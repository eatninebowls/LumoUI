<script setup lang="ts">
import { ref } from 'vue'
const showConfirm = ref(false)
</script>

<template>
<LumoButton @click="showConfirm = !showConfirm">确认操作</LumoButton>
<LumoDialog
  v-model="showConfirm"
  type="confirm"
  title="确认"
  message="确定要继续吗？"
  showCancel
  confirmText="继续"
  cancelText="返回"
/>  
</template>
