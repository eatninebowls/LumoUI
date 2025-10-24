const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/position.Cduf3j6i.js","assets/chunks/theme.Dsv0trK8.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/basic.Bc4XxB3A.js"])))=>i.map(i=>d[i]);
import{D as p,v as h,aq as u,p as k,B as y,c as _,o as T,j as e,a1 as b,G as o,a3 as w,a as s,a2 as m,k as a,w as n,ar as g}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.Dsv0trK8.js";import{L as f,N as v}from"./chunks/index.uFE-mFVl.js";const x=`<template>\r
  <div class="grid grid-cols-3 gap-4">\r
    <button\r
      v-for="pos in positions"\r
      :key="pos"\r
      class="border rounded px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"\r
      @click="show(pos)"\r
    >\r
      {{ pos }}\r
    </button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useToast } from '../../../src/composables/useToast'\r
const { toast } = useToast()\r
\r
const positions = [\r
  'top-left',\r
  'top-center',\r
  'top-right',\r
  'bottom-left',\r
  'bottom-right'\r
]\r
\r
const show = (pos: string) => {\r
  toast.show({\r
    message: \`当前位置：\${pos}\`,\r
    type: 'info',\r
    position: pos as any\r
  })\r
}\r
<\/script>\r
`,P=`<template>\r
  <div class="flex flex-wrap gap-3">\r
    <button\r
      v-for="item in types"\r
      :key="item.type"\r
      class="px-3 py-1 rounded text-white text-sm"\r
      :class="item.color"\r
      @click="item.fn(item.label + ' 提示')"\r
    >\r
      {{ item.label }}\r
    </button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useToast } from '../../../src/composables/useToast'\r
const { success, error, warning, info } = useToast()\r
\r
const types = [\r
  { type: 'success', label: '成功', fn: success, color: 'bg-green-500 hover:bg-green-600' },\r
  { type: 'error', label: '错误', fn: error, color: 'bg-red-500 hover:bg-red-600' },\r
  { type: 'warning', label: '警告', fn: warning, color: 'bg-yellow-500 hover:bg-yellow-600' },\r
  { type: 'info', label: '信息', fn: info, color: 'bg-blue-500 hover:bg-blue-600' }\r
]\r
<\/script>`,C=JSON.parse('{"title":"Toast 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md","lastUpdated":1760685628000}'),D={name:"components/toast.md"},E=Object.assign(D,{setup(A){const i=p();h(async()=>{i.value=(await u(async()=>{const{default:d}=await import("./chunks/position.Cduf3j6i.js");return{default:d}},__vite__mapDeps([0,1,2]))).default});const r=k(!0),l=p();return h(async()=>{l.value=(await u(async()=>{const{default:d}=await import("./chunks/basic.Bc4XxB3A.js");return{default:d}},__vite__mapDeps([3,1,2]))).default}),(d,t)=>{const c=y("ClientOnly");return T(),_("div",null,[t[2]||(t[2]=e("h1",{id:"toast-消息提示",tabindex:"-1"},[s("Toast 消息提示 "),e("a",{class:"header-anchor",href:"#toast-消息提示","aria-label":'Permalink to "Toast 消息提示"'},"​")],-1)),t[3]||(t[3]=e("p",null,[s("支持四种类型、五种位置、自动/手动关闭，建议通过 "),e("code",null,"useToast()"),s(" 使用。")],-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),b(o(a(f),null,null,512),[[m,r.value]]),o(c,null,{default:n(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{r.value=!1}),vueCode:a(P)},g({_:2},[l.value?{name:"vue",fn:n(()=>[o(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"不同方向展示",tabindex:"-1"},[s("不同方向展示 "),e("a",{class:"header-anchor",href:"#不同方向展示","aria-label":'Permalink to "不同方向展示"'},"​")],-1)),b(o(a(f),null,null,512),[[m,r.value]]),o(c,null,{default:n(()=>[o(a(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{r.value=!1}),vueCode:a(x)},g({_:2},[i.value?{name:"vue",fn:n(()=>[o(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=w('<p>``</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props-组件" tabindex="-1">Props（组件） <a class="header-anchor" href="#props-组件" aria-label="Permalink to &quot;Props（组件）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39;</code></td><td><code>&#39;info&#39;</code></td><td>消息类型</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>标题</td></tr><tr><td><code>message</code></td><td><code>string</code></td><td>必填</td><td>内容</td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td><code>3000</code></td><td>自动关闭毫秒；<code>0</code> 不自动</td></tr><tr><td><code>position</code></td><td><code>&#39;top-right&#39; | &#39;top-left&#39; | &#39;bottom-right&#39; | &#39;bottom-left&#39; | &#39;top-center&#39;</code></td><td><code>&#39;top-right&#39;</code></td><td>位置</td></tr><tr><td><code>closable</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否显示关闭按钮</td></tr></tbody></table><h3 id="events-组件" tabindex="-1">Events（组件） <a class="header-anchor" href="#events-组件" aria-label="Permalink to &quot;Events（组件）&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>close</code></td><td><code>void</code></td><td>关闭时触发</td></tr></tbody></table><h3 id="usetoast-方法" tabindex="-1">useToast 方法 <a class="header-anchor" href="#usetoast-方法" aria-label="Permalink to &quot;useToast 方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>签名</th><th>说明</th></tr></thead><tbody><tr><td><code>show</code></td><td><code>(options: ToastProps) =&gt; string</code></td><td>显示并返回 id</td></tr><tr><td><code>remove</code></td><td><code>(id: string) =&gt; void</code></td><td>根据 id 移除</td></tr><tr><td><code>success</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷成功</td></tr><tr><td><code>error</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷错误</td></tr><tr><td><code>warning</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷警告</td></tr><tr><td><code>info</code></td><td><code>(message: string, options?: Partial&lt;ToastProps&gt;)</code></td><td>快捷信息</td></tr></tbody></table><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useToast } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lumoui&#39;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lumoui/styles/index.css&#39;</span></span></code></pre></div>',10))])}}});export{C as __pageData,E as default};
