<template>
  <div class="flex flex-wrap gap-6">
    <LumoBadge :value="0" :showZero="false">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐藏 0</div>
    </LumoBadge>
    <LumoBadge :value="0" :showZero="true">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">显示 0</div>
    </LumoBadge>
    <LumoBadge :value="3" :hidden="true">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐非0</div>
    </LumoBadge>
  </div>
</template>