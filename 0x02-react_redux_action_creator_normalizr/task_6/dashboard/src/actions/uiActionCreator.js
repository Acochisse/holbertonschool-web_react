const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} = require('./uiActionTypes');
const { bindActionCreators } = require("redux");

function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
    }

const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// use bindActionCreators to bind the action creators to dispatch and export them

module.exports = bindActionCreators(uiActions, dispatch);