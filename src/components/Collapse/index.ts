import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

import { withInstall } from "../../utils/withInstall";

export const LumoCollapse = withInstall(Collapse,'LumoCollapse')
export const LumoCollapseItem = withInstall(CollapseItem,'LumoCollapseItem')

export default LumoCollapse
export type{ CollapseProps,CollapseItemProps } from './types'
