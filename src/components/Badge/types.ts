export interface BadgeProps{
  value?:number|string //显示的值，允许数字或字符串（后续会转）
  max?:number //允许显示的最大值，超过最大值显示max+
  type?:'primary'|'success'|'warning'|'danger'|'info' //为了统一，相当于可选颜色
  color?:string //也可以自己设置其他颜色
  backgroundColor?:string //自定义背景色
  isDot?:boolean //是否显示小圆点不显示数字
  hidden?:boolean //用于隐藏，比如已读
  showZero?:boolean //算特殊情况，0要不要显示
}