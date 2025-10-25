const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/costomize.Cfh-Znft.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/more.C3KZwY_x.js","assets/chunks/basic.KZE7x5-0.js"])))=>i.map(i=>d[i]);
import{_ as T,D as c,v as p,aq as u,p as C,B as y,c as A,o as B,j as s,a1 as k,G as t,a3 as _,a as o,a2 as m,k as e,w as l,ar as f}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as b,N as g}from"./chunks/index.uFE-mFVl.js";const D=`<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
<\/script>

<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" activeColor="#22c55e" inactiveColor="#d1d5db" :width="60" />
  </div>
</template>
`,S=`<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
<\/script>
<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" size="sm" />
    <LumoSwitch v-model="s1" size="md" />
    <LumoSwitch v-model="s1" size="lg" />
    <LumoSwitch v-model="s1" disabled />
    <LumoSwitch v-model="s1" loading />
  </div>
</template>
`,V=`<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
<\/script>

<template>
  <div class="flex flex-wrap gap-6">
    <LumoSwitch v-model="s1" />
    <LumoSwitch v-model="s2" activeText="开启" inactiveText="关闭" />
  </div>
</template>`,X=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md","lastUpdated":1761380880000}'),F={name:"components/switch.md"},x=Object.assign(F,{setup(W){const n=c();p(async()=>{n.value=(await u(async()=>{const{default:d}=await import("./chunks/costomize.Cfh-Znft.js");return{default:d}},__vite__mapDeps([0,1]))).default});const v=c();p(async()=>{v.value=(await u(async()=>{const{default:d}=await import("./chunks/more.C3KZwY_x.js");return{default:d}},__vite__mapDeps([2,1]))).default});const i=C(!0),r=c();return p(async()=>{r.value=(await u(async()=>{const{default:d}=await import("./chunks/basic.KZE7x5-0.js");return{default:d}},__vite__mapDeps([3,1]))).default}),(d,a)=>{const h=y("ClientOnly"),E=y("LumoSwitch");return B(),A("div",null,[a[4]||(a[4]=s("h1",{id:"switch-开关",tabindex:"-1"},[o("Switch 开关 "),s("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),a[5]||(a[5]=s("p",null,"支持尺寸、禁用、加载、颜色与文案自定义，并提供变更前钩子。",-1)),a[6]||(a[6]=s("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),k(t(e(b),null,null,512),[[m,i.value]]),t(h,null,{default:l(()=>[t(e(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{i.value=!1}),vueCode:e(V)},f({_:2},[r.value?{name:"vue",fn:l(()=>[t(e(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=s("h2",{id:"尺寸-禁用-加载",tabindex:"-1"},[o("尺寸/禁用/加载 "),s("a",{class:"header-anchor",href:"#尺寸-禁用-加载","aria-label":'Permalink to "尺寸/禁用/加载"'},"​")],-1)),k(t(e(b),null,null,512),[[m,i.value]]),t(h,null,{default:l(()=>[t(e(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{i.value=!1}),vueCode:e(S)},f({_:2},[v.value?{name:"vue",fn:l(()=>[t(e(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=s("h2",{id:"自定义颜色与宽度",tabindex:"-1"},[o("自定义颜色与宽度 "),s("a",{class:"header-anchor",href:"#自定义颜色与宽度","aria-label":'Permalink to "自定义颜色与宽度"'},"​")],-1)),k(t(e(b),null,null,512),[[m,i.value]]),t(h,null,{default:l(()=>[t(e(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{i.value=!1}),vueCode:e(D)},f({_:2},[n.value?{name:"vue",fn:l(()=>[t(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[9]||(a[9]=_("",2)),t(E,{modelValue:d.s1,"onUpdate:modelValue":a[3]||(a[3]=w=>d.s1=w),beforeChange:d.before},null,8,["modelValue","beforeChange"]),a[10]||(a[10]=_("",9))])}}}),q=T(x,[["__scopeId","data-v-8725924e"]]);export{X as __pageData,q as default};
