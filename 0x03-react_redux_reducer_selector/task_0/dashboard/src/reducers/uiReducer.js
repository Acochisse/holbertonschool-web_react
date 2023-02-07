const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS} = require('../actions/uiActionTypes')

const state = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

function uiReducer(action) {
  const stateR = {...state}
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER:
      stateR.isNotificationDrawerVisible = true;
      return stateR
    case HIDE_NOTIFICATION_DRAWER:
      stateR.isNotificationDrawerVisible = false;
      return stateR;
    case LOGIN_SUCCESS:
      stateR.isUserLoggedIn = true;
      return stateR;
    case LOGIN_FAILURE:
      stateR.isUserLoggedIn = false;
      return stateR;
    case LOGOUT:
      stateR.isUserLoggedIn = false;
      return stateR;
    default:
      return state
  }
}

module.exports = uiReducer;