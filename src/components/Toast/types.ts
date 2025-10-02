export interface ToastProps{
  type?:'success'|'error'|'warning'|'info',
  title?:string,
  message:string,
  duration?:number,
  position?:'top-right'|'top-left'|'bottom-right'|'bottom-left'|'top-center',
  closable?:boolean
}