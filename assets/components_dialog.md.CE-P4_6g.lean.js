const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/programmactic.CEbMn8ZO.js","assets/chunks/theme.DhIum_zL.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/closable.D9YgwTMq.js","assets/chunks/confirm.BkzzbS_I.js","assets/chunks/basic.byKVdvS8.js"])))=>i.map(i=>d[i]);
import{_,D as i,v as b,aq as v,p as w,B,c as D,o as T,j as e,a1 as r,G as a,a3 as W,a as n,a2 as u,k as d,w as l,ar as h}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as m,N as p}from"./chunks/index.uFE-mFVl.js";const C=`<template>
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
<\/script>`,M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1761380880000}'),x={name:"components/dialog.md"},Z=Object.assign(x,{setup(L){const f=i();b(async()=>{f.value=(await v(async()=>{const{default:c}=await import("./chunks/programmactic.CEbMn8ZO.js");return{default:c}},__vite__mapDeps([0,1,2]))).default});const k=i();b(async()=>{k.value=(await v(async()=>{const{default:c}=await import("./chunks/closable.D9YgwTMq.js");return{default:c}},__vite__mapDeps([3,2]))).default});const y=i();b(async()=>{y.value=(await v(async()=>{const{default:c}=await import("./chunks/confirm.BkzzbS_I.js");return{default:c}},__vite__mapDeps([4,2]))).default});const o=w(!0),g=i();return b(async()=>{g.value=(await v(async()=>{const{default:c}=await import("./chunks/basic.byKVdvS8.js");return{default:c}},__vite__mapDeps([5,2]))).default}),(c,t)=>{const s=B("ClientOnly");return T(),D("div",null,[t[4]||(t[4]=e("h1",{id:"dialog-对话框",tabindex:"-1"},[n("Dialog 对话框 "),e("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),t[5]||(t[5]=e("p",null,"提供提示与确认两类对话框，支持遮罩关闭、标题显示、按钮文案自定义，以及程序化调用。",-1)),t[6]||(t[6]=e("h2",{id:"基础用法-v-model",tabindex:"-1"},[n("基础用法（v-model） "),e("a",{class:"header-anchor",href:"#基础用法-v-model","aria-label":'Permalink to "基础用法（v-model）"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(E)},h({_:2},[g.value?{name:"vue",fn:l(()=>[a(d(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"确认框",tabindex:"-1"},[n("确认框 "),e("a",{class:"header-anchor",href:"#确认框","aria-label":'Permalink to "确认框"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:d(V)},h({_:2},[y.value?{name:"vue",fn:l(()=>[a(d(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=e("h2",{id:"遮罩-关闭配置",tabindex:"-1"},[n("遮罩/关闭配置 "),e("a",{class:"header-anchor",href:"#遮罩-关闭配置","aria-label":'Permalink to "遮罩/关闭配置"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{o.value=!1}),vueCode:d(A)},h({_:2},[k.value?{name:"vue",fn:l(()=>[a(d(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"程序化调用",tabindex:"-1"},[n("程序化调用 "),e("a",{class:"header-anchor",href:"#程序化调用","aria-label":'Permalink to "程序化调用"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{o.value=!1}),vueCode:d(C)},h({_:2},[f.value?{name:"vue",fn:l(()=>[a(d(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=W("",9))])}}}),P=_(Z,[["__scopeId","data-v-92bdc860"]]);export{M as __pageData,P as default};
