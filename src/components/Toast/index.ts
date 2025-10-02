import Toast from "./Toast.vue";
import { withInstall } from "../../utils/withInstall";

export const LumoToast=withInstall(Toast,'LumoToast')

export default LumoToast

export type{ToastProps} from './types'