// Tabs 标签页 Props 类型定义
export interface TabsProps {
  modelValue?: string                                     // 当前激活的标签页名称
  type?: 'line' | 'card'                                 // 标签页类型
  position?: 'top' | 'bottom' | 'left' | 'right'        // 标签页位置
  closable?: boolean                                      // 是否可关闭
  addable?: boolean                                       // 是否可新增
}

// TabPane 标签页面板 Props 类型定义
export interface TabPaneProps {
  name: string                                            // 标签页唯一标识
  label?: string                                          // 标签页标题
  disabled?: boolean                                      // 是否禁用
  closable?: boolean                                      // 是否可关闭
  lazy?: boolean                                          // 是否延迟渲染
}