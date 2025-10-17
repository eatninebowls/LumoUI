<template>
  <div class="flex flex-col gap-4">
    <LumoProgress :percentage="30" />
    <LumoProgress :percentage="60" color="#22c55e" />
    <LumoProgress :percentage="90" :strokeWidth="16" :textInside="true" />
  </div>

</template>
