// .vitepress/theme/index.ts
import "./index.css"
import 'vitepress-demo-plugin/dist/style.css' // 可选：Demo 样式
import '@vitepress-demo-preview/component/dist/style.css' // 可选：预览样式

import DefaultTheme from 'vitepress/theme'
import { LumoUI } from '../../../src/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component' // 可选：demo 容器
import type { Theme } from 'vitepress'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(LumoUI)
    app.component('demo-preview', AntDesignContainer) // ✅ 注册 demo 容器（可选）
  }
}

export default theme
