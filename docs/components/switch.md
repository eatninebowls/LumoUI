# Switch 开关

用于在两种状态间进行切换，支持大小、禁用、加载、自定义颜色与宽度、前置校验等能力。

- 绑定值：使用 `v-model` 进行双向绑定。
- 组件名：`LumoSwitch`（已在文档站通过 `enhanceApp` 全局注册，可直接使用）。

## 基本用法
<div class="flex items-center gap-8">
  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-600">默认</span>
    <LumoSwitch  />
  </div>
  <div class="flex items-center gap-2">
    <span class="text-sm text-gray-600">带文字</span>
    <LumoSwitch activeText="开启" inactiveText="关闭" />
  </div>
</div>

```vue
<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>

<LumoSwitch v-model="checked" />
<p>当前值：{{ checked }}</p>
```

## 尺寸 size

支持 `sm | md | lg` 三种尺寸。

```vue
<LumoSwitch size="sm" />
<LumoSwitch size="md" />
<LumoSwitch size="lg" />
```

## 禁用与加载

```vue
<LumoSwitch v-model="disabledOn" disabled />
<LumoSwitch v-model="loadingOn" loading />
```

## 自定义颜色与宽度

- `activeColor`：激活时的背景色
- `inactiveColor`：未激活时的背景色
- `width`：自定义宽度（px），用于适配不同的文字或布局需求

```vue
<LumoSwitch v-model="on1" activeColor="#10b981" inactiveColor="#e5e7eb" />
<LumoSwitch v-model="on2" :width="64" />
```

## 状态文字

在左右两侧显示状态文案（只在对应状态显示）：

```vue
<LumoSwitch v-model="on" activeText="已开启" inactiveText="已关闭" />
```

## 切换前校验 beforeChange

支持同步或异步校验，返回 `false` 或 reject 时取消切换。

```vue
<script setup>
const guard = async () => {
  // 模拟异步确认
  await new Promise(r => setTimeout(r, 500))
  return confirm('确定要切换吗？')
}
</script>

<LumoSwitch v-model="on" :beforeChange="guard" />
```

---

## API

### Props

- `modelValue` (boolean)
  - 绑定值；`true` 为开启，`false` 为关闭。
- `size` ('sm' | 'md' | 'lg')
  - 控制整体尺寸；默认 `md`。
- `disabled` (boolean)
  - 禁用交互；默认 `false`。
- `loading` (boolean)
  - 显示加载中状态并禁用点击；默认 `false`。
- `activeColor` (string)
  - 激活时的背景色（内联样式设置）；不传则使用默认主题色。
- `inactiveColor` (string)
  - 未激活时的背景色（内联样式设置）；不传则使用默认灰色。
- `activeText` (string)
  - 激活状态下展示的文字（显示在右侧）。
- `inactiveText` (string)
  - 未激活状态下展示的文字（显示在左侧）。
- `width` (number)
  - 自定义宽度（px）；默认自适应。
- `beforeChange` (() => boolean |)
  - 切换前钩子，返回 `false`/`Promise<false>` 或抛出异常则取消切换；支持异步。

### Events

- `update:modelValue` `(value: boolean)`
  - v-model 更新事件。
- `change` `(value: boolean)`
  - 值变化完成后触发（即通过钩子校验并更新后）。

### Slots

- 暂无插槽；加载图标内置显示在滑块中。

---

## 设计说明

- 尺寸通过内部 `sizeClasses` 控制滑块与圆点大小以及位移距离，保证不同大小下的交互一致性。
- 加载与禁用在容器上统一处理 `opacity` 与 `cursor`，避免误触。
- 自定义颜色通过内联样式实现，不依赖外部 Tailwind 配置；必要时可使用类名前缀方案减少与站点样式的潜在冲突。