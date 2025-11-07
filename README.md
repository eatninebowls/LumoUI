# 🎉 LumoUI 组件库
一个基于 Vue 3 和 TypeScript 的轻量 UI 组件库，提供常用组件与程序化工具，帮助你快速搭建一致、优雅的前端界面。

## ✨ 特性
- 🌈 支持按需引入与 Tree-shaking，减小打包体积
- 🛠️ 基于 Vue 3 + TypeScript，类型友好
- 🧩 提供丰富组件：Select、Switch、Tabs、Badge、Dialog、Toast、Loading、Collapse 等
- 🚀 支持程序化调用：`useDialog()`、`useToast()`
- 🎨 Tailwind 风格样式，支持主题扩展
- 📚 配套文档与示例，开箱即用
- 📦 同时输出 `ESM` 与 `UMD`

## 🔗 地址链接
- 文档站点：https://eatninebowls.github.io/LumoUI/
- GitHub 仓库：https://github.com/eatninebowls/LumoUI
- npm 包页：https://www.npmjs.com/package/@eatninebowls/lumoui

## 📦 安装
```bash
npm install @eatninebowls/lumoui
```
```bash
yarn add @eatninebowls/lumoui
```
```bash
pnpm add @eatninebowls/lumoui
```

> 依赖要求：`vue@^3.3.0`（如未安装，请先安装）

## ⚡ 快速上手（全局注册）
在入口文件中安装插件，全局可用所有组件。
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { LumoUI } from '@eatninebowls/lumoui'
// 若需要样式按需导入，可使用别名
import '@eatninebowls/lumoui/styles/index.css'

createApp(App).use(LumoUI).mount('#app')
```

使用组件：
```vue
<template>
  <LumoButton>按钮</LumoButton>
</template>
```

## 🧩 按需引入（推荐）
只引入你需要的组件/工具，享受更小的体积。
```ts
// 组件与工具
import { LumoButton, useDialog, useToast } from '@eatninebowls/lumoui'
// 样式（如果你的入口未全局引入样式）
import '@eatninebowls/lumoui/styles/index.css'

// 使用程序化 API
const { confirm } = useDialog()
const { success, error, warning, info } = useToast()

async function onClick() {
  try {
    await confirm('确认要执行此操作吗？', '确认操作')
    success('操作成功！')
  } catch {
    info('操作已取消')
  }
}
```

## 🎨 主题与样式
- 默认样式基于 Tailwind，支持通过自定义 CSS 变量/类名进行主题扩展。
- 参考文档中的主题章节：`docs/guide/theme.md`

## 🧪 Playground
本仓库内置 `playground` 示例，可本地联调：
```bash
pnpm run dev:play
```

## 📄 组件文档
- 入门指南：`docs/guide/getting-started.md`
- 组件示例：`docs/components/*`
- 在线预览：见“文档站点”链接

## 🤝 贡献
欢迎提 Issue 或 PR：
- 先 `pnpm i` 安装依赖
- 本地测试：`pnpm run dev` / `pnpm run dev:play`
- 文档开发：`pnpm run docs:dev`
