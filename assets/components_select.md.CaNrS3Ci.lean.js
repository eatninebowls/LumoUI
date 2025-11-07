const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/size-isRound.Bk6S5esn.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/state.BUuOw9a3.js","assets/chunks/basic.CR5eQ7Iv.js"])))=>i.map(i=>d[i]);
import{_ as y,D as r,v as u,aq as p,p as g,C as T,c as S,o as W,j as d,a1 as h,G as t,a3 as B,a as s,a2 as m,k as e,w as c,ar as f}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as _,N as k}from"./chunks/index.DVqUTNst.js";const V=`<script setup lang="ts">
import { ref } from 'vue'
const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用', value: 'disabled', disabled: true },
]
<\/script>

<template>
  <div class="flex flex-col gap-3">
    <LumoSelect size="sm" v-model="value" :options="options" />
    <LumoSelect size="md" v-model="value" :options="options" :isRound="true" />
    <LumoSelect size="lg" v-model="value" :options="options" />
  </div>
</template>`,Z=`<script setup lang="ts">
import { ref } from 'vue'
const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用', value: 'disabled', disabled: true },
]
<\/script>
<template>
  <div class="flex flex-col gap-3">
    <LumoSelect clearable v-model="value" :options="options" placeholder="可清空" />
    <LumoSelect filterable v-model="value" :options="options" placeholder="可过滤" />
    <LumoSelect state="wrong" v-model="value" :options="options" placeholder="错误态" />
  </div>
</template>
`,x=`<script setup lang="ts">
import { ref } from 'vue'
const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用', value: 'disabled', disabled: true },
]
<\/script>

<template>
  <LumoSelect v-model="value" :options="options" placeholder="请选择" />
</template>

`,L=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md","lastUpdated":1762500791000}'),D={name:"components/select.md"},A=Object.assign(D,{setup(C){const n=r();u(async()=>{n.value=(await p(async()=>{const{default:l}=await import("./chunks/size-isRound.Bk6S5esn.js");return{default:l}},__vite__mapDeps([0,1]))).default});const v=r();u(async()=>{v.value=(await p(async()=>{const{default:l}=await import("./chunks/state.BUuOw9a3.js");return{default:l}},__vite__mapDeps([2,1]))).default});const o=g(!0),i=r();return u(async()=>{i.value=(await p(async()=>{const{default:l}=await import("./chunks/basic.CR5eQ7Iv.js");return{default:l}},__vite__mapDeps([3,1]))).default}),(l,a)=>{const b=T("ClientOnly");return W(),S("div",null,[a[3]||(a[3]=d("h1",{id:"select-选择器",tabindex:"-1"},[s("Select 选择器 "),d("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),a[4]||(a[4]=d("p",null,"支持禁用、清空、尺寸与状态样式、可过滤搜索，提供完整的选择交互。",-1)),a[5]||(a[5]=d("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),h(t(e(_),null,null,512),[[m,o.value]]),t(b,null,{default:c(()=>[t(e(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{o.value=!1}),vueCode:e(x)},f({_:2},[i.value?{name:"vue",fn:c(()=>[t(e(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[6]||(a[6]=d("h2",{id:"清空、过滤与状态",tabindex:"-1"},[s("清空、过滤与状态 "),d("a",{class:"header-anchor",href:"#清空、过滤与状态","aria-label":'Permalink to "清空、过滤与状态"'},"​")],-1)),h(t(e(_),null,null,512),[[m,o.value]]),t(b,null,{default:c(()=>[t(e(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{o.value=!1}),vueCode:e(Z)},f({_:2},[v.value?{name:"vue",fn:c(()=>[t(e(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=d("h2",{id:"尺寸与圆角",tabindex:"-1"},[s("尺寸与圆角 "),d("a",{class:"header-anchor",href:"#尺寸与圆角","aria-label":'Permalink to "尺寸与圆角"'},"​")],-1)),h(t(e(_),null,null,512),[[m,o.value]]),t(b,null,{default:c(()=>[t(e(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{o.value=!1}),vueCode:e(V)},f({_:2},[n.value?{name:"vue",fn:c(()=>[t(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=B("",9))])}}}),M=y(A,[["__scopeId","data-v-760ca15b"]]);export{L as __pageData,M as default};
