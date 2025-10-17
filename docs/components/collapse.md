# Collapse 折叠面板

支持手风琴与多展开模式，提供面板禁用与过渡动画。

## 基础用法
<demo vue="../example/Collapse/basic.vue" />

## 手风琴模式
<demo vue="../example/Collapse/admode.vue" />

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