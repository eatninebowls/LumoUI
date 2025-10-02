import Loading from './Loading.vue'
import { withInstall } from '../../utils/withInstall'

export const LumoLoading = withInstall(Loading, 'LumoLoading')

export default LumoLoading

export type { LoadingProps } from './types'