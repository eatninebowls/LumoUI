// 统一导出所有组件
import './styles/index.css'
export * from './components/Button'
export * from './components/Dialog'
export * from './components/Collapse'
export * from './components/Input'
export * from './components/Progress'
export * from './components/Toast'
export * from './components/Badge'
export * from './components/Switch'
export * from './components/Tabs'
export * from './components/Select'
export * from './components/Loading'

// 导出 composables
export * from './composables/useDialog'
export * from './composables/useToast'

// 导出插件，支持 app.use(LumoUI)
export { default as LumoUI } from './plugin'