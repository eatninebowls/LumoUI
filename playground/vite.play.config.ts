import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: 'playground', // 指定 demo 根目录
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'lumoui': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})