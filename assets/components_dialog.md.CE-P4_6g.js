const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/programmactic.CEbMn8ZO.js","assets/chunks/theme.DhIum_zL.js","assets/chunks/framework.CtrY3aSn.js","assets/chunks/closable.D9YgwTMq.js","assets/chunks/confirm.BkzzbS_I.js","assets/chunks/basic.byKVdvS8.js"])))=>i.map(i=>d[i]);
import{_,D as i,v as b,aq as v,p as w,B,c as D,o as T,j as e,a1 as r,G as a,a3 as W,a as n,a2 as u,k as d,w as l,ar as h}from"./chunks/framework.CtrY3aSn.js";import"./chunks/theme.DhIum_zL.js";import{L as m,N as p}from"./chunks/index.uFE-mFVl.js";const C=`<template>
  <div class="flex flex-wrap gap-3">
    <LumoButton
      @click="showAlert"
    >
      Alert 弹窗
    </LumoButton>

    <LumoButton
      @click="showAlertNoTitle"
    >
      无标题弹窗
    </LumoButton>

    <LumoButton 
      @click="showConfirm"
    >
      Confirm 确认框
    </LumoButton>
  </div>
</template>

<script setup lang="ts">
import { useDialog } from '../../../src/composables/useDialog'

const { alert, alertNoTitle, confirm } = useDialog()

const showAlert = async () => {
  await alert('保存成功', { title: '提示' })
}

const showAlertNoTitle = async () => {
  await alertNoTitle('操作成功')
}

const showConfirm = async () => {
  const ok = await confirm('确认要删除？')
  if (ok) alert('已删除', { title: '提示' })
}
<\/script>

<style scoped>
.btn {
  /* @apply text-white px-3 py-1 rounded text-sm transition; */
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  font-size: 0.875rem;
}
</style>
`,A=`<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
const testShow=()=>{
  show.value=!show.value
}
<\/script>
<template>
  <div class="flex flex-wrap gap-3">
    <LumoButton
      @click="testShow()"
    >
      显示弹窗
    </LumoButton>
  </div>
  <LumoDialog :visible="show" title="可点遮罩关闭" message="maskClosable = true（默认）" />
  <LumoDialog :visible="show" :maskClosable="false" title="不可点遮罩关闭" message="maskClosable = false" /> 
</template>`,V=`<script setup lang="ts">
import { ref } from 'vue'
const showConfirm = ref(false)
<\/script>

<template>
<LumoButton @click="showConfirm = !showConfirm">确认操作</LumoButton>
<LumoDialog
  v-model="showConfirm"
  type="confirm"
  title="确认"
  message="确定要继续吗？"
  showCancel
  confirmText="继续"
  cancelText="返回"
/>  
</template>
`,E=`<template>
  <LumoButton @click="show = true">打开对话框</LumoButton>
  <LumoDialog v-model="show" type="alert" title="提示" message="这是内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
<\/script>`,M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1761380880000}'),x={name:"components/dialog.md"},Z=Object.assign(x,{setup(L){const f=i();b(async()=>{f.value=(await v(async()=>{const{default:c}=await import("./chunks/programmactic.CEbMn8ZO.js");return{default:c}},__vite__mapDeps([0,1,2]))).default});const k=i();b(async()=>{k.value=(await v(async()=>{const{default:c}=await import("./chunks/closable.D9YgwTMq.js");return{default:c}},__vite__mapDeps([3,2]))).default});const y=i();b(async()=>{y.value=(await v(async()=>{const{default:c}=await import("./chunks/confirm.BkzzbS_I.js");return{default:c}},__vite__mapDeps([4,2]))).default});const o=w(!0),g=i();return b(async()=>{g.value=(await v(async()=>{const{default:c}=await import("./chunks/basic.byKVdvS8.js");return{default:c}},__vite__mapDeps([5,2]))).default}),(c,t)=>{const s=B("ClientOnly");return T(),D("div",null,[t[4]||(t[4]=e("h1",{id:"dialog-对话框",tabindex:"-1"},[n("Dialog 对话框 "),e("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),t[5]||(t[5]=e("p",null,"提供提示与确认两类对话框，支持遮罩关闭、标题显示、按钮文案自定义，以及程序化调用。",-1)),t[6]||(t[6]=e("h2",{id:"基础用法-v-model",tabindex:"-1"},[n("基础用法（v-model） "),e("a",{class:"header-anchor",href:"#基础用法-v-model","aria-label":'Permalink to "基础用法（v-model）"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(E)},h({_:2},[g.value?{name:"vue",fn:l(()=>[a(d(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"确认框",tabindex:"-1"},[n("确认框 "),e("a",{class:"header-anchor",href:"#确认框","aria-label":'Permalink to "确认框"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:d(V)},h({_:2},[y.value?{name:"vue",fn:l(()=>[a(d(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=e("h2",{id:"遮罩-关闭配置",tabindex:"-1"},[n("遮罩/关闭配置 "),e("a",{class:"header-anchor",href:"#遮罩-关闭配置","aria-label":'Permalink to "遮罩/关闭配置"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{o.value=!1}),vueCode:d(A)},h({_:2},[k.value?{name:"vue",fn:l(()=>[a(d(k))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"程序化调用",tabindex:"-1"},[n("程序化调用 "),e("a",{class:"header-anchor",href:"#程序化调用","aria-label":'Permalink to "程序化调用"'},"​")],-1)),r(a(d(m),null,null,512),[[u,o.value]]),a(s,null,{default:l(()=>[a(d(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[3]||(t[3]=()=>{o.value=!1}),vueCode:d(C)},h({_:2},[f.value?{name:"vue",fn:l(()=>[a(d(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[10]||(t[10]=W(`<h2 id="api" tabindex="-1" data-v-92bdc860>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-92bdc860>​</a></h2><h3 id="props" tabindex="-1" data-v-92bdc860>Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;" data-v-92bdc860>​</a></h3><table tabindex="0" data-v-92bdc860><thead data-v-92bdc860><tr data-v-92bdc860><th data-v-92bdc860>名称</th><th data-v-92bdc860>类型</th><th data-v-92bdc860>默认值</th><th data-v-92bdc860>说明</th></tr></thead><tbody data-v-92bdc860><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>type</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;alert&#39; | &#39;confirm&#39;</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;alert&#39;</code></td><td data-v-92bdc860>对话框类型</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>title</code></td><td data-v-92bdc860><code data-v-92bdc860>string</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;提示&#39;</code></td><td data-v-92bdc860>标题文本</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>message</code></td><td data-v-92bdc860><code data-v-92bdc860>string</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;&#39;</code></td><td data-v-92bdc860>内容文本</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>modelValue</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>false</code></td><td data-v-92bdc860>v-model 绑定（推荐）</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>visible</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>false</code></td><td data-v-92bdc860>兼容旧用法（与 <code data-v-92bdc860>modelValue</code> 等价）</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>showTitle</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>true</code></td><td data-v-92bdc860>是否显示标题</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>confirmText</code></td><td data-v-92bdc860><code data-v-92bdc860>string</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;确定&#39;</code></td><td data-v-92bdc860>确认按钮文本</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>cancelText</code></td><td data-v-92bdc860><code data-v-92bdc860>string</code></td><td data-v-92bdc860><code data-v-92bdc860>&#39;取消&#39;</code></td><td data-v-92bdc860>取消按钮文本</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>showCancel</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>false</code></td><td data-v-92bdc860>强制显示取消按钮（alert 下也可显）</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>closable</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>true</code></td><td data-v-92bdc860>是否显示右上角关闭按钮</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>maskClosable</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860><code data-v-92bdc860>true</code></td><td data-v-92bdc860>是否允许点击遮罩关闭</td></tr></tbody></table><h3 id="events" tabindex="-1" data-v-92bdc860>Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;" data-v-92bdc860>​</a></h3><table tabindex="0" data-v-92bdc860><thead data-v-92bdc860><tr data-v-92bdc860><th data-v-92bdc860>事件名</th><th data-v-92bdc860>参数</th><th data-v-92bdc860>说明</th></tr></thead><tbody data-v-92bdc860><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>update:modelValue</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860>对话框显隐变化（推荐）</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>update:visible</code></td><td data-v-92bdc860><code data-v-92bdc860>boolean</code></td><td data-v-92bdc860>兼容旧事件</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>confirm</code></td><td data-v-92bdc860><code data-v-92bdc860>void</code></td><td data-v-92bdc860>点击确认</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>cancel</code></td><td data-v-92bdc860><code data-v-92bdc860>void</code></td><td data-v-92bdc860>点击取消</td></tr><tr data-v-92bdc860><td data-v-92bdc860><code data-v-92bdc860>close</code></td><td data-v-92bdc860><code data-v-92bdc860>void</code></td><td data-v-92bdc860>点击关闭或遮罩关闭</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-92bdc860>Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;" data-v-92bdc860>​</a></h3><p data-v-92bdc860>当前版本无插槽（内容通过 <code data-v-92bdc860>message</code>/<code data-v-92bdc860>title</code> 控制）。</p><h2 id="按需引入" tabindex="-1" data-v-92bdc860>按需引入 <a class="header-anchor" href="#按需引入" aria-label="Permalink to &quot;按需引入&quot;" data-v-92bdc860>​</a></h2><div class="language-ts vp-adaptive-theme" data-v-92bdc860><button title="Copy Code" class="copy" data-v-92bdc860></button><span class="lang" data-v-92bdc860>ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-92bdc860><code data-v-92bdc860><span class="line" data-v-92bdc860><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-92bdc860>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-92bdc860> { LumoDialog } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-92bdc860>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-92bdc860> &#39;lumoui&#39;</span></span>
<span class="line" data-v-92bdc860><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-92bdc860>import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-92bdc860> &#39;lumoui/styles/index.css&#39;</span></span></code></pre></div>`,9))])}}}),P=_(Z,[["__scopeId","data-v-92bdc860"]]);export{M as __pageData,P as default};
