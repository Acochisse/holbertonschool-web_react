const {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS} = require('./uiActionTypes');


describe('uiReducer', () => {
  it('Should return initial state', () => {
    expect(uiReducer().toEqual(
      {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      }
    ))
  });
  it('Should return initial state', () => {
    expect(uiReducer(SELECT_COURSE).toEqual(
      {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      }
    ))
  });
  it('Should return changed state', () => {
    expect(uiReducer(DISPLAY_NOTIFICATION_DRAWER).toEqual(
      {
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {}
      }
    ))
  });
});