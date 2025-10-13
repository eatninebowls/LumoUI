# Tabs 标签页

支持线与卡片两种样式、四种位置、禁用、关闭与新增事件，内容延迟渲染。

## 基础用法
<script setup lang="ts">
import { ref } from 'vue'
const active = ref('tab1')
</script>

<LumoTabs v-model="active" type="line" position="top">
  <LumoTabPane name="tab1" label="标签一">内容一</LumoTabPane>
  <LumoTabPane name="tab2" label="标签二" closable>内容二</LumoTabPane>
  <LumoTabPane name="tab3" label="标签三" disabled>禁用</LumoTabPane>
</LumoTabs>

## 卡片/位置/延迟渲染
<script setup lang="ts">
import { ref } from 'vue'
const active2 = ref('card1')
</script>

<LumoTabs v-model="active2" type="card" position="top">
  <LumoTabPane name="card1" label="卡片一">内容一</LumoTabPane>
  <LumoTabPane name="card2" label="卡片二" lazy>首次激活时渲染</LumoTabPane>
</LumoTabs>

## 事件
<script setup lang="ts">
const onClick = (name:string) => console.log('tab-click', name)
const onRemove = (name:string) => console.log('tab-remove', name)
</script>

<LumoTabs v-model="active" @tab-click="onClick" @tab-remove="onRemove">
  <LumoTabPane name="tab1" label="一">一</LumoTabPane>
  <LumoTabPane name="tab2" label="二" closable>二</LumoTabPane>
</LumoTabs>

## API

### Tabs Props
| 名称        | 类型                                     | 默认值   | 说明               |
| ----------- | ---------------------------------------- | -------- | ------------------ |
| `modelValue`| `string`                                 | `''`     | 当前激活的标签名   |
| `type`      | `'line' \| 'card'`                       | `'line'` | 标签样式           |
| `position`  | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  | 标签导航位置       |
| `closable`  | `boolean`                                | `false`  | 是否全局允许关闭   |
| `addable`   | `boolean`                                | `false`  | 是否允许新增（事件）|

### TabPane Props
| 名称      | 类型       | 默认值 | 说明                 |
| --------- | ---------- | ------ | -------------------- |
| `name`    | `string`   | 必填   | 标签唯一标识         |
| `label`   | `string`   | `''`   | 标签标题             |
| `disabled`| `boolean`  | `false`| 是否禁用             |
| `closable`| `boolean`  | `false`| 是否可关闭           |
| `lazy`    | `boolean`  | `false`| 是否延迟渲染内容     |

### Events
| 事件名              | 参数     | 说明           |
| ------------------- | -------- | -------------- |
| `update:modelValue` | `string` | 激活标签变化   |
| `tab-click`         | `string` | 点击某个标签   |
| `tab-remove`        | `string` | 关闭某个标签   |
| `tab-add`           | `void`   | 新增标签（触发）|

### Slots
| 位置         | 说明            |
| ------------ | --------------- |
| `TabPane`默认| 标签页内容插槽  |

## 按需引入
```ts
import { LumoTabs, LumoTabPane } from 'lumoui'
import 'lumoui/styles/index.css'
```