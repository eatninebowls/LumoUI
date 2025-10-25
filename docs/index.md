---
layout: home
hero:
  name: "LumoUI"
  text: "轻量优雅 Vue3 组件库"
  tagline: "基于 Vue3 + TypeScript + Tailwind CSS 构建的现代化组件库"
  image:
    src: /animal-08.svg
    alt: LumoUI
  actions:
    - theme: alt
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 组件预览
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/eatninebowls/LumoUI
features:
  - icon: ⚡️
    title: 轻量高效
    details: 基于 Vue3 Composition API，打包体积小，性能优异
  - icon: 🎨
    title: 设计精美
    details: 采用现代化设计语言，支持主题定制，视觉效果出色
  - icon: 🛠️
    title: TypeScript 支持
    details: 完整的 TypeScript 类型定义，提供更好的开发体验
  - icon: 📱
    title: 响应式设计
    details: 基于 Tailwind CSS，完美适配各种屏幕尺寸
  - icon: 🔧
    title: 易于使用
    details: 简洁的 API 设计，丰富的文档和示例
  - icon: 🌈
    title: 主题定制
    details: 支持深度定制，轻松适配你的品牌色彩
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #8fffa9ff 40%, #fff873ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #8fffa9ff 50%, #fff873ff 50%);
  --vp-home-hero-image-filter: blur(44px);
}
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}
@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
/* 暗黑模式：统一将 brand/alt 按钮文字改为黑色 */
html.dark {
  --vp-button-brand-text: #000;
  --vp-button-brand-hover-text: #000;
  --vp-button-alt-text: #000;
  --vp-button-alt-hover-text: #000;
}
</style>