# Input 输入框

支持三种状态、三种尺寸、禁用、圆角、搜索图标与多种输入类型。

## 基础用法
<demo vue="../example/Input/basic.vue" />

## 尺寸与圆角
<demo vue="../example/Input/size-isRound.vue" />

## 状态
<demo vue="../example/Input/state.vue" />

## 输入类型与搜索
<demo vue="../example/Input/type.vue" />

## API

### Props
| 名称          | 类型                                         | 默认值   | 说明                         |
| ------------- | -------------------------------------------- | -------- | ---------------------------- |
| `state`       | `'normal' \| 'wrong' \| 'success'`           | `'normal'` | 输入框状态样式               |
| `placeHolder` | `string`                                     | `'Please input'` | 占位文本            |
| `disabled`    | `boolean`                                    | `false`  | 是否禁用                     |
| `contentType` | `'text' \| 'password' \| 'email' \| 'number' \| 'tel'` | `'text'` | 输入类型         |
| `modelValue`  | `string \| number`                           | `undefined` | v-model 值          |
| `isRound`     | `boolean`                                    | `false`  | 是否圆角                     |
| `size`        | `'sm' \| 'md' \| 'lg'`                       | `'md'`   | 输入框尺寸                   |
| `clearable`   | `boolean`                                    | `false`  | 是否可清空（类型存在，暂未实现 UI） |
| `searchable`  | `boolean`                                    | `false`  | 是否显示左侧搜索图标         |

### Events
| 事件名              | 参数            | 说明           |
| ------------------- | --------------- | -------------- |
| `update:modelValue` | `string \| number` | 值变化        |
| `focus`             | `Event`         | 获取焦点       |
| `blur`              | `Event`         | 失去焦点       |

### Slots
| 名称      | 说明                    |
| --------- | ----------------------- |
| `default` | 可用于自定义搜索图标等 |

## 按需引入
```ts
import { LumoInput } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>