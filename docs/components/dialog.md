# Dialog 对话框

提供提示与确认两类对话框，支持遮罩关闭、标题显示、按钮文案自定义，以及程序化调用。

## 基础用法（v-model）
<demo vue="../example/Dialog/basic.vue" />

## 确认框
<demo vue="../example/Dialog/confirm.vue" />

## 遮罩/关闭配置
<demo vue="../example/Dialog/closable.vue" />



## 程序化调用
<demo vue="../example/Dialog/programmactic.vue" />

## API

### Props
| 名称           | 类型                                   | 默认值      | 说明                               |
| -------------- | -------------------------------------- | ----------- | ---------------------------------- |
| `type`         | `'alert' \| 'confirm'`                 | `'alert'`   | 对话框类型                         |
| `title`        | `string`                                | `'提示'`    | 标题文本                           |
| `message`      | `string`                                | `''`        | 内容文本                           |
| `modelValue`   | `boolean`                               | `false`     | v-model 绑定（推荐）               |
| `visible`      | `boolean`                               | `false`     | 兼容旧用法（与 `modelValue` 等价）|
| `showTitle`    | `boolean`                               | `true`      | 是否显示标题                       |
| `confirmText`  | `string`                                | `'确定'`    | 确认按钮文本                       |
| `cancelText`   | `string`                                | `'取消'`    | 取消按钮文本                       |
| `showCancel`   | `boolean`                               | `false`     | 强制显示取消按钮（alert 下也可显） |
| `closable`     | `boolean`                               | `true`      | 是否显示右上角关闭按钮             |
| `maskClosable` | `boolean`                               | `true`      | 是否允许点击遮罩关闭               |

### Events
| 事件名               | 参数      | 说明                          |
| -------------------- | --------- | ----------------------------- |
| `update:modelValue`  | `boolean` | 对话框显隐变化（推荐）        |
| `update:visible`     | `boolean` | 兼容旧事件                    |
| `confirm`            | `void`    | 点击确认                      |
| `cancel`             | `void`    | 点击取消                      |
| `close`              | `void`    | 点击关闭或遮罩关闭            |

### Slots
当前版本无插槽（内容通过 `message`/`title` 控制）。

## 按需引入
```ts
import { LumoDialog } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>