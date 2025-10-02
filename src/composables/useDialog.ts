import { createApp, ref } from 'vue'
import type { App } from 'vue'
import Dialog from '../components/Dialog/Dialog.vue'

// 定义选项接口
interface DialogOptions {
  type?: 'alert' | 'confirm'
  title?: string
  message?: string
  showTitle?: boolean
  confirmText?: string
  cancelText?: string
  showCancel?: boolean
  closable?: boolean
  maskClosable?: boolean
}

// Dialog 实例接口
interface DialogInstance {
  id: string
  app: App
  resolve: (value: boolean) => void
}

class DialogManager {
  private dialogs = ref<DialogInstance[]>([])

  // 显示弹窗
  show(options: DialogOptions): Promise<boolean> {
    return new Promise((resolve) => {
      const id = 'dialog-' + Date.now() + Math.random().toString(36).substr(2, 9)
      
      // 创建容器
      const container = document.createElement('div')
      container.id = id
      document.body.appendChild(container)
      
      // 创建 Vue 应用实例
      const app = createApp(Dialog, {
        ...options,
        visible: true,
        onConfirm: () => {
          this.remove(id)
          resolve(true)
        },
        onCancel: () => {
          this.remove(id)
          resolve(false)
        },
        onClose: () => {
          this.remove(id)
          resolve(false)
        },
        'onUpdate:visible': (visible: boolean) => {
          if (!visible) {
            this.remove(id)
            resolve(false)
          }
        }
      })
      
      // 挂载应用
      app.mount(container)
      
      // 保存实例
      this.dialogs.value.push({
        id,
        app,
        resolve
      })
    })
  }

  // 移除弹窗
  remove(id: string) {
    const index = this.dialogs.value.findIndex(item => item.id === id)
    if (index > -1) {
      // 解除 Vue 实例挂载
      this.dialogs.value[index].app.unmount()
      // 解除 DOM 元素挂载
      const container = document.getElementById(id)
      if (container) {
        document.body.removeChild(container)
      }
      // 在数组中删除
      this.dialogs.value.splice(index, 1)
    }
  }

  // 提示弹窗（有标题）
  alert(message: string, options?: Partial<DialogOptions>): Promise<boolean> {
    return this.show({
      ...options,
      message,
      type: 'alert',
      showTitle: true,
      title: options?.title || '提示'
    })
  }

  // 提示弹窗（无标题）
  alertNoTitle(message: string, options?: Partial<DialogOptions>): Promise<boolean> {
    return this.show({
      ...options,
      message,
      type: 'alert',
      showTitle: false
    })
  }

  // 确认弹窗（默认有标题）
  confirm(message: string, options?: Partial<DialogOptions>): Promise<boolean> {
    return this.show({
      ...options,
      message,
      type: 'confirm',
      showTitle: true,
      title: options?.title || '确认',
      showCancel: true
    })
  }
}

// 创建全局实例
const dialogManager = new DialogManager()

// 导出 useDialog hook
export function useDialog() {
  return {
    show: dialogManager.show.bind(dialogManager),
    alert: dialogManager.alert.bind(dialogManager),
    alertNoTitle: dialogManager.alertNoTitle.bind(dialogManager),
    confirm: dialogManager.confirm.bind(dialogManager)
  }
}

// 默认导出
export default useDialog