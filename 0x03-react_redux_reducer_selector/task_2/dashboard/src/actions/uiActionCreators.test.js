const {login, logout, displayNotificationDrawer, hideNotificationDrawer} = require('./uiActionCreator');
const { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } = require('./uiActionTypes');

describe('login', () => {
    it('should create an action to login', () => {
        expect(login('a', 'b')).toEqual({ type: 'LOGIN', user: { email: 'a', password: 'b' } });
    });
});

describe('logout', () => {
    it('should create an action to logout', () => {
        expect(logout()).toEqual({ type: 'LOGOUT' });
    });
});


describe('displayNotificationDrawer', () => {
    it('should create an action to display the notification drawer', () => {
        expect(displayNotificationDrawer()).toEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
    });
});

describe('hideNotificationDrawer', () => {
    it('should create an action to hide the notification drawer', () => {
        expect(hideNotificationDrawer()).toEqual({ type: 'HIDE_NOTIFICATION_DRAWER' });
    });
});