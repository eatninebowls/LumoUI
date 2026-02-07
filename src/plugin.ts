// 支持app.use()全量注册
// 下面建立插件出口,让整个组件库支持一键安装

//引入App,plugin类型,方便类型检查
import type {App,Plugin} from 'vue'
//下面引入所有组件
import {LumoButton} from './components/Button'
import {LumoInput} from './components/Input'
import {LumoBadge} from './components/Badge'
import {LumoToast} from './components/Toast'
import {LumoProgress} from './components/Progress'
import {LumoDialog} from './components/Dialog'
import {LumoCollapse,LumoCollapseItem} from './components/Collapse'
import {LumoSwitch} from './components/Switch'
import {LumoTabs,LumoTabPane} from './components/Tabs'
import {LumoSelect} from './components/Select'
import {LumoLoading} from './components/Loading'

//将组件都放在一起方便后续统一注册
const components=[LumoButton,LumoToast,LumoProgress,LumoDialog,LumoCollapseItem,LumoCollapse,LumoInput,LumoBadge,LumoSwitch,LumoTabs,LumoTabPane,LumoSelect,LumoLoading]
//定义一个插件对象,类型是vue的Plugin
const LumoUI:Plugin={
  //Vue会在app.use(LumoUI)时调用这个install方法,其中传入的参数是app实例
 
 install(app:App){
  //遍历数组把每个组件注册成全局组件
    components.forEach((c:any)=>{
        if(c&&c.name) {
          //Vue的全局注册方法:app.component(组件名,组件本身)
          app.component(c.name,c)
        }
    })
 }
}
export default LumoUI
export {
  LumoButton,
  LumoToast,
  LumoProgress,
  LumoDialog,
  LumoCollapse,
  LumoCollapseItem,
  LumoInput,
  LumoBadge,
  LumoSwitch,
  LumoTabs,
  LumoTabPane,
  LumoSelect,
  LumoLoading,
} 
//全量导出的出口