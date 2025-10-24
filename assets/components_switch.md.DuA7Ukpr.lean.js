const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/costomize.Cfh-Znft.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/more.C3KZwY_x.js","assets/chunks/basic.KZE7x5-0.js"])))=>i.map(i=>d[i]);
import{_ as C,D as v,v as h,aq as p,p as A,B as _,c as D,o as S,j as f,a1 as u,G as d,a3 as y,a as c,a2 as k,k as t,w as i,ar as m}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as b,N as g}from"./chunks/index.uFE-mFVl.js";const W=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const s1 = ref(false)\r
<\/script>\r
\r
<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoSwitch v-model="s1" activeColor="#22c55e" inactiveColor="#d1d5db" :width="60" />\r
  </div>\r
</template>\r
`,x=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const s1 = ref(false)\r
const s2 = ref(true)\r
<\/script>\r
<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoSwitch v-model="s1" size="sm" />\r
    <LumoSwitch v-model="s1" size="md" />\r
    <LumoSwitch v-model="s1" size="lg" />\r
    <LumoSwitch v-model="s1" disabled />\r
    <LumoSwitch v-model="s1" loading />\r
  </div>\r
</template>\r
`,T=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const s1 = ref(false)\r
const s2 = ref(true)\r
<\/script>\r
\r
<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoSwitch v-model="s1" />\r
    <LumoSwitch v-model="s2" activeText="开启" inactiveText="关闭" />\r
  </div>\r
</template>`,U=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md","lastUpdated":1760685628000}'),B={name:"components/switch.md"},L=Object.assign(B,{setup(F){const l=v();h(async()=>{l.value=(await p(async()=>{const{default:e}=await import("./chunks/costomize.Cfh-Znft.js");return{default:e}},__vite__mapDeps([0,1]))).default});const o=v();h(async()=>{o.value=(await p(async()=>{const{default:e}=await import("./chunks/more.C3KZwY_x.js");return{default:e}},__vite__mapDeps([2,1]))).default});const s=A(!0),n=v();return h(async()=>{n.value=(await p(async()=>{const{default:e}=await import("./chunks/basic.KZE7x5-0.js");return{default:e}},__vite__mapDeps([3,1]))).default}),(e,a)=>{const r=_("ClientOnly"),E=_("LumoSwitch");return S(),D("div",null,[a[4]||(a[4]=f("h1",{id:"switch-开关",tabindex:"-1"},[c("Switch 开关 "),f("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),a[5]||(a[5]=f("p",null,"支持尺寸、禁用、加载、颜色与文案自定义，并提供变更前钩子。",-1)),a[6]||(a[6]=f("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),f("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(d(t(b),null,null,512),[[k,s.value]]),d(r,null,{default:i(()=>[d(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:t(T)},m({_:2},[n.value?{name:"vue",fn:i(()=>[d(t(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=f("h2",{id:"尺寸-禁用-加载",tabindex:"-1"},[c("尺寸/禁用/加载 "),f("a",{class:"header-anchor",href:"#尺寸-禁用-加载","aria-label":'Permalink to "尺寸/禁用/加载"'},"​")],-1)),u(d(t(b),null,null,512),[[k,s.value]]),d(r,null,{default:i(()=>[d(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{s.value=!1}),vueCode:t(x)},m({_:2},[o.value?{name:"vue",fn:i(()=>[d(t(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=f("h2",{id:"自定义颜色与宽度",tabindex:"-1"},[c("自定义颜色与宽度 "),f("a",{class:"header-anchor",href:"#自定义颜色与宽度","aria-label":'Permalink to "自定义颜色与宽度"'},"​")],-1)),u(d(t(b),null,null,512),[[k,s.value]]),d(r,null,{default:i(()=>[d(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{s.value=!1}),vueCode:t(W)},m({_:2},[l.value?{name:"vue",fn:i(()=>[d(t(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[9]||(a[9]=y("",2)),d(E,{modelValue:e.s1,"onUpdate:modelValue":a[3]||(a[3]=w=>e.s1=w),beforeChange:e.before},null,8,["modelValue","beforeChange"]),a[10]||(a[10]=y("",9))])}}}),q=C(L,[["__scopeId","data-v-af1fc5d1"]]);export{U as __pageData,q as default};
