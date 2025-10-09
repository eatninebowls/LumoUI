# 快速开始

本文介绍如何在你的 Vue3 项目中安装并使用 LumoUI。

## 安装

使用你熟悉的包管理器安装：

```bash
pnpm add lumoui
# 或：npm i lumoui
# 或：yarn add lumoui
```

## 全量注册（推荐）

在入口文件里注册插件并引入样式：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { LumoUI } from 'lumoui'
import 'lumoui/styles/index.css'

createApp(App).use(LumoUI).mount('#app')
```

然后就可以在任意页面使用组件：

```vue
<template>
  <LumoButton variant="primary" @click="onClick">
    Primary
  </LumoButton>
</template>

<script setup lang="ts">
const onClick = () => console.log('clicked')
</script>
```

## 按需引入

也可以只引入需要的组件：

```ts
import { LumoButton } from 'lumoui'
import 'lumoui/styles/index.css'
```

```vue
<template>
  <LumoButton size="md">按钮</LumoButton>
</template>
```

## 与 Tailwind 结合的提示

- 组件库内部使用了 Tailwind 实用类。使用方无需安装 Tailwind，但需要确保引入了库的样式文件（上面示例的 `styles/index.css`）。
- 如果你的项目也使用 Tailwind，建议避免引入 `base`（Preflight 重置），仅保留 `utilities`，以减少全局样式污染。

## 常见问题

- 按钮样式不生效：确认是否引入了 `lumoui/styles/index.css`；若你的项目启用了強重置样式（如 Preflight），请尝试只保留 `utilities` 或提升库样式优先级。