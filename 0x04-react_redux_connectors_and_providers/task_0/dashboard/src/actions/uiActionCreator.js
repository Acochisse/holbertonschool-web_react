const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} = require('./uiActionTypes');
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
  
function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
}

const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
};

// use bindActionCreators to bind the action creators to dispatch and export them

module.exports = bindActionCreators(uiActions, dispatch);