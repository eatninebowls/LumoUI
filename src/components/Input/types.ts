export interface InputProps{
  state?:'normal'|'wrong'|'success'
  placeHolder?:string
  disabled?:boolean
  contentType:'text'|'password'|'email'|'number'|'tel'
  modelValue?:string|number
  isRound?:boolean
  size?:'sm'|'md'|'lg'
  clearable?:boolean
  searchable?:boolean
}