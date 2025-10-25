const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/size-isRound.betWlJWY.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/state.DWDAwOMD.js","assets/chunks/basic.C5sqCX-G.js"])))=>i.map(i=>d[i]);
import{_ as y,D as u,v as p,aq as h,p as g,B as T,c as S,o as W,j as a,a1 as m,G as t,a3 as B,a as n,a2 as b,k as d,w as s,ar as f}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as _,N as k}from"./chunks/index.uFE-mFVl.js";const V=`<script setup lang="ts">
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

`,L=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md","lastUpdated":1761380880000}'),D={name:"components/select.md"},A=Object.assign(D,{setup(w){const v=u();p(async()=>{v.value=(await h(async()=>{const{default:l}=await import("./chunks/size-isRound.betWlJWY.js");return{default:l}},__vite__mapDeps([0,1]))).default});const i=u();p(async()=>{i.value=(await h(async()=>{const{default:l}=await import("./chunks/state.DWDAwOMD.js");return{default:l}},__vite__mapDeps([2,1]))).default});const o=g(!0),r=u();return p(async()=>{r.value=(await h(async()=>{const{default:l}=await import("./chunks/basic.C5sqCX-G.js");return{default:l}},__vite__mapDeps([3,1]))).default}),(l,e)=>{const c=T("ClientOnly");return W(),S("div",null,[e[3]||(e[3]=a("h1",{id:"select-选择器",tabindex:"-1"},[n("Select 选择器 "),a("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),e[4]||(e[4]=a("p",null,"支持禁用、清空、尺寸与状态样式、可过滤搜索，提供完整的选择交互。",-1)),e[5]||(e[5]=a("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),m(t(d(_),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(d(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:d(x)},f({_:2},[r.value?{name:"vue",fn:s(()=>[t(d(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=a("h2",{id:"清空、过滤与状态",tabindex:"-1"},[n("清空、过滤与状态 "),a("a",{class:"header-anchor",href:"#清空、过滤与状态","aria-label":'Permalink to "清空、过滤与状态"'},"​")],-1)),m(t(d(_),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(d(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:d(Z)},f({_:2},[i.value?{name:"vue",fn:s(()=>[t(d(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"尺寸与圆角",tabindex:"-1"},[n("尺寸与圆角 "),a("a",{class:"header-anchor",href:"#尺寸与圆角","aria-label":'Permalink to "尺寸与圆角"'},"​")],-1)),m(t(d(_),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(d(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:d(V)},f({_:2},[v.value?{name:"vue",fn:s(()=>[t(d(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=B("",9))])}}}),M=y(A,[["__scopeId","data-v-6ed28851"]]);export{L as __pageData,M as default};
