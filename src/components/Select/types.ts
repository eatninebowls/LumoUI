export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  size?: 'sm' | 'md' | 'lg'
  isRound?: boolean
  state?: 'normal' | 'wrong' | 'success'
  filterable?: boolean
}