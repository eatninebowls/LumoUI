import { defineConfig } from 'vitepress'
import {vitepressDemoPlugin} from 'vitepress-demo-plugin'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'LumoUI',
  description: '轻量优雅的 Vue3 + Tailwind 组件库',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: '更新日志', link: '/changelog' },
      { text: 'GitHub', link: 'https://github.com/eatninebowls/LumoUI' },
    ],
    sidebar: {
      '/guide/': [
        { text: '介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '主题定制', link: '/guide/theme' },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Toast 提示框', link: '/components/toast' },
            { text: 'Loading 加载', link: '/components/loading' },
            { text: 'Progress 进度条', link: '/components/progress' },
          ],
        },
        {
          text: '展示组件',
          items: [
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Badge 徽章', link: '/components/badge' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eatninebowls/LumoUI' },
    ],
  },
  markdown:{
    config(md){
      md.use(vitepressDemoPlugin)
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  vite:{
    plugins:[tailwindcss()] as any
  }
})
