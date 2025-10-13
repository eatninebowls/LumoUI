# Switch 开关

支持尺寸、禁用、加载、颜色与文案自定义，并提供变更前钩子。

## 基础用法
<script setup lang="ts">
import { ref } from 'vue'
const s1 = ref(false)
const s2 = ref(true)
</script>

<demo-wrapper>
<LumoSwitch v-model="s1" />
<LumoSwitch v-model="s2" activeText="开启" inactiveText="关闭" />
</demo-wrapper>

## 尺寸/禁用/加载
<demo-wrapper>
<LumoSwitch v-model="s1" size="sm" />
<LumoSwitch v-model="s1" size="md" />
<LumoSwitch v-model="s1" size="lg" />
<LumoSwitch v-model="s1" disabled />
<LumoSwitch v-model="s1" loading />
</demo-wrapper>

## 自定义颜色与宽度
<demo-wrapper>
<LumoSwitch v-model="s1" activeColor="#22c55e" inactiveColor="#d1d5db" :width="60" />
</demo-wrapper>

## 切换前钩子
```ts
const before = async () => {
  await new Promise(r => setTimeout(r, 500))
  return confirm('确定切换吗？')
}
```
<LumoSwitch v-model="s1" :beforeChange="before" />

## API

### Props
| 名称           | 类型                         | 默认值  | 说明                         |
| -------------- | ---------------------------- | ------- | ---------------------------- |
| `modelValue`   | `boolean`                    | `false` | v-model 值                   |
| `size`         | `'sm' \| 'md' \| 'lg'`       | `'md'`  | 开关尺寸                     |
| `disabled`     | `boolean`                    | `false` | 是否禁用                     |
| `loading`      | `boolean`                    | `false` | 是否加载中                   |
| `activeColor`  | `string`                     | `''`    | 激活状态背景色               |
| `inactiveColor`| `string`                     | `''`    | 非激活状态背景色             |
| `activeText`   | `string`                     | `''`    | 激活状态文字                 |
| `inactiveText` | `string`                     | `''`    | 非激活状态文字               |
| `width`        | `number`                     | `0`     | 自定义宽度（px）             |
| `beforeChange` | `() => boolean \| Promise<boolean>` | `undefined` | 切换前钩子，返回 false 阻止 |

### Events
| 事件名              | 参数      | 说明            |
| ------------------- | --------- | --------------- |
| `update:modelValue` | `boolean` | 值变化          |
| `change`            | `boolean` | 切换时触发      |

### Slots
当前无插槽。

## 按需引入
```ts
import { LumoSwitch } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>