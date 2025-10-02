// 按钮 Props 类型，ts导出定义
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' // 按钮类型
  size?: 'sm' | 'md' | 'lg'                               // 按钮大小
  disabled?: boolean                                      // 是否禁用
  isCircle?: boolean                                      // 是否圆形
  outline?: boolean                                       // 是否镂空
  loading?: boolean                                       // 是否加载中
}
