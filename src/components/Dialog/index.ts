import Dialog from "./Dialog.vue";
import { withInstall } from "../../utils/withInstall";

export const LumoDialog=withInstall(Dialog,'LumoDialog')

export default LumoDialog

export type {DialogProps} from './types'