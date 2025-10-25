const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/hide-zero.IuaPLYoV.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/Color.Bqh5ruNr.js","assets/chunks/point.Hkfz9EpR.js","assets/chunks/basic.DLHpYBX5.js"])))=>i.map(i=>d[i]);
import{_,D as r,v,aq as u,p as k,B as w,c as x,o as D,j as t,a1 as c,G as a,a3 as Z,a as n,a2 as h,k as d,w as s,ar as m}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as f,N as p}from"./chunks/index.uFE-mFVl.js";const W=`<template>
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
</template>`,C=`<template>
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

</template>`,q=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md","lastUpdated":1761380880000}'),V={name:"components/badge.md"},L=Object.assign(V,{setup(S){const b=r();v(async()=>{b.value=(await u(async()=>{const{default:o}=await import("./chunks/hide-zero.IuaPLYoV.js");return{default:o}},__vite__mapDeps([0,1]))).default});const g=r();v(async()=>{g.value=(await u(async()=>{const{default:o}=await import("./chunks/Color.Bqh5ruNr.js");return{default:o}},__vite__mapDeps([2,1]))).default});const y=r();v(async()=>{y.value=(await u(async()=>{const{default:o}=await import("./chunks/point.Hkfz9EpR.js");return{default:o}},__vite__mapDeps([3,1]))).default});const l=k(!0),B=r();return v(async()=>{B.value=(await u(async()=>{const{default:o}=await import("./chunks/basic.DLHpYBX5.js");return{default:o}},__vite__mapDeps([4,1]))).default}),(o,e)=>{const i=w("ClientOnly");return D(),x("div",null,[e[4]||(e[4]=t("h1",{id:"badge-徽标",tabindex:"-1"},[n("Badge 徽标 "),t("a",{class:"header-anchor",href:"#badge-徽标","aria-label":'Permalink to "Badge 徽标"'},"​")],-1)),e[5]||(e[5]=t("p",null,"用于展示数字、状态点或自定义颜色的标记，支持最大值、隐藏、仅点样式等。",-1)),e[6]||(e[6]=t("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(a(d(f),null,null,512),[[h,l.value]]),a(i,null,{default:s(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:d(A)},m({_:2},[B.value?{name:"vue",fn:s(()=>[a(d(B))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=t("h2",{id:"仅点样式",tabindex:"-1"},[n("仅点样式 "),t("a",{class:"header-anchor",href:"#仅点样式","aria-label":'Permalink to "仅点样式"'},"​")],-1)),c(a(d(f),null,null,512),[[h,l.value]]),a(i,null,{default:s(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:d(T)},m({_:2},[y.value?{name:"vue",fn:s(()=>[a(d(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=t("h2",{id:"自定义颜色",tabindex:"-1"},[n("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),c(a(d(f),null,null,512),[[h,l.value]]),a(i,null,{default:s(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:d(C)},m({_:2},[g.value?{name:"vue",fn:s(()=>[a(d(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"隐藏与-0-值",tabindex:"-1"},[n("隐藏与 0 值 "),t("a",{class:"header-anchor",href:"#隐藏与-0-值","aria-label":'Permalink to "隐藏与 0 值"'},"​")],-1)),c(a(d(f),null,null,512),[[h,l.value]]),a(i,null,{default:s(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:d(W)},m({_:2},[b.value?{name:"vue",fn:s(()=>[a(d(b))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=Z("",7))])}}}),P=_(L,[["__scopeId","data-v-79570ed9"]]);export{q as __pageData,P as default};
