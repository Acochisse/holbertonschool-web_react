const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} = require('./uiActionTypes');

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

module.exports = {login, logout, displayNotificationDrawer, hideNotificationDrawer}