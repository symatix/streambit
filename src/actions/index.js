import * as fn from './types'

/*** authReducer ***/
export const changeActiveNav = (nav) => {
	return { type: fn.CHANGE_ACTIVE_NAV, payload: nav }
}
