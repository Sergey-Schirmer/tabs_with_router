import {TABS_ACTION} from './actionsConst'
import tabsJson from '../tabs.json'

export const tabsActions = () => ({type: TABS_ACTION, payload: tabsJson})