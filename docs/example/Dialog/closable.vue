<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
const testShow=()=>{
  show.value=!show.value
}
</script>
<template>
  <div class="flex flex-wrap gap-3">
    <LumoButton
      @click="testShow()"
    >
      显示弹窗
    </LumoButton>
  </div>
  <LumoDialog :visible="show" title="可点遮罩关闭" message="maskClosable = true（默认）" />
  <LumoDialog :visible="show" :maskClosable="false" title="不可点遮罩关闭" message="maskClosable = false" /> 
</template>