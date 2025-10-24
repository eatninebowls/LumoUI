const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/size-isRound.betWlJWY.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/state.DWDAwOMD.js","assets/chunks/basic.C5sqCX-G.js"])))=>i.map(i=>d[i]);
import{_ as g,D as u,v as p,aq as h,p as W,B as S,c as V,o as y,j as d,a1 as m,G as t,a3 as A,a as n,a2 as b,k as e,w as s,ar as f}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as k,N as _}from"./chunks/index.uFE-mFVl.js";const w=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('option1')\r
const options = [\r
  { label: '选项一', value: 'option1' },\r
  { label: '选项二', value: 'option2' },\r
  { label: '选项三', value: 'option3' },\r
  { label: '禁用', value: 'disabled', disabled: true },\r
]\r
<\/script>\r
\r
<template>\r
  <div class="flex flex-col gap-3">\r
    <LumoSelect size="sm" v-model="value" :options="options" />\r
    <LumoSelect size="md" v-model="value" :options="options" :isRound="true" />\r
    <LumoSelect size="lg" v-model="value" :options="options" />\r
  </div>\r
</template>`,x=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('option1')\r
const options = [\r
  { label: '选项一', value: 'option1' },\r
  { label: '选项二', value: 'option2' },\r
  { label: '选项三', value: 'option3' },\r
  { label: '禁用', value: 'disabled', disabled: true },\r
]\r
<\/script>\r
<template>\r
  <div class="flex flex-col gap-3">\r
    <LumoSelect clearable v-model="value" :options="options" placeholder="可清空" />\r
    <LumoSelect filterable v-model="value" :options="options" placeholder="可过滤" />\r
    <LumoSelect state="wrong" v-model="value" :options="options" placeholder="错误态" />\r
  </div>\r
</template>\r
`,D=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const value = ref('option1')\r
const options = [\r
  { label: '选项一', value: 'option1' },\r
  { label: '选项二', value: 'option2' },\r
  { label: '选项三', value: 'option3' },\r
  { label: '禁用', value: 'disabled', disabled: true },\r
]\r
<\/script>\r
\r
<template>\r
  <LumoSelect v-model="value" :options="options" placeholder="请选择" />\r
</template>\r
\r
`,U=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md","lastUpdated":1760685628000}'),L={name:"components/select.md"},B=Object.assign(L,{setup(N){const r=u();p(async()=>{r.value=(await h(async()=>{const{default:l}=await import("./chunks/size-isRound.betWlJWY.js");return{default:l}},__vite__mapDeps([0,1]))).default});const i=u();p(async()=>{i.value=(await h(async()=>{const{default:l}=await import("./chunks/state.DWDAwOMD.js");return{default:l}},__vite__mapDeps([2,1]))).default});const o=W(!0),v=u();return p(async()=>{v.value=(await h(async()=>{const{default:l}=await import("./chunks/basic.C5sqCX-G.js");return{default:l}},__vite__mapDeps([3,1]))).default}),(l,a)=>{const c=S("ClientOnly");return y(),V("div",null,[a[3]||(a[3]=d("h1",{id:"select-选择器",tabindex:"-1"},[n("Select 选择器 "),d("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),a[4]||(a[4]=d("p",null,"支持禁用、清空、尺寸与状态样式、可过滤搜索，提供完整的选择交互。",-1)),a[5]||(a[5]=d("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),m(t(e(k),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{o.value=!1}),vueCode:e(D)},f({_:2},[v.value?{name:"vue",fn:s(()=>[t(e(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[6]||(a[6]=d("h2",{id:"清空、过滤与状态",tabindex:"-1"},[n("清空、过滤与状态 "),d("a",{class:"header-anchor",href:"#清空、过滤与状态","aria-label":'Permalink to "清空、过滤与状态"'},"​")],-1)),m(t(e(k),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{o.value=!1}),vueCode:e(x)},f({_:2},[i.value?{name:"vue",fn:s(()=>[t(e(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=d("h2",{id:"尺寸与圆角",tabindex:"-1"},[n("尺寸与圆角 "),d("a",{class:"header-anchor",href:"#尺寸与圆角","aria-label":'Permalink to "尺寸与圆角"'},"​")],-1)),m(t(e(k),null,null,512),[[b,o.value]]),t(c,null,{default:s(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{o.value=!1}),vueCode:e(w)},f({_:2},[r.value?{name:"vue",fn:s(()=>[t(e(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=A("",9))])}}}),E=g(B,[["__scopeId","data-v-00494359"]]);export{U as __pageData,E as default};
