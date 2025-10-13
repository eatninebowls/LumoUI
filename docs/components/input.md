# Input 输入框

支持三种状态、三种尺寸、禁用、圆角、搜索图标与多种输入类型。

## 基础用法
<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
</script>

<LumoInput v-model="text" placeHolder="请输入内容" />

## 尺寸与圆角
<demo-wrapper>
<LumoInput size="sm" placeHolder="小"></LumoInput>
<LumoInput size="md" placeHolder="中" :isRound="true"></LumoInput>
<LumoInput size="lg" placeHolder="大"></LumoInput>
</demo-wrapper>

## 状态
<demo-wrapper>
<LumoInput state="normal" placeHolder="正常" />
<LumoInput state="wrong" placeHolder="错误" />
<LumoInput state="success" placeHolder="成功" />
</demo-wrapper>

## 输入类型与搜索
<demo-wrapper>
<LumoInput contentType="password" placeHolder="密码" />
<LumoInput contentType="email" placeHolder="邮箱" />
<LumoInput :searchable="true" placeHolder="搜索..." />
</demo-wrapper>

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