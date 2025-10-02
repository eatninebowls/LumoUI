import Tabs from './Tabs.vue'
import TabPane from './TabPane.vue'
import { withInstall } from '../../utils/withInstall'

export const LumoTabs = withInstall(Tabs, 'LumoTabs')
export const LumoTabPane = withInstall(TabPane, 'LumoTabPane')

export default LumoTabs

export type { TabsProps, TabPaneProps } from './types'