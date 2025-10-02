import type {App,Plugin} from 'vue'
// 给组件加上install方法让他既能够单独引入，也能被app.use()全局注册

export function withInstall<T>(component:T,name:string){
  //给每个组件加上name属性（Vue全局注册需要）
  (component as any).name=name;
  //给组件加上install方法
  (component as any as Plugin).install=(app:App)=>{
    app.component(name,component as any)
  }
  //返回一个既是组件又有install方法的对象
  return component as T &Plugin
}