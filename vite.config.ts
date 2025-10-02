import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({ insertTypesEntry: true })//?
  ],
  build:{
    lib:{
      entry:'src/index.ts',
      name:"LumoUI",
      fileName:(format)=>`index.${format}.js`,
      formats:['es','umd']
    },
    rollupOptions:{
      //确保外部化处理那些你不想打包进库的依赖
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})
