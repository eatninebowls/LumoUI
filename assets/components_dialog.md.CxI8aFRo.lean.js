const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/programmactic.B5Nq08X0.js","assets/chunks/theme.Dsv0trK8.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/closable.D9YgwTMq.js","assets/chunks/confirm.BkzzbS_I.js","assets/chunks/basic.byKVdvS8.js"])))=>i.map(i=>d[i]);
import{_,D as i,v as f,aq as v,p as W,B as y,c as D,o as B,j as e,a1 as c,G as a,a3 as L,a as n,a2 as u,k as d,w as r,ar as m}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as h,N as p}from"./chunks/index.uFE-mFVl.js";const x=`<template>\r
  <div class="flex flex-wrap gap-3">\r
    <LumoButton\r
      @click="showAlert"\r
    >\r
      Alert 弹窗\r
    </LumoButton>\r
\r
    <LumoButton\r
      @click="showAlertNoTitle"\r
    >\r
      无标题弹窗\r
    </LumoButton>\r
\r
    <LumoButton \r
      @click="showConfirm"\r
    >\r
      Confirm 确认框\r
    </LumoButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useDialog } from '../../../src/composables/useDialog'\r
\r
const { alert, alertNoTitle, confirm } = useDialog()\r
\r
const showAlert = async () => {\r
  await alert('保存成功', { title: '提示' })\r
}\r
\r
const showAlertNoTitle = async () => {\r
  await alertNoTitle('操作成功')\r
}\r
\r
const showConfirm = async () => {\r
  const ok = await confirm('确认要删除？')\r
  if (ok) alert('已删除', { title: '提示' })\r
}\r
<\/script>\r
\r
<style scoped>\r
.btn {\r
  /* @apply text-white px-3 py-1 rounded text-sm transition; */\r
  color: black;\r
  padding: 0.5rem 1rem;\r
  border-radius: 0.25rem;\r
  transition: background-color 0.2s ease-in-out;\r
  font-size: 0.875rem;\r
}\r
</style>\r
`,C=`<script lang="ts" setup>\r
import { ref } from 'vue'\r
const show = ref(false)\r
const testShow=()=>{\r
  show.value=!show.value\r
}\r
<\/script>\r
<template>\r
  <div class="flex flex-wrap gap-3">\r
    <LumoButton\r
      @click="testShow()"\r
    >\r
      显示弹窗\r
    </LumoButton>\r
  </div>\r
  <LumoDialog :visible="show" title="可点遮罩关闭" message="maskClosable = true（默认）" />\r
  <LumoDialog :visible="show" :maskClosable="false" title="不可点遮罩关闭" message="maskClosable = false" /> \r
</template>`,A=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const showConfirm = ref(false)\r
<\/script>\r
\r
<template>\r
<LumoButton @click="showConfirm = !showConfirm">确认操作</LumoButton>\r
<LumoDialog\r
  v-model="showConfirm"\r
  type="confirm"\r
  title="确认"\r
  message="确定要继续吗？"\r
  showCancel\r
  confirmText="继续"\r
  cancelText="返回"\r
/>  \r
</template>\r
`,T=`<template>\r
  <LumoButton @click="show = true">打开对话框</LumoButton>\r
  <LumoDialog v-model="show" type="alert" title="提示" message="这是内容" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
const show = ref(false)\r
<\/script>`,U=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1760685628000}'),V={name:"components/dialog.md"},N=Object.assign(V,{setup(S){const b=i();f(async()=>{b.value=(await v(async()=>{const{default:l}=await import("./chunks/programmactic.B5Nq08X0.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const k=i();f(async()=>{k.value=(await v(async()=>{const{default:l}=await import("./chunks/closable.D9YgwTMq.js");return{default:l}},__vite__mapDeps([3,2]))).default});const w=i();f(async()=>{w.value=(await v(async()=>{const{default:l}=await import("./chunks/confirm.BkzzbS_I.js");return{default:l}},__vite__mapDeps([4,2]))).default});const o=W(!0),g=i();return f(async()=>{g.value=(await v(async()=>{const{default:l}=await import("./chunks/basic.byKVdvS8.js");return{default:l}},__vite__mapDeps([5,2]))).default}),(l,t)=>{const s=y("ClientOnly");return B(),D("div",null,[t[4]||(t[4]=e("h1",{id:"dialog-对话框",tabindex:"-1"},[n("Dialog 对话框 "),e("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),t[5]||(t[5]=e("p",null,"提供提示与确认两类对话框，支持遮罩关闭、标题显示、按钮文案自定义，以及程序化调用。",-1)),t[6]||(t[6]=e("h2",{id:"基础用法-v-model",tabindex:"-1"},[n("基础用法（v-model） "),e("a",{class:"header-anchor",href:"#基础用法-v-model","aria-label":'Permalink to "基础用法（v-model）"'},"​")],-1)),c(a(d(h),null,null,512),[[u,o.value]]),a(s,null,{default:r(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(T)},m({_:2},[g.value?{name:"vue",fn:r(()=>[a(d(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"确认框",tabindex:"-1"},[n("确认框 "),e("a",{class:"header-anchor",href:"#确认框","aria-label":'Permalink to "确认框"'},"​")],-1)),c(a(d(h),null,null,512),[[u,o.value]]),a(s,null,{default:r(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:d(A)},m({_:2},[w.value?{name:"vue",fn:r(()=>[a(d(w))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=e("h2",{id:"遮罩-关闭配置",tabindex:"-1"},[n("遮罩/关闭配置 "),e("a",{class:"header-anchor",href:"#遮罩-关闭配置","aria-label":'Permalink to "遮罩/关闭配置"'},"​")],-1)),c(a(d(h),null,null,512),[[u,o.value]]),a(s,null,{default:r(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{o.value=!1}),vueCode:d(C)},m({_:2},[k.value?{name:"vue",fn:r(()=>[a(d(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"程序化调用",tabindex:"-1"},[n("程序化调用 "),e("a",{class:"header-anchor",href:"#程序化调用","aria-label":'Permalink to "程序化调用"'},"​")],-1)),c(a(d(h),null,null,512),[[u,o.value]]),a(s,null,{default:r(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{o.value=!1}),vueCode:d(x)},m({_:2},[b.value?{name:"vue",fn:r(()=>[a(d(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=L("",9))])}}}),q=_(N,[["__scopeId","data-v-85fd0655"]]);export{U as __pageData,q as default};
