import Switch from './Switch.vue'
import { withInstall } from '../../utils/withInstall'

export const LumoSwitch = withInstall(Switch, 'LumoSwitch')

export default LumoSwitch

export type { SwitchProps } from './types'