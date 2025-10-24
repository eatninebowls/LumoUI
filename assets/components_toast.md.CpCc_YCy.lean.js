const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/position.Cduf3j6i.js","assets/chunks/theme.Dsv0trK8.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/basic.Bc4XxB3A.js"])))=>i.map(i=>d[i]);
import{D as p,v as h,aq as u,p as k,B as y,c as _,o as T,j as e,a1 as b,G as o,a3 as w,a as s,a2 as m,k as a,w as n,ar as g}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as f,N as v}from"./chunks/index.uFE-mFVl.js";const x=`<template>\r
  <div class="grid grid-cols-3 gap-4">\r
    <button\r
      v-for="pos in positions"\r
      :key="pos"\r
      class="border rounded px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"\r
      @click="show(pos)"\r
    >\r
      {{ pos }}\r
    </button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useToast } from '../../../src/composables/useToast'\r
const { toast } = useToast()\r
\r
const positions = [\r
  'top-left',\r
  'top-center',\r
  'top-right',\r
  'bottom-left',\r
  'bottom-right'\r
]\r
\r
const show = (pos: string) => {\r
  toast.show({\r
    message: \`当前位置：\${pos}\`,\r
    type: 'info',\r
    position: pos as any\r
  })\r
}\r
<\/script>\r
`,P=`<template>\r
  <div class="flex flex-wrap gap-3">\r
    <button\r
      v-for="item in types"\r
      :key="item.type"\r
      class="px-3 py-1 rounded text-white text-sm"\r
      :class="item.color"\r
      @click="item.fn(item.label + ' 提示')"\r
    >\r
      {{ item.label }}\r
    </button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useToast } from '../../../src/composables/useToast'\r
const { success, error, warning, info } = useToast()\r
\r
const types = [\r
  { type: 'success', label: '成功', fn: success, color: 'bg-green-500 hover:bg-green-600' },\r
  { type: 'error', label: '错误', fn: error, color: 'bg-red-500 hover:bg-red-600' },\r
  { type: 'warning', label: '警告', fn: warning, color: 'bg-yellow-500 hover:bg-yellow-600' },\r
  { type: 'info', label: '信息', fn: info, color: 'bg-blue-500 hover:bg-blue-600' }\r
]\r
<\/script>`,C=JSON.parse('{"title":"Toast 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md","lastUpdated":1760685628000}'),D={name:"components/toast.md"},E=Object.assign(D,{setup(A){const i=p();h(async()=>{i.value=(await u(async()=>{const{default:d}=await import("./chunks/position.Cduf3j6i.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const r=k(!0),l=p();return h(async()=>{l.value=(await u(async()=>{const{default:d}=await import("./chunks/basic.Bc4XxB3A.js");return{default:d}},__vite__mapDeps([3,1,2]))).default}),(d,t)=>{const c=y("ClientOnly");return T(),_("div",null,[t[2]||(t[2]=e("h1",{id:"toast-消息提示",tabindex:"-1"},[s("Toast 消息提示 "),e("a",{class:"header-anchor",href:"#toast-消息提示","aria-label":'Permalink to "Toast 消息提示"'},"​")],-1)),t[3]||(t[3]=e("p",null,[s("支持四种类型、五种位置、自动/手动关闭，建议通过 "),e("code",null,"useToast()"),s(" 使用。")],-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(o(a(f),null,null,512),[[m,r.value]]),o(c,null,{default:n(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{r.value=!1}),vueCode:a(P)},g({_:2},[l.value?{name:"vue",fn:n(()=>[o(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"不同方向展示",tabindex:"-1"},[s("不同方向展示 "),e("a",{class:"header-anchor",href:"#不同方向展示","aria-label":'Permalink to "不同方向展示"'},"​")],-1)),b(o(a(f),null,null,512),[[m,r.value]]),o(c,null,{default:n(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{r.value=!1}),vueCode:a(x)},g({_:2},[i.value?{name:"vue",fn:n(()=>[o(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=w("",10))])}}});export{C as __pageData,E as default};
