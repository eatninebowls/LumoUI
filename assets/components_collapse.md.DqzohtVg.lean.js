const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/admode.DUwmZdd_.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/basic.Cj1_nfvE.js"])))=>i.map(i=>d[i]);
import{D as p,v as u,aq as m,p as C,C as y,c as _,o as g,j as l,a1 as c,G as t,a3 as B,a as r,a2 as b,k as a,w as d,ar as v}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as f,N as k}from"./chunks/index.DVqUTNst.js";const D=`<script setup lang="ts">
import { ref } from 'vue'
const onlyOne = ref(['item2'])
<\/script>
<template>
<LumoCollapse v-model="onlyOne" :accordion="true">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三">内容三</LumoCollapseItem>
</LumoCollapse>  
</template>
`,L=`<template>
  <LumoCollapse v-model="active">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三" :disabled="true">禁用内容</LumoCollapseItem>
</LumoCollapse>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(['item1'])
<\/script>`,A=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1762500791000}'),x={name:"components/collapse.md"},P=Object.assign(x,{setup(I){const i=p();u(async()=>{i.value=(await m(async()=>{const{default:s}=await import("./chunks/admode.DUwmZdd_.js");return{default:s}},__vite__mapDeps([0,1]))).default});const o=C(!0),n=p();return u(async()=>{n.value=(await m(async()=>{const{default:s}=await import("./chunks/basic.Cj1_nfvE.js");return{default:s}},__vite__mapDeps([2,1]))).default}),(s,e)=>{const h=y("ClientOnly");return g(),_("div",null,[e[2]||(e[2]=l("h1",{id:"collapse-折叠面板",tabindex:"-1"},[r("Collapse 折叠面板 "),l("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[3]||(e[3]=l("p",null,"支持手风琴与多展开模式，提供面板禁用与过渡动画。",-1)),e[4]||(e[4]=l("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(t(a(f),null,null,512),[[b,o.value]]),t(h,null,{default:d(()=>[t(a(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(L)},v({_:2},[n.value?{name:"vue",fn:d(()=>[t(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=l("h2",{id:"手风琴模式",tabindex:"-1"},[r("手风琴模式 "),l("a",{class:"header-anchor",href:"#手风琴模式","aria-label":'Permalink to "手风琴模式"'},"​")],-1)),c(t(a(f),null,null,512),[[b,o.value]]),t(h,null,{default:d(()=>[t(a(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(D)},v({_:2},[i.value?{name:"vue",fn:d(()=>[t(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=B("",11))])}}});export{A as __pageData,P as default};
