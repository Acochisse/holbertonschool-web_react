const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS} = require('../actions/uiActionTypes')
const {Map} = require('immutable')

const stateO = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

const state = Map(stateO)

function uiReducer(action) {
  let stateR
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER:
      stateR = state.withMutations((state) => {
        state.set(isNotificationDrawerVisible, true)
      });
      return stateR
    case HIDE_NOTIFICATION_DRAWER:
      stateR = state.withMutations((state) => {
        state.set(isNotificationDrawerVisible, false)
      });
      return stateR;
    case LOGIN_SUCCESS:
      stateR = state.withMutations((state) => {
        state.set(isUserLoggedIn, true)
      });
      return stateR;
    case LOGIN_FAILURE:
      stateR = state.withMutations((state) => {
        state.set(isUserLoggedIn, false)
      });
      return stateR;
    case LOGOUT:
      stateR = state.withMutations((state) => {
        state.set(isUserLoggedIn, false)
      });
      return stateR;
    default:
      return state
  }
}
