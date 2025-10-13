# Button 按钮

轻量、可配置的按钮组件，支持类型、尺寸、禁用、圆形、镂空与加载状态。

## 基础用法
<demo vue="../example/Button/basic.vue" />

## 尺寸
<demo-wrapper>
<LumoButton size="sm">小按钮</LumoButton>
<LumoButton size="md">中按钮</LumoButton>
<LumoButton size="lg">大按钮</LumoButton>
</demo-wrapper>

## 镂空（outline）
<demo-wrapper>
<LumoButton outline>Primary</LumoButton>
<LumoButton variant="secondary" outline>Secondary</LumoButton>
<LumoButton variant="danger" outline>Danger</LumoButton>
<LumoButton variant="success" outline>Success</LumoButton>
</demo-wrapper>

## 圆形按钮
<demo-wrapper>
<LumoButton isCircle size="sm">A</LumoButton>
<LumoButton isCircle size="md">B</LumoButton>
<LumoButton isCircle size="lg">C</LumoButton>
</demo-wrapper>

## 禁用与加载
<demo-wrapper>
<LumoButton disabled>禁用</LumoButton>
<LumoButton loading>加载中</LumoButton>
</demo-wrapper>

## 事件示例
<script setup lang="ts">
import { ref } from 'vue'
const clickCount = ref(0)
const handleClick = () => { clickCount.value++ }
</script>

<demo-wrapper>
<LumoButton @click="handleClick">点我增加计数</LumoButton>
<span>点击次数：{{ clickCount }}</span>
</demo-wrapper>

## 插槽
- 默认插槽：按钮文本或自定义内容
- 加载态下：组件内置加载图标，会显示插槽内容为“Loading...”，可自定义覆盖

## API

### Props
| 名称       | 类型                                         | 默认值     | 说明                           |
| ---------- | -------------------------------------------- | ---------- | ------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'danger' \| 'success'` | `'primary'` | 按钮类型                       |
| `size`     | `'sm' \| 'md' \| 'lg'`                       | `'sm'`     | 按钮尺寸                       |
| `disabled` | `boolean`                                    | `false`    | 是否禁用                       |
| `isCircle` | `boolean`                                    | `false`    | 是否圆形按钮                   |
| `outline`  | `boolean`                                    | `false`    | 镂空样式（描边 + 透明背景）    |
| `loading`  | `boolean`                                    | `false`    | 加载中状态（显示旋转图标并禁用）|

### Events
| 事件名  | 参数     | 说明                         |
| ------ | -------- | ---------------------------- |
| `click` | `void`   | 点击按钮时触发（未禁用/未加载） |

### Slots
| 名称     | 说明                           |
| -------- | ------------------------------ |
| `default` | 按钮内容；加载时显示“Loading...” |

## 按需引入（在你的项目中）
- 全量注册：
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { LumoUI } from 'lumoui'
import 'lumoui/styles/index.css'

createApp(App).use(LumoUI).mount('#app')
```

- 按需使用：
```ts
import { LumoButton } from 'lumoui'
import 'lumoui/styles/index.css'
// 直接在模板使用 <LumoButton>...</LumoButton>
```

<style scoped>
.demo-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin: 12px 0;
}
</style>