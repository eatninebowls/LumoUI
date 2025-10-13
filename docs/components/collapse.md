# Collapse 折叠面板

支持手风琴与多展开模式，提供面板禁用与过渡动画。

## 基础用法
<script setup lang="ts">
import { ref } from 'vue'
const active = ref(['item1'])
</script>

<LumoCollapse v-model="active">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三" :disabled="true">禁用内容</LumoCollapseItem>
</LumoCollapse>

## 手风琴模式
<script setup lang="ts">
import { ref } from 'vue'
const onlyOne = ref(['item2'])
</script>

<LumoCollapse v-model="onlyOne" :accordion="true">
  <LumoCollapseItem name="item1" title="面板一">内容一</LumoCollapseItem>
  <LumoCollapseItem name="item2" title="面板二">内容二</LumoCollapseItem>
  <LumoCollapseItem name="item3" title="面板三">内容三</LumoCollapseItem>
</LumoCollapse>

## API

### Collapse Props
| 名称         | 类型       | 默认值 | 说明                     |
| ------------ | ---------- | ------ | ------------------------ |
| `modelValue` | `string[]` | `[]`   | 当前展开的面板名集合     |
| `accordion`  | `boolean`  | `false`| 是否启用手风琴模式       |

### CollapseItem Props
| 名称       | 类型      | 默认值 | 说明           |
| ---------- | --------- | ------ | -------------- |
| `name`     | `string`  | 必填   | 面板唯一标识   |
| `title`    | `string`  | `''`   | 面板标题       |
| `disabled` | `boolean` | `false`| 是否禁用       |

### Events
| 事件名             | 参数         | 说明                |
| ------------------ | ------------ | ------------------- |
| `update:modelValue`| `string[]`   | 展开面板集合变化时 |

### Slots
| 名称       | 说明           |
| ---------- | -------------- |
| `default`  | 面板内容插槽   |

## 按需引入
```ts
import { LumoCollapse, LumoCollapseItem } from 'lumoui'
import 'lumoui/styles/index.css'
```