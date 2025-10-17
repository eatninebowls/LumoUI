import { createApp, ref } from 'vue'
import type { App } from 'vue'
import Toast from '../components/Toast/Toast.vue'

/**
 * Toast 参数类型
 */
export interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message?: string
  duration?: number
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-left' | 'bottom-right'
  closable?: boolean
}

/**
 * 获取顶层 document.body，防止在 VitePress demo 或 iframe 内挂载层级错误
 */
function getRootBody(): HTMLElement {
  try {
    return window.top !== window && window.top?.document?.body
      ? window.top.document.body
      : document.body
  } catch {
    return document.body
  }
}

/**
 * 全局 Toast 管理器
 */
class ToastManager {
  private toasts = ref<Array<{ id: string; app: App<Element> }>>([])
  private idCounter = 0
  private wrapper: HTMLElement | null = null

  /**
   * 创建 Toast 容器
   */
  private ensureWrapper() {
    if (!this.wrapper) {
      this.wrapper = document.createElement('div')
      this.wrapper.id = 'lumo-toast-wrapper'
      this.wrapper.style.position = 'fixed'
      this.wrapper.style.top = '0'
      this.wrapper.style.left = '0'
      this.wrapper.style.width = '100%'
      this.wrapper.style.height = '100%'
      this.wrapper.style.pointerEvents = 'none'
      this.wrapper.style.zIndex = '2147483647' // ✅ 确保最高层级
      getRootBody().appendChild(this.wrapper)
    }
  }

  /**
   * 显示一个 Toast
   */
  show(options: ToastOptions) {
    this.ensureWrapper()
    const id = `toast-${this.idCounter++}`

    // 为单个 Toast 创建容器
    const container = document.createElement('div')
    container.id = id
    this.wrapper!.appendChild(container)

    // 创建 Vue 实例
    const app = createApp(Toast, {
      ...options,
      id,
      offset: this.toasts.value.length * 80, // 多个 Toast 时的偏移
      onClose: () => this.remove(id)
    })

    app.mount(container)
    this.toasts.value.push({ id, app })
    return id
  }

  /**
   * 移除一个 Toast
   */
  remove(id: string) {
    const index = this.toasts.value.findIndex(item => item.id === id)
    if (index > -1) {
      const { app } = this.toasts.value[index]
      app.unmount()

      const container = document.getElementById(id)
      if (container && this.wrapper) {
        this.wrapper.removeChild(container)
      }

      this.toasts.value.splice(index, 1)
    }
  }

  /**
   * 快捷方法
   * Partial<ToastOptions>：允许只传部分配置
   */
  success(message: string, options?: Partial<ToastOptions>) {
    return this.show({ ...options, message, type: 'success' })
  }

  error(message: string, options?: Partial<ToastOptions>) {
    return this.show({ ...options, message, type: 'error' })
  }

  warning(message: string, options?: Partial<ToastOptions>) {
    return this.show({ ...options, message, type: 'warning' })
  }

  info(message: string, options?: Partial<ToastOptions>) {
    return this.show({ ...options, message, type: 'info' })
  }
}

const toastManager = new ToastManager()

/**
 * useToast Hook — 提供统一的调用接口
 */
export const useToast = () => ({
  toast: toastManager, // 通用
  success: toastManager.success.bind(toastManager),
  error: toastManager.error.bind(toastManager),
  warning: toastManager.warning.bind(toastManager),
  info: toastManager.info.bind(toastManager)
})
