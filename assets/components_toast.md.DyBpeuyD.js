const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/position.1BkY0GwM.js","assets/chunks/theme.D_SsfZ-D.js","assets/chunks/framework.DOx3S1oU.js","assets/chunks/basic.bCASek6V.js"])))=>i.map(i=>d[i]);
import{D as p,v as h,aq as u,p as y,C as k,c as _,o as T,j as e,a1 as b,G as o,a3 as w,a as d,a2 as m,k as a,w as r,ar as g}from"./chunks/framework.DOx3S1oU.js";import"./chunks/theme.D_SsfZ-D.js";import{L as f,N as v}from"./chunks/index.DVqUTNst.js";const P=`<template>
  <div class="grid grid-cols-3 gap-4">
    <LumoButton
      v-for="pos in positions"
      :key="pos"
      @click="show(pos)"
    >
      {{ pos }}
    </LumoButton>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { toast } = useToast()

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-right'
]

const show = (pos: string) => {
  toast.show({
    message: \`当前位置：\${pos}\`,
    type: 'info',
    position: pos as any
  })
}
<\/script>
`,B=`<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="item in types"
      :key="item.type"
      class="px-3 py-1 rounded text-white text-sm"
      :class="item.color"
      @click="item.fn(item.label + ' 提示')"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../../../src/composables/useToast'
const { success, error, warning, info } = useToast()

const types = [
  { type: 'success', label: '成功', fn: success, color: 'bg-green-500 hover:bg-green-600' },
  { type: 'error', label: '错误', fn: error, color: 'bg-red-500 hover:bg-red-600' },
  { type: 'warning', label: '警告', fn: warning, color: 'bg-yellow-500 hover:bg-yellow-600' },
  { type: 'info', label: '信息', fn: info, color: 'bg-blue-500 hover:bg-blue-600' }
]
<\/script>`,V=JSON.parse('{"title":"Toast 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md","lastUpdated":1762500791000}'),C={name:"components/toast.md"},q=Object.assign(C,{setup(x){const l=p();h(async()=>{l.value=(await u(async()=>{const{default:n}=await import("./chunks/position.1BkY0GwM.js");return{default:n}},__vite__mapDeps([0,1,2]))).default});const s=y(!0),i=p();return h(async()=>{i.value=(await u(async()=>{const{default:n}=await import("./chunks/basic.bCASek6V.js");return{default:n}},__vite__mapDeps([3,1,2]))).default}),(n,t)=>{const c=k("ClientOnly");return T(),_("div",null,[t[2]||(t[2]=e("h1",{id:"toast-消息提示",tabindex:"-1"},[d("Toast 消息提示 "),e("a",{class:"header-anchor",href:"#toast-消息提示","aria-label":'Permalink to "Toast 消息提示"'},"​")],-1)),t[3]||(t[3]=e("p",null,[d("支持四种类型、五种位置、自动/手动关闭，建议通过 "),e("code",null,"useToast()"),d(" 使用。")],-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(o(a(f),null,null,512),[[m,s.value]]),o(c,null,{default:r(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:a(B)},g({_:2},[i.value?{name:"vue",fn:r(()=>[o(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"不同方向展示",tabindex:"-1"},[d("不同方向展示 "),e("a",{class:"header-anchor",href:"#不同方向展示","aria-label":'Permalink to "不同方向展示"'},"​")],-1)),b(o(a(f),null,null,512),[[m,s.value]]),o(c,null,{default:r(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{s.value=!1}),vueCode:a(P)},g({_:2},[l.value?{name:"vue",fn:r(()=>[o(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=w('<p>``</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props-组件" tabindex="-1">Props（组件） <a class="header-anchor" href="#props-组件" aria-label="Permalink to &quot;Props（组件）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39;</code></td><td><code>&#39;info&#39;</code></td><td>消息类型</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>标题</td></tr><tr><td><code>message</code></td><td><code>string</code></td><td>必填</td><td>内容</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td><code>3000</code></td><td>自动关闭毫秒；<code>0</code> 不自动</td></tr><tr><td><code>position</code></td><td><code>&#39;top-right&#39; | &#39;top-left&#39; | &#39;bottom-right&#39; | &#39;bottom-left&#39; | &#39;top-center&#39;</code></td><td><code>&#39;top-right&#39;</code></td><td>位置</td></tr><tr><td><code>closable</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示关闭按钮</td></tr></tbody></table><h3 id="events-组件" tabindex="-1">Events（组件） <a class="header-anchor" href="#events-组件" aria-label="Permalink to &quot;Events（组件）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>close</code></td><td><code>void</code></td><td>关闭时触发</td></tr></tbody></table><h3 id="usetoast-方法" tabindex="-1">useToast 方法 <a class="header-anchor" href="#usetoast-方法" aria-label="Permalink to &quot;useToast 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>签名</th><th>说明</th></tr></thead><tbody><tr><td><code>show</code></td><td><code>(options: ToastProps) =&gt; string</code></td><td>显示并返回 id</td></tr><tr><td><code>remove</code></td><td><code>(id: string) =&gt; void</code></td><td>根据 id 移除</td></tr><tr><td><code>success</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷成功</td></tr><tr><td><code>error</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷错误</td></tr><tr><td><code>warning</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷警告</td></tr><tr><td><code>info</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷信息</td></tr></tbody></table><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useToast } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lumoui&#39;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lumoui/styles/index.css&#39;</span></span></code></pre></div>',10))])}}});export{V as __pageData,q as default};
