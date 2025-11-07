const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/hide-zero.Pj7z0uRb.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/Color.EjvtomPG.js","assets/chunks/point.CuvyKV2K.js","assets/chunks/basic.5ihnWizK.js"])))=>i.map(i=>d[i]);
import{_,D as r,v,aq as f,p as k,C as w,c as x,o as D,j as d,a1 as u,G as e,a3 as Z,a as n,a2 as c,k as t,w as s,ar as h}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as m,N as p}from"./chunks/index.DVqUTNst.js";const C=`<template>
  <div class="flex flex-wrap gap-6">
    <LumoBadge :value="0" :showZero="false">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐藏 0</div>
    </LumoBadge>
    <LumoBadge :value="0" :showZero="true">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">显示 0</div>
    </LumoBadge>
    <LumoBadge :value="3" :hidden="true">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐非0</div>
    </LumoBadge>
  </div>
</template>`,W=`<template>
  <div class="flex flex-wrap gap-6">
    <LumoBadge :value="5" color="#fff" backgroundColor="#fb7185">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">红色</div>
    </LumoBadge>
    <LumoBadge :value="8" color="#fff" backgroundColor="#22c55e">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">绿色</div>
    </LumoBadge>
  </div>

</template>`,T=`<template>
  <div class="flex flex-wrap gap-6">
    <LumoBadge isDot>
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">在线</div>
    </LumoBadge>
    <LumoBadge isDot type="success">
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">成功</div>
    </LumoBadge>
  </div>
</template>`,A=`<template>
    <div class="flex flex-wrap gap-6">
      <LumoBadge :value="1">
       <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">消息</div>
      </LumoBadge>
      <LumoBadge :value="99">
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">通知</div>
      </LumoBadge>
      <LumoBadge :value="100" :max="99">
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">上限</div>
      </LumoBadge>
    </div>

</template>`,q=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md","lastUpdated":1762500791000}'),V={name:"components/badge.md"},L=Object.assign(V,{setup(S){const b=r();v(async()=>{b.value=(await f(async()=>{const{default:o}=await import("./chunks/hide-zero.Pj7z0uRb.js");return{default:o}},__vite__mapDeps([0,1]))).default});const g=r();v(async()=>{g.value=(await f(async()=>{const{default:o}=await import("./chunks/Color.EjvtomPG.js");return{default:o}},__vite__mapDeps([2,1]))).default});const y=r();v(async()=>{y.value=(await f(async()=>{const{default:o}=await import("./chunks/point.CuvyKV2K.js");return{default:o}},__vite__mapDeps([3,1]))).default});const l=k(!0),B=r();return v(async()=>{B.value=(await f(async()=>{const{default:o}=await import("./chunks/basic.5ihnWizK.js");return{default:o}},__vite__mapDeps([4,1]))).default}),(o,a)=>{const i=w("ClientOnly");return D(),x("div",null,[a[4]||(a[4]=d("h1",{id:"badge-徽标",tabindex:"-1"},[n("Badge 徽标 "),d("a",{class:"header-anchor",href:"#badge-徽标","aria-label":'Permalink to "Badge 徽标"'},"​")],-1)),a[5]||(a[5]=d("p",null,"用于展示数字、状态点或自定义颜色的标记，支持最大值、隐藏、仅点样式等。",-1)),a[6]||(a[6]=d("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(e(t(m),null,null,512),[[c,l.value]]),e(i,null,{default:s(()=>[e(t(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[0]||(a[0]=()=>{l.value=!1}),vueCode:t(A)},h({_:2},[B.value?{name:"vue",fn:s(()=>[e(t(B))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[7]||(a[7]=d("h2",{id:"仅点样式",tabindex:"-1"},[n("仅点样式 "),d("a",{class:"header-anchor",href:"#仅点样式","aria-label":'Permalink to "仅点样式"'},"​")],-1)),u(e(t(m),null,null,512),[[c,l.value]]),e(i,null,{default:s(()=>[e(t(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[1]||(a[1]=()=>{l.value=!1}),vueCode:t(T)},h({_:2},[y.value?{name:"vue",fn:s(()=>[e(t(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[8]||(a[8]=d("h2",{id:"自定义颜色",tabindex:"-1"},[n("自定义颜色 "),d("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),u(e(t(m),null,null,512),[[c,l.value]]),e(i,null,{default:s(()=>[e(t(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[2]||(a[2]=()=>{l.value=!1}),vueCode:t(W)},h({_:2},[g.value?{name:"vue",fn:s(()=>[e(t(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[9]||(a[9]=d("h2",{id:"隐藏与-0-值",tabindex:"-1"},[n("隐藏与 0 值 "),d("a",{class:"header-anchor",href:"#隐藏与-0-值","aria-label":'Permalink to "隐藏与 0 值"'},"​")],-1)),u(e(t(m),null,null,512),[[c,l.value]]),e(i,null,{default:s(()=>[e(t(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:a[3]||(a[3]=()=>{l.value=!1}),vueCode:t(C)},h({_:2},[b.value?{name:"vue",fn:s(()=>[e(t(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),a[10]||(a[10]=Z("",7))])}}}),P=_(L,[["__scopeId","data-v-4a402fe3"]]);export{q as __pageData,P as default};
