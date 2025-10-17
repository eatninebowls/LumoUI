<template>  
  <div class="flex flex-col gap-3">
    <LumoInput contentType="password" placeHolder="密码" />
    <LumoInput contentType="email" placeHolder="邮箱" />
    <LumoInput :searchable="true" placeHolder="搜索..." />
  </div>
</template>