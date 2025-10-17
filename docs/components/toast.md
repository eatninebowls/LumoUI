# Toast 消息提示

支持四种类型、五种位置、自动/手动关闭，建议通过 `useToast()` 使用。

## 基础用法
<demo vue="../example/Toast/basic.vue" />

## 不同方向展示
<demo vue="../example/Toast/position.vue" />
``

## API

### Props（组件）
| 名称       | 类型                                                     | 默认值     | 说明               |
| ---------- | -------------------------------------------------------- | ---------- | ------------------ |
| `type`     | `'success' \| 'error' \| 'warning' \| 'info'`            | `'info'`   | 消息类型           |
| `title`    | `string`                                                 | `''`       | 标题               |
| `message`  | `string`                                                 | 必填       | 内容               |
| `duration` | `number`                                                 | `3000`     | 自动关闭毫秒；`0` 不自动 |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left' \| 'top-center'` | `'top-right'` | 位置 |
| `closable` | `boolean`                                                | `true`     | 是否显示关闭按钮   |

### Events（组件）
| 事件名 | 参数  | 说明       |
| ------ | ----- | ---------- |
| `close`| `void`| 关闭时触发 |

### useToast 方法
| 方法名    | 签名                                              | 说明           |
| --------- | ------------------------------------------------- | -------------- |
| `show`    | `(options: ToastProps) => string`                 | 显示并返回 id  |
| `remove`  | `(id: string) => void`                           | 根据 id 移除   |
| `success` | `(message: string, options?: Partial<ToastProps>)`| 快捷成功       |
| `error`   | `(message: string, options?: Partial<ToastProps>)`| 快捷错误       |
| `warning` | `(message: string, options?: Partial<ToastProps>)`| 快捷警告       |
| `info`    | `(message: string, options?: Partial<ToastProps>)`| 快捷信息       |

## 按需引入
```ts
import { useToast } from 'lumoui'
import 'lumoui/styles/index.css'
```