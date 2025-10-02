export interface ProgressProps{
  type?:'line'|'circle'
  percentage?:number
  strokeWidth?:number
  width?:number
  color?:string
  showText?:boolean
  textInside?:boolean
}