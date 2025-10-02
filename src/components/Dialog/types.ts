export interface DialogProps{
  type?:'alert'|'confirm'
  title?:string
  message?:string
  modelValue?:boolean  // 支持 v-model
  visible?:boolean     // 保留兼容性
  showTitle?:boolean
  confirmText?:string
  cancelText?:string
  showCancel?:boolean
  closable?:boolean
  maskClosable?:boolean
}