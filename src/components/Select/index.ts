import './Select.css'
import Select from './Select.vue'
import { withInstall } from '../../utils/withInstall'

export const LumoSelect = withInstall(Select, 'LumoSelect')

export default LumoSelect

export type { SelectProps, SelectOption } from './types'