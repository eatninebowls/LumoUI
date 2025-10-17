<template>
    <div class="flex flex-wrap gap-6">
      <LumoBadge :value="1">
       <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">消息</div>
      </LumoBadge>
      <LumoBadge :value="99">
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">通知</div>
      </LumoBadge>
      <LumoBadge :value="100" :max="99">
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">上限</div>
      </LumoBadge>
    </div>

</template>