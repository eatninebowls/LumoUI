const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/event.vH0X_9l3.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/more.BVjOKJu2.js","assets/chunks/basic.BOa5B55_.js"])))=>i.map(i=>d[i]);
import{D as u,v as h,aq as m,p as _,B as y,c as P,o as g,j as d,a1 as p,G as t,a3 as L,a as s,a2 as v,k as a,w as n,ar as f}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as k,N as T}from"./chunks/index.uFE-mFVl.js";const V=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const active = ref('tab1')\r
const onClick = (name:string) => console.log('tab-click', name)\r
const onRemove = (name:string) => console.log('tab-remove', name)\r
<\/script>\r
<template>\r
  <LumoTabs v-model="active" @tab-click="onClick" @tab-remove="onRemove">\r
    <LumoTabPane name="tab1" label="一">一</LumoTabPane>\r
    <LumoTabPane name="tab2" label="二" closable>二</LumoTabPane>\r
  </LumoTabs>\r
</template>\r
`,w=`<script setup lang="ts">\r
import { ref } from 'vue'\r
const active2 = ref('card1')\r
<\/script>\r
<template>\r
  <LumoTabs v-model="active2" type="card" position="top">\r
    <LumoTabPane name="card1" label="卡片一">内容一</LumoTabPane>\r
    <LumoTabPane name="card2" label="卡片二" lazy>首次激活时渲染</LumoTabPane>\r
  </LumoTabs>  \r
</template>\r
`,A=`  <script setup lang="ts">\r
import { ref } from 'vue'\r
const active = ref('tab1')\r
<\/script>\r
<template>\r
  <LumoTabs v-model="active" type="line" position="top">\r
    <LumoTabPane name="tab1" label="标签一">内容一</LumoTabPane>\r
    <LumoTabPane name="tab2" label="标签二" closable>内容二</LumoTabPane>\r
    <LumoTabPane name="tab3" label="标签三" disabled>禁用</LumoTabPane>\r
  </LumoTabs>\r
</template>`,E=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md","lastUpdated":1760685628000}'),D={name:"components/tabs.md"},q=Object.assign(D,{setup(W){const r=u();h(async()=>{r.value=(await m(async()=>{const{default:l}=await import("./chunks/event.vH0X_9l3.js");return{default:l}},__vite__mapDeps([0,1]))).default});const i=u();h(async()=>{i.value=(await m(async()=>{const{default:l}=await import("./chunks/more.BVjOKJu2.js");return{default:l}},__vite__mapDeps([2,1]))).default});const o=_(!0),c=u();return h(async()=>{c.value=(await m(async()=>{const{default:l}=await import("./chunks/basic.BOa5B55_.js");return{default:l}},__vite__mapDeps([3,1]))).default}),(l,e)=>{const b=y("ClientOnly");return g(),P("div",null,[e[3]||(e[3]=d("h1",{id:"tabs-标签页",tabindex:"-1"},[s("Tabs 标签页 "),d("a",{class:"header-anchor",href:"#tabs-标签页","aria-label":'Permalink to "Tabs 标签页"'},"​")],-1)),e[4]||(e[4]=d("p",null,"支持线与卡片两种样式、四种位置、禁用、关闭与新增事件，内容延迟渲染。",-1)),e[5]||(e[5]=d("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),d("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(t(a(k),null,null,512),[[v,o.value]]),t(b,null,{default:n(()=>[t(a(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(A)},f({_:2},[c.value?{name:"vue",fn:n(()=>[t(a(c))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=d("h2",{id:"卡片-位置-延迟渲染",tabindex:"-1"},[s("卡片/位置/延迟渲染 "),d("a",{class:"header-anchor",href:"#卡片-位置-延迟渲染","aria-label":'Permalink to "卡片/位置/延迟渲染"'},"​")],-1)),p(t(a(k),null,null,512),[[v,o.value]]),t(b,null,{default:n(()=>[t(a(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(w)},f({_:2},[i.value?{name:"vue",fn:n(()=>[t(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=d("h2",{id:"事件",tabindex:"-1"},[s("事件 "),d("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1)),p(t(a(k),null,null,512),[[v,o.value]]),t(b,null,{default:n(()=>[t(a(T),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:a(V)},f({_:2},[r.value?{name:"vue",fn:n(()=>[t(a(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=L("",11))])}}});export{E as __pageData,q as default};
