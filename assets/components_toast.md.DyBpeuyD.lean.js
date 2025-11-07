const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/position.1BkY0GwM.js","assets/chunks/theme.D_SsfZ-D.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/basic.bCASek6V.js"])))=>i.map(i=>d[i]);
import{D as p,v as h,aq as u,p as y,C as k,c as _,o as T,j as e,a1 as b,G as o,a3 as w,a as d,a2 as m,k as a,w as r,ar as g}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as f,N as v}from"./chunks/index.DVqUTNst.js";const P=`<template>
  <div class="grid grid-cols-3 gap-4">
    <LumoButton
      v-for="pos in positions"
      :key="pos"
      @click="show(pos)"
    >
      {{ pos }}
    </LumoButton>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { toast } = useToast()

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-right'
]

const show = (pos: string) => {
  toast.show({
    message: \`当前位置：\${pos}\`,
    type: 'info',
    position: pos as any
  })
}
<\/script>
`,B=`<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="item in types"
      :key="item.type"
      class="px-3 py-1 rounded text-white text-sm"
      :class="item.color"
      @click="item.fn(item.label + ' 提示')"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { success, error, warning, info } = useToast()

const types = [
  { type: 'success', label: '成功', fn: success, color: 'bg-green-500 hover:bg-green-600' },
  { type: 'error', label: '错误', fn: error, color: 'bg-red-500 hover:bg-red-600' },
  { type: 'warning', label: '警告', fn: warning, color: 'bg-yellow-500 hover:bg-yellow-600' },
  { type: 'info', label: '信息', fn: info, color: 'bg-blue-500 hover:bg-blue-600' }
]
<\/script>`,V=JSON.parse('{"title":"Toast 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md","lastUpdated":1762500791000}'),C={name:"components/toast.md"},q=Object.assign(C,{setup(x){const l=p();h(async()=>{l.value=(await u(async()=>{const{default:n}=await import("./chunks/position.1BkY0GwM.js");return{default:n}},__vite__mapDeps([0,1,2]))).default});const s=y(!0),i=p();return h(async()=>{i.value=(await u(async()=>{const{default:n}=await import("./chunks/basic.bCASek6V.js");return{default:n}},__vite__mapDeps([3,1,2]))).default}),(n,t)=>{const c=k("ClientOnly");return T(),_("div",null,[t[2]||(t[2]=e("h1",{id:"toast-消息提示",tabindex:"-1"},[d("Toast 消息提示 "),e("a",{class:"header-anchor",href:"#toast-消息提示","aria-label":'Permalink to "Toast 消息提示"'},"​")],-1)),t[3]||(t[3]=e("p",null,[d("支持四种类型、五种位置、自动/手动关闭，建议通过 "),e("code",null,"useToast()"),d(" 使用。")],-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(o(a(f),null,null,512),[[m,s.value]]),o(c,null,{default:r(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:a(B)},g({_:2},[i.value?{name:"vue",fn:r(()=>[o(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"不同方向展示",tabindex:"-1"},[d("不同方向展示 "),e("a",{class:"header-anchor",href:"#不同方向展示","aria-label":'Permalink to "不同方向展示"'},"​")],-1)),b(o(a(f),null,null,512),[[m,s.value]]),o(c,null,{default:r(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:a(P)},g({_:2},[l.value?{name:"vue",fn:r(()=>[o(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=w("",10))])}}});export{V as __pageData,q as default};
