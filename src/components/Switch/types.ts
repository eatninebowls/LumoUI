// Switch 开关 Props 类型定义
export interface SwitchProps {
  modelValue?: boolean                                    // v-model 绑定值
  size?: 'sm' | 'md' | 'lg'                              // 开关大小
  disabled?: boolean                                      // 是否禁用
  loading?: boolean                                       // 是否加载中
  activeColor?: string                                    // 激活状态颜色
  inactiveColor?: string                                  // 非激活状态颜色
  activeText?: string                                     // 激活状态文字
  inactiveText?: string                                   // 非激活状态文字
  width?: number                                          // 自定义宽度
  beforeChange?: () => boolean | Promise<boolean>         // 切换前的钩子函数
}