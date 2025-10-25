const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/type.FpWWePFJ.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/state.5h2ZiLvG.js","assets/chunks/size-isRound.uSOTDuiN.js","assets/chunks/basic.qPq05yAp.js"])))=>i.map(i=>d[i]);
import{_ as B,D as v,v as f,aq as r,p as g,B as T,c as V,o as D,j as d,a1 as i,G as t,a3 as C,a as n,a2 as u,k as e,w as s,ar as c}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as p,N as h}from"./chunks/index.uFE-mFVl.js";const w=`<template>  
  <div class="flex flex-col gap-3">
    <LumoInput contentType="password" placeHolder="密码" />
    <LumoInput contentType="email" placeHolder="邮箱" />
    <LumoInput :searchable="true" placeHolder="搜索..." />
  </div>
</template>`,x=`
<template>
  <div class="flex flex-col gap-3">
    <LumoInput state="normal" placeHolder="正常" />
    <LumoInput state="wrong" placeHolder="错误" />
    <LumoInput state="success" placeHolder="成功" />
  </div>
</template>`,A=`<template>
  <div class="flex flex-col gap-3">
    <LumoInput size="sm" placeHolder="小"></LumoInput>
    <LumoInput size="md" placeHolder="中" :isRound="true"></LumoInput>
    <LumoInput size="lg" placeHolder="大"></LumoInput>
  </div>
</template>`,I=`<template>
  <div class="flex flex-wrap gap-3">
    <LumoInput v-model="text" placeHolder="请输入内容" />
  </div>
</template>  
<script setup lang="ts">
  import { ref } from 'vue'
  const text = ref('')
<\/script>`,P=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md","lastUpdated":1761380880000}'),W={name:"components/input.md"},Z=Object.assign(W,{setup(E){const m=v();f(async()=>{m.value=(await r(async()=>{const{default:o}=await import("./chunks/type.FpWWePFJ.js");return{default:o}},__vite__mapDeps([0,1]))).default});const y=v();f(async()=>{y.value=(await r(async()=>{const{default:o}=await import("./chunks/state.5h2ZiLvG.js");return{default:o}},__vite__mapDeps([2,1]))).default});const _=v();f(async()=>{_.value=(await r(async()=>{const{default:o}=await import("./chunks/size-isRound.uSOTDuiN.js");return{default:o}},__vite__mapDeps([3,1]))).default});const l=g(!0),k=v();return f(async()=>{k.value=(await r(async()=>{const{default:o}=await import("./chunks/basic.qPq05yAp.js");return{default:o}},__vite__mapDeps([4,1]))).default}),(o,a)=>{const b=T("ClientOnly");return D(),V("div",null,[a[4]||(a[4]=d("h1",{id:"input-输入框",tabindex:"-1"},[n("Input 输入框 "),d("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),a[5]||(a[5]=d("p",null,"支持三种状态、三种尺寸、禁用、圆角、搜索图标与多种输入类型。",-1)),a[6]||(a[6]=d("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),i(t(e(p),null,null,512),[[u,l.value]]),t(b,null,{default:s(()=>[t(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{l.value=!1}),vueCode:e(I)},c({_:2},[k.value?{name:"vue",fn:s(()=>[t(e(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=d("h2",{id:"尺寸与圆角",tabindex:"-1"},[n("尺寸与圆角 "),d("a",{class:"header-anchor",href:"#尺寸与圆角","aria-label":'Permalink to "尺寸与圆角"'},"​")],-1)),i(t(e(p),null,null,512),[[u,l.value]]),t(b,null,{default:s(()=>[t(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{l.value=!1}),vueCode:e(A)},c({_:2},[_.value?{name:"vue",fn:s(()=>[t(e(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=d("h2",{id:"状态",tabindex:"-1"},[n("状态 "),d("a",{class:"header-anchor",href:"#状态","aria-label":'Permalink to "状态"'},"​")],-1)),i(t(e(p),null,null,512),[[u,l.value]]),t(b,null,{default:s(()=>[t(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{l.value=!1}),vueCode:e(x)},c({_:2},[y.value?{name:"vue",fn:s(()=>[t(e(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[9]||(a[9]=d("h2",{id:"输入类型与搜索",tabindex:"-1"},[n("输入类型与搜索 "),d("a",{class:"header-anchor",href:"#输入类型与搜索","aria-label":'Permalink to "输入类型与搜索"'},"​")],-1)),i(t(e(p),null,null,512),[[u,l.value]]),t(b,null,{default:s(()=>[t(e(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[3]||(a[3]=()=>{l.value=!1}),vueCode:e(w)},c({_:2},[m.value?{name:"vue",fn:s(()=>[t(e(m))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[10]||(a[10]=C("",9))])}}}),q=B(Z,[["__scopeId","data-v-f33780ba"]]);export{P as __pageData,q as default};
