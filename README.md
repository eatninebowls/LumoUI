# LumoUI - Vue3 组件库

一个基于 Vue3 + TypeScript + Tailwind 的轻量化 UI 组件库。

## ✨ 特性
- 🚀 按需引入，支持 tree-shaking
- 🎨 基于 TailwindCSS，样式轻量可定制
- 📦 封装了基础组件 (Button, Input, Collapse, Modal...)

## 📂 目录结构
LumoUI/
├─ src/                      # 组件库源码（真正发包的只看这里）
│  ├─ components/
│  │  ├─ Button/
│  │  │  ├─ Button.vue
│  │  │  ├─ index.ts
│  │  │  └─ types.ts
│  │  ├─ Collapse/
│  │  └─ Input/
│  ├─ composables/           # 组合式函数（比 utils 更贴近 Vue）
│  ├─ utils/                 # 与 Vue 无关的小工具
│  ├─ styles/
│  │  └─ index.css           # 基础样式（不打包 Tailwind，本库只写类名）
│  ├─ plugin.ts              # 支持 app.use() 全量注册
│  ├─ vite-env.d.ts			 # 文件类型声明
│  └─ index.ts               # 按需/全量导出入口
│
├─ playground/               # 本地调试用的小应用（从原来的 App.vue、index.html 移过来）
│  ├─ index.html
│  └─ src/
│     ├─ App.vue
│     └─ main.ts
│
├─ package.json
├─ tsconfig.json			 # 根配置文件，通常包括一些公共规则
├─ vite.config.ts            # Vite 库模式配置（build 走 src/index.ts）
├─ tailwind.config.ts        # 仅 playground 使用（库本身不内置 Tailwind）
├─ tsconfig.app.json		 # 确保 TypeScript 能识别 .vue 文件，给你的组件库源码做类型检查。
├─ tsconfig.node.json		 # 告诉 TS “这些文件里可以用 Node.js 内置的模块（fs、path、process）”。
└─ README.md

## 📦 安装
```bash
pnpm add lumo-ui
