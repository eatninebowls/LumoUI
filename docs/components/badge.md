# Badge 徽标

用于展示数字、状态点或自定义颜色的标记，支持最大值、隐藏、仅点样式等。

## 基础用法
<demo-wrapper>
<LumoBadge :value="1"><LumoButton>消息</LumoButton></LumoBadge>
<LumoBadge :value="99"><LumoButton>通知</LumoButton></LumoBadge>
<LumoBadge :value="100" :max="99"><LumoButton>超出上限</LumoButton></LumoBadge>
</demo-wrapper>

## 仅点样式
<demo-wrapper>
<LumoBadge isDot><LumoButton>在线</LumoButton></LumoBadge>
<LumoBadge isDot type="success"><LumoButton>成功</LumoButton></LumoBadge>
</demo-wrapper>

## 自定义颜色
<demo-wrapper>
<LumoBadge :value="5" color="#fff" backgroundColor="#fb7185"><LumoButton>红色</LumoButton></LumoBadge>
<LumoBadge :value="8" color="#fff" backgroundColor="#22c55e"><LumoButton>绿色</LumoButton></LumoBadge>
</demo-wrapper>

## 隐藏与 0 值
<demo-wrapper>
<LumoBadge :value="0" :showZero="false"><LumoButton>不显示 0</LumoButton></LumoBadge>
<LumoBadge :value="0" :showZero="true"><LumoButton>显示 0</LumoButton></LumoBadge>
<LumoBadge :value="3" :hidden="true"><LumoButton>隐藏</LumoButton></LumoBadge>
</demo-wrapper>

## API

### Props
| 名称             | 类型                                                         | 默认值   | 说明                           |
| ---------------- | ------------------------------------------------------------ | -------- | ------------------------------ |
| `value`          | `number \| string`                                           | `undefined` | 显示的数值或文本               |
| `max`            | `number`                                                     | `undefined` | 超过最大值显示为 `max+`       |
| `type`           | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `undefined` | 预设颜色类型                   |
| `color`          | `string`                                                     | `undefined` | 文本颜色                       |
| `backgroundColor`| `string`                                                     | `undefined` | 背景色                         |
| `isDot`          | `boolean`                                                    | `false`  | 仅显示小圆点，不显示数值       |
| `hidden`         | `boolean`                                                    | `false`  | 隐藏徽标                       |
| `showZero`       | `boolean`                                                    | `false`  | 是否显示值为 0 的徽标          |

### Slots
| 名称     | 说明                   |
| -------- | ---------------------- |
| `default`| 作为徽标挂载的主体内容 |

## 按需引入
```ts
import { LumoBadge } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>