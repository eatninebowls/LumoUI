const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/costomize.FnH61uV9.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/more.lAQ2Yh3G.js","assets/chunks/basic.DqKc_Adb.js"])))=>i.map(i=>d[i]);
import{_ as T,D as h,v as c,aq as p,p as C,C as y,c as A,o as D,j as e,a1 as u,G as t,a3 as _,a as l,a2 as k,k as b,w as i,ar as m}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as f,N as g}from"./chunks/index.DVqUTNst.js";const B=`<script setup lang="ts">
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
</template>`,X=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md","lastUpdated":1762500791000}'),F={name:"components/switch.md"},x=Object.assign(F,{setup(W){const o=h();c(async()=>{o.value=(await p(async()=>{const{default:d}=await import("./chunks/costomize.FnH61uV9.js");return{default:d}},__vite__mapDeps([0,1]))).default});const n=h();c(async()=>{n.value=(await p(async()=>{const{default:d}=await import("./chunks/more.lAQ2Yh3G.js");return{default:d}},__vite__mapDeps([2,1]))).default});const s=C(!0),v=h();return c(async()=>{v.value=(await p(async()=>{const{default:d}=await import("./chunks/basic.DqKc_Adb.js");return{default:d}},__vite__mapDeps([3,1]))).default}),(d,a)=>{const r=y("ClientOnly"),E=y("LumoSwitch");return D(),A("div",null,[a[4]||(a[4]=e("h1",{id:"switch-开关",tabindex:"-1"},[l("Switch 开关 "),e("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),a[5]||(a[5]=e("p",null,"支持尺寸、禁用、加载、颜色与文案自定义，并提供变更前钩子。",-1)),a[6]||(a[6]=e("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(t(b(f),null,null,512),[[k,s.value]]),t(r,null,{default:i(()=>[t(b(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{s.value=!1}),vueCode:b(V)},m({_:2},[v.value?{name:"vue",fn:i(()=>[t(b(v))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=e("h2",{id:"尺寸-禁用-加载",tabindex:"-1"},[l("尺寸/禁用/加载 "),e("a",{class:"header-anchor",href:"#尺寸-禁用-加载","aria-label":'Permalink to "尺寸/禁用/加载"'},"​")],-1)),u(t(b(f),null,null,512),[[k,s.value]]),t(r,null,{default:i(()=>[t(b(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{s.value=!1}),vueCode:b(S)},m({_:2},[n.value?{name:"vue",fn:i(()=>[t(b(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=e("h2",{id:"自定义颜色与宽度",tabindex:"-1"},[l("自定义颜色与宽度 "),e("a",{class:"header-anchor",href:"#自定义颜色与宽度","aria-label":'Permalink to "自定义颜色与宽度"'},"​")],-1)),u(t(b(f),null,null,512),[[k,s.value]]),t(r,null,{default:i(()=>[t(b(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{s.value=!1}),vueCode:b(B)},m({_:2},[o.value?{name:"vue",fn:i(()=>[t(b(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[9]||(a[9]=_("",2)),t(E,{modelValue:d.s1,"onUpdate:modelValue":a[3]||(a[3]=w=>d.s1=w),beforeChange:d.before},null,8,["modelValue","beforeChange"]),a[10]||(a[10]=_("",9))])}}}),q=T(x,[["__scopeId","data-v-14611bbb"]]);export{X as __pageData,q as default};
