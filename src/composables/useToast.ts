import { createApp, ref } from 'vue'
import type { App } from 'vue'
import Toast from '../components/Toast/Toast.vue'
//定义选项接口，选择toast各参数
interface ToastOptions {
  type?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message?: string
  duration?: number
  position?: 'top-right' | 'top-left' | 'top-center' | 'bottom-left' | 'bottom-right'
  closable?: boolean
}
//
class ToastManager {
  //定义一个响应式的数组用来存放toast实例保存其id和vue实例
  private toasts = ref<Array<{ id: string; app: App<Element> }>>([])
  //记录当前编号的
  private idCounter=0
  //show接收参数option要求参数继承ToastOptions的要求
  show(options:ToastOptions){
    const id=`toast-${this.idCounter++}`
    const container=document.createElement('div')
    container.id=id
    //这里为什么是body呢
    document.body.appendChild(container)
    //下面不懂
    const app=createApp(Toast,{
      ...options,
      onClose:()=>this.remove(id)
    })
    //挂载刚刚创造好的实例
    app.mount(container)
    //保存实例的信息进数组
    this.toasts.value.push({id,app})
    return id
  }
  //移除函数
  remove(id:string){
    //找到要移除的
    const index=this.toasts.value.findIndex(item=>item.id===id)
    //找得到
    if(index>-1){
      //解除vue实例挂载
      this.toasts.value[index].app.unmount()
      //解除dom元素挂载
      const container=document.getElementById(id)
      if(container){
        document.body.removeChild(container)
      }
      //在数组中删掉这个
      this.toasts.value.splice(index,1)
    }
  }
  //Partial<T> 是 TypeScript 中的一个工具类型，用于将类型 T 的所有属性变成可选的。可是我原本在interface里面已经设置了可选的呀，为什么这里还需要 Partial<ToastOptions> 呢？
  success(message:string,options?:Partial<ToastOptions>){
    //为什么传三个参数呢
    return this.show({...options,message,type:'success'})
  }
  error(message:string,options?:Partial<ToastOptions>){
    return this.show({...options,message,type:'error'})
  }
  warning(message:string,options?:Partial<ToastOptions>){
    return this.show({...options,message,type:'warning'})
  }
  info(message:string,options?:Partial<ToastOptions>){
    return this.show({...options,message,type:'info'})
  }
}

const toastManager=new ToastManager()
export const useToast=()=>{
  return{
    //普通toast
    toast:toastManager,
    //成功toast，为什么要bind呢，是因为return里面有this？
    success:toastManager.success.bind(toastManager),
    error:toastManager.error.bind(toastManager),
    warning:toastManager.warning.bind(toastManager),
    info:toastManager.info.bind(toastManager)
  }
}
