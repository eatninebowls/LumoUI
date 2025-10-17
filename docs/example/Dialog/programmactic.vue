<template>
  <div class="flex flex-wrap gap-3">
    <button
      class="btn bg-blue-500 hover:bg-blue-600"
      @click="showAlert"
    >
      Alert 弹窗
    </button>

    <button
      class="btn bg-green-500 hover:bg-green-600"
      @click="showAlertNoTitle"
    >
      无标题弹窗
    </button>

    <button
      class="btn bg-red-500 hover:bg-red-600"
      @click="showConfirm"
    >
      Confirm 确认框
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDialog } from '../../../src/composables/useDialog'

const { alert, alertNoTitle, confirm } = useDialog()

const showAlert = async () => {
  await alert('保存成功', { title: '提示' })
}

const showAlertNoTitle = async () => {
  await alertNoTitle('操作成功')
}

const showConfirm = async () => {
  const ok = await confirm('确认要删除？')
  if (ok) alert('已删除', { title: '提示' })
}
</script>

<style scoped>
.btn {
  /* @apply text-white px-3 py-1 rounded text-sm transition; */
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  font-size: 0.875rem;
}
</style>
