const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/programmactic.DvCl5kZI.js","assets/chunks/theme.D_SsfZ-D.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/closable.C2KiY9R_.js","assets/chunks/confirm.BuKh9sud.js","assets/chunks/basic.D8tE1qfK.js"])))=>i.map(i=>d[i]);
import{_,D as b,v,aq as r,p as w,C as B,c as D,o as T,j as e,a1 as c,G as t,a3 as C,a as s,a2 as u,k as a,w as n,ar as h}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as m,N as p}from"./chunks/index.DVqUTNst.js";const W=`<template>
  <div class="flex flex-wrap gap-3">
    <LumoButton
      @click="showAlert"
    >
      Alert 弹窗
    </LumoButton>

    <LumoButton
      @click="showAlertNoTitle"
    >
      无标题弹窗
    </LumoButton>

    <LumoButton 
      @click="showConfirm"
    >
      Confirm 确认框
    </LumoButton>
  </div>
</template>

<script setup lang="ts">
import { useDialog } from '../../../src/composables/useDialog'

const { alert, alertNoTitle, confirm } = useDialog()

const showAlert = async () => {
  await alert('保存成功', { title: '提示' })
}

const showAlertNoTitle = async () => {
  await alertNoTitle('操作成功')
}

const showConfirm = async () => {
  const ok = await confirm('确认要删除？')
  if (ok) alert('已删除', { title: '提示' })
}
<\/script>

<style scoped>
.btn {
  /* @apply text-white px-3 py-1 rounded text-sm transition; */
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  font-size: 0.875rem;
}
</style>
`,A=`<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
const testShow=()=>{
  show.value=!show.value
}
<\/script>
<template>
  <div class="flex flex-wrap gap-3">
    <LumoButton
      @click="testShow()"
    >
      显示弹窗
    </LumoButton>
  </div>
  <LumoDialog :visible="show" title="可点遮罩关闭" message="maskClosable = true（默认）" />
  <LumoDialog :visible="show" :maskClosable="false" title="不可点遮罩关闭" message="maskClosable = false" /> 
</template>`,V=`<script setup lang="ts">
import { ref } from 'vue'
const showConfirm = ref(false)
<\/script>

<template>
<LumoButton @click="showConfirm = !showConfirm">确认操作</LumoButton>
<LumoDialog
  v-model="showConfirm"
  type="confirm"
  title="确认"
  message="确定要继续吗？"
  showCancel
  confirmText="继续"
  cancelText="返回"
/>  
</template>
`,E=`<template>
  <LumoButton @click="show = true">打开对话框</LumoButton>
  <LumoDialog v-model="show" type="alert" title="提示" message="这是内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
<\/script>`,M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1762500791000}'),x={name:"components/dialog.md"},Z=Object.assign(x,{setup(L){const f=b();v(async()=>{f.value=(await r(async()=>{const{default:l}=await import("./chunks/programmactic.DvCl5kZI.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const k=b();v(async()=>{k.value=(await r(async()=>{const{default:l}=await import("./chunks/closable.C2KiY9R_.js");return{default:l}},__vite__mapDeps([3,2]))).default});const y=b();v(async()=>{y.value=(await r(async()=>{const{default:l}=await import("./chunks/confirm.BuKh9sud.js");return{default:l}},__vite__mapDeps([4,2]))).default});const o=w(!0),g=b();return v(async()=>{g.value=(await r(async()=>{const{default:l}=await import("./chunks/basic.D8tE1qfK.js");return{default:l}},__vite__mapDeps([5,2]))).default}),(l,d)=>{const i=B("ClientOnly");return T(),D("div",null,[d[4]||(d[4]=e("h1",{id:"dialog-对话框",tabindex:"-1"},[s("Dialog 对话框 "),e("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),d[5]||(d[5]=e("p",null,"提供提示与确认两类对话框，支持遮罩关闭、标题显示、按钮文案自定义，以及程序化调用。",-1)),d[6]||(d[6]=e("h2",{id:"基础用法-v-model",tabindex:"-1"},[s("基础用法（v-model） "),e("a",{class:"header-anchor",href:"#基础用法-v-model","aria-label":'Permalink to "基础用法（v-model）"'},"​")],-1)),c(t(a(m),null,null,512),[[u,o.value]]),t(i,null,{default:n(()=>[t(a(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:d[0]||(d[0]=()=>{o.value=!1}),vueCode:a(E)},h({_:2},[g.value?{name:"vue",fn:n(()=>[t(a(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),d[7]||(d[7]=e("h2",{id:"确认框",tabindex:"-1"},[s("确认框 "),e("a",{class:"header-anchor",href:"#确认框","aria-label":'Permalink to "确认框"'},"​")],-1)),c(t(a(m),null,null,512),[[u,o.value]]),t(i,null,{default:n(()=>[t(a(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:d[1]||(d[1]=()=>{o.value=!1}),vueCode:a(V)},h({_:2},[y.value?{name:"vue",fn:n(()=>[t(a(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),d[8]||(d[8]=e("h2",{id:"遮罩-关闭配置",tabindex:"-1"},[s("遮罩/关闭配置 "),e("a",{class:"header-anchor",href:"#遮罩-关闭配置","aria-label":'Permalink to "遮罩/关闭配置"'},"​")],-1)),c(t(a(m),null,null,512),[[u,o.value]]),t(i,null,{default:n(()=>[t(a(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:d[2]||(d[2]=()=>{o.value=!1}),vueCode:a(A)},h({_:2},[k.value?{name:"vue",fn:n(()=>[t(a(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),d[9]||(d[9]=e("h2",{id:"程序化调用",tabindex:"-1"},[s("程序化调用 "),e("a",{class:"header-anchor",href:"#程序化调用","aria-label":'Permalink to "程序化调用"'},"​")],-1)),c(t(a(m),null,null,512),[[u,o.value]]),t(i,null,{default:n(()=>[t(a(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:d[3]||(d[3]=()=>{o.value=!1}),vueCode:a(W)},h({_:2},[f.value?{name:"vue",fn:n(()=>[t(a(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),d[10]||(d[10]=C("",9))])}}}),P=_(Z,[["__scopeId","data-v-664d24bd"]]);export{M as __pageData,P as default};
