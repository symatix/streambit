import {CHANGE_ACTIVE_NAV} from '../actions/types'

export default function navReducer(state = [], action) {

   switch (action.type) {
      case CHANGE_ACTIVE_NAV:
         return action.payload;

      default:
         return state
   }
}
