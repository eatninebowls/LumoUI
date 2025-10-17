<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
const testShow=()=>{
  show.value=!show
}
</script>
<template>
  <div class="flex flex-wrap gap-3">
    <button
      class="btn bg-blue-500 hover:bg-blue-600"
      @click="testShow()"
    >
      显示弹窗
    </button>
  </div>
  <LumoDialog :visible="show" title="可点遮罩关闭" message="maskClosable = true（默认）" />
  <LumoDialog :visible="show" :maskClosable="false" title="不可点遮罩关闭" message="maskClosable = false" /> 
</template>