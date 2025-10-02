export interface LoadingProps {
  type?: 'circular' | 'spinner'  // 加载图标类型
  size?: string | number         // 加载图标大小
  color?: string                 // 图标颜色
  textColor?: string            // 文字颜色
  textSize?: string | number    // 文字大小
  vertical?: boolean            // 是否垂直排列
}