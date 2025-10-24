const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/hide-zero.IuaPLYoV.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/Color.Bqh5ruNr.js","assets/chunks/point.Hkfz9EpR.js","assets/chunks/basic.DLHpYBX5.js"])))=>i.map(i=>d[i]);
import{_ as y,D as i,v,aq as u,p as B,B as w,c as x,o as L,j as t,a1 as c,G as d,a3 as D,a as s,a2 as m,k as a,w as r,ar as h}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as f,N as b}from"./chunks/index.uFE-mFVl.js";const W=`<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoBadge :value="0" :showZero="false">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐藏 0</div>\r
    </LumoBadge>\r
    <LumoBadge :value="0" :showZero="true">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">显示 0</div>\r
    </LumoBadge>\r
    <LumoBadge :value="3" :hidden="true">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">隐非0</div>\r
    </LumoBadge>\r
  </div>\r
</template>`,A=`<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoBadge :value="5" color="#fff" backgroundColor="#fb7185">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">红色</div>\r
    </LumoBadge>\r
    <LumoBadge :value="8" color="#fff" backgroundColor="#22c55e">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">绿色</div>\r
    </LumoBadge>\r
  </div>\r
\r
</template>`,C=`<template>\r
  <div class="flex flex-wrap gap-6">\r
    <LumoBadge isDot>\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">在线</div>\r
    </LumoBadge>\r
    <LumoBadge isDot type="success">\r
      <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">成功</div>\r
    </LumoBadge>\r
  </div>\r
</template>`,T=`<template>\r
    <div class="flex flex-wrap gap-6">\r
      <LumoBadge :value="1">\r
       <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">消息</div>\r
      </LumoBadge>\r
      <LumoBadge :value="99">\r
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">通知</div>\r
      </LumoBadge>\r
      <LumoBadge :value="100" :max="99">\r
        <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">上限</div>\r
      </LumoBadge>\r
    </div>\r
\r
</template>`,F=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge.md","filePath":"components/badge.md","lastUpdated":1760685628000}'),V={name:"components/badge.md"},S=Object.assign(V,{setup(U){const p=i();v(async()=>{p.value=(await u(async()=>{const{default:o}=await import("./chunks/hide-zero.IuaPLYoV.js");return{default:o}},__vite__mapDeps([0,1]))).default});const g=i();v(async()=>{g.value=(await u(async()=>{const{default:o}=await import("./chunks/Color.Bqh5ruNr.js");return{default:o}},__vite__mapDeps([2,1]))).default});const k=i();v(async()=>{k.value=(await u(async()=>{const{default:o}=await import("./chunks/point.Hkfz9EpR.js");return{default:o}},__vite__mapDeps([3,1]))).default});const l=B(!0),_=i();return v(async()=>{_.value=(await u(async()=>{const{default:o}=await import("./chunks/basic.DLHpYBX5.js");return{default:o}},__vite__mapDeps([4,1]))).default}),(o,e)=>{const n=w("ClientOnly");return L(),x("div",null,[e[4]||(e[4]=t("h1",{id:"badge-徽标",tabindex:"-1"},[s("Badge 徽标 "),t("a",{class:"header-anchor",href:"#badge-徽标","aria-label":'Permalink to "Badge 徽标"'},"​")],-1)),e[5]||(e[5]=t("p",null,"用于展示数字、状态点或自定义颜色的标记，支持最大值、隐藏、仅点样式等。",-1)),e[6]||(e[6]=t("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(d(a(f),null,null,512),[[m,l.value]]),d(n,null,{default:r(()=>[d(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:a(T)},h({_:2},[_.value?{name:"vue",fn:r(()=>[d(a(_))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=t("h2",{id:"仅点样式",tabindex:"-1"},[s("仅点样式 "),t("a",{class:"header-anchor",href:"#仅点样式","aria-label":'Permalink to "仅点样式"'},"​")],-1)),c(d(a(f),null,null,512),[[m,l.value]]),d(n,null,{default:r(()=>[d(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:a(C)},h({_:2},[k.value?{name:"vue",fn:r(()=>[d(a(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=t("h2",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色","aria-label":'Permalink to "自定义颜色"'},"​")],-1)),c(d(a(f),null,null,512),[[m,l.value]]),d(n,null,{default:r(()=>[d(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:a(A)},h({_:2},[g.value?{name:"vue",fn:r(()=>[d(a(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"隐藏与-0-值",tabindex:"-1"},[s("隐藏与 0 值 "),t("a",{class:"header-anchor",href:"#隐藏与-0-值","aria-label":'Permalink to "隐藏与 0 值"'},"​")],-1)),c(d(a(f),null,null,512),[[m,l.value]]),d(n,null,{default:r(()=>[d(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:a(W)},h({_:2},[p.value?{name:"vue",fn:r(()=>[d(a(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[10]||(e[10]=D("",7))])}}}),N=y(S,[["__scopeId","data-v-946de9d8"]]);export{F as __pageData,N as default};
