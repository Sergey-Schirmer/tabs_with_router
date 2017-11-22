import { TABS_ACTION }from '../actions/actionsConst'

const TabsReducer = (state = [], action) => {
  switch (action.type) {
    case TABS_ACTION:
      return [...action.payload]
    default:
      return state
  }
}

export default TabsReducer;