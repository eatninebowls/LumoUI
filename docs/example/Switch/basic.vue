<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
</script>

<template>
<LumoSwitch v-model="s1" />
<LumoSwitch v-model="s2" activeText="开启" inactiveText="关闭" />
</template>