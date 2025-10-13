# Select 选择器

支持禁用、清空、尺寸与状态样式、可过滤搜索，提供完整的选择交互。

## 基础用法
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' },
  { label: '禁用', value: 'disabled', disabled: true },
]
</script>

<LumoSelect v-model="value" :options="options" placeholder="请选择" />

## 清空、过滤与状态
<demo-wrapper>
<LumoSelect clearable v-model="value" :options="options" placeholder="可清空" />
<LumoSelect filterable v-model="value" :options="options" placeholder="可过滤" />
<LumoSelect state="wrong" v-model="value" :options="options" placeholder="错误态" />
</demo-wrapper>

## 尺寸与圆角
<demo-wrapper>
<LumoSelect size="sm" v-model="value" :options="options" />
<LumoSelect size="md" v-model="value" :options="options" :isRound="true" />
<LumoSelect size="lg" v-model="value" :options="options" />
</demo-wrapper>

## API

### Props
| 名称          | 类型                                         | 默认值     | 说明                         |
| ------------- | -------------------------------------------- | ---------- | ---------------------------- |
| `modelValue`  | `string \| number`                           | `undefined`| v-model 绑定值               |
| `options`     | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]` | 选项列表 |
| `placeholder` | `string`                                     | `'Please select'` | 占位文本          |
| `disabled`    | `boolean`                                    | `false`    | 是否禁用                     |
| `clearable`   | `boolean`                                    | `false`    | 是否显示清空按钮             |
| `size`        | `'sm' \| 'md' \| 'lg'`                       | `'md'`     | 尺寸                         |
| `isRound`     | `boolean`                                    | `false`    | 圆角                         |
| `state`       | `'normal' \| 'wrong' \| 'success'`           | `'normal'` | 状态样式                     |
| `filterable`  | `boolean`                                    | `false`    | 是否支持输入过滤             |

### Events
| 事件名              | 参数                 | 说明           |
| ------------------- | -------------------- | -------------- |
| `update:modelValue` | `string \| number \| undefined` | 值变化 |
| `change`            | `string \| number \| undefined` | 选择变化 |
| `focus`             | `void`               | 打开下拉       |
| `blur`              | `void`               | 关闭下拉       |

### Slots
当前无插槽。

## 按需引入
```ts
import { LumoSelect } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>