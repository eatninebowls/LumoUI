# Loading 加载

提供两种加载图标类型，支持大小、颜色、文案及纵向排列。

## 基础用法
<demo-wrapper>
<LumoLoading>加载中...</LumoLoading>
<LumoLoading type="spinner">加载中...</LumoLoading>
</demo-wrapper>

## 自定义大小与颜色
<demo-wrapper>
<LumoLoading :size="20" color="#3b82f6">蓝色 20px</LumoLoading>
<LumoLoading :size="40" color="#ef4444" textColor="#ef4444" :vertical="true">红色 40px 纵向</LumoLoading>
</demo-wrapper>

## 自定义图标插槽
<LumoLoading>
  <template #icon>
    <svg width="24" height="24"><circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"/></svg>
  </template>
  自定义图标
</LumoLoading>

## API

### Props
| 名称       | 类型                       | 默认值     | 说明                 |
| ---------- | -------------------------- | ---------- | -------------------- |
| `type`     | `'circular' \| 'spinner'`  | `'circular'` | 加载图标类型         |
| `size`     | `string \| number`         | `30`       | 图标大小             |
| `color`    | `string`                   | `'#c9c9c9'`| 图标颜色             |
| `textColor`| `string`                   | `'#c9c9c9'`| 文案颜色             |
| `textSize` | `string \| number`         | `14`       | 文案大小             |
| `vertical` | `boolean`                  | `false`    | 是否纵向排列         |

### Slots
| 名称     | 说明             |
| -------- | ---------------- |
| `icon`   | 自定义加载图标   |
| `default`| 加载文案         |

## 按需引入
```ts
import { LumoLoading } from 'lumoui'
import 'lumoui/styles/index.css'
```

<style scoped>
.demo-wrapper { display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin:12px 0; }
</style>