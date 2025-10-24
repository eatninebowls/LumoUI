const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/admode.BxoA2Vj_.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/basic.rinzOZFH.js"])))=>i.map(i=>d[i]);
import{D as m,v as h,aq as c,p as C,B as _,c as y,o as L,j as l,a1 as u,G as t,a3 as g,a as n,a2 as b,k as a,w as d,ar as f}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as v,N as k}from"./chunks/index.uFE-mFVl.js";const w=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const onlyOne = ref(['item2'])\r
<\/script>\r
<template>\r
<LumoCollapse v-model="onlyOne" :accordion="true">\r
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>\r
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>\r
  <LumoCollapseItem name="item3" title="面板三">内容三</LumoCollapseItem>\r
</LumoCollapse>  \r
</template>\r
`,x=`<template>\r
  <LumoCollapse v-model="active">\r
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>\r
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>\r
  <LumoCollapseItem name="item3" title="面板三" :disabled="true">禁用内容</LumoCollapseItem>\r
</LumoCollapse>\r
</template>\r
<script setup lang="ts">\r
  import { ref } from 'vue'\r
  const active = ref(['item1'])\r
<\/script>`,B=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1760685628000}'),W={name:"components/collapse.md"},V=Object.assign(W,{setup(D){const r=m();h(async()=>{r.value=(await c(async()=>{const{default:s}=await import("./chunks/admode.BxoA2Vj_.js");return{default:s}},__vite__mapDeps([0,1]))).default});const o=C(!0),i=m();return h(async()=>{i.value=(await c(async()=>{const{default:s}=await import("./chunks/basic.rinzOZFH.js");return{default:s}},__vite__mapDeps([2,1]))).default}),(s,e)=>{const p=_("ClientOnly");return L(),y("div",null,[e[2]||(e[2]=l("h1",{id:"collapse-折叠面板",tabindex:"-1"},[n("Collapse 折叠面板 "),l("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[3]||(e[3]=l("p",null,"支持手风琴与多展开模式，提供面板禁用与过渡动画。",-1)),e[4]||(e[4]=l("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),u(t(a(v),null,null,512),[[b,o.value]]),t(p,null,{default:d(()=>[t(a(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(x)},f({_:2},[i.value?{name:"vue",fn:d(()=>[t(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=l("h2",{id:"手风琴模式",tabindex:"-1"},[n("手风琴模式 "),l("a",{class:"header-anchor",href:"#手风琴模式","aria-label":'Permalink to "手风琴模式"'},"​")],-1)),u(t(a(v),null,null,512),[[b,o.value]]),t(p,null,{default:d(()=>[t(a(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(w)},f({_:2},[r.value?{name:"vue",fn:d(()=>[t(a(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=g("",11))])}}});export{B as __pageData,V as default};
