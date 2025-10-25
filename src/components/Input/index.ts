import './Input.css'
import Input from './Input.vue';
import { withInstall } from "../../utils/withInstall";

export const LumoInput=withInstall(Input,'LumoInput')

export default LumoInput

export type {InputProps} from './types'
