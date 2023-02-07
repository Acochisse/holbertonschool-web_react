const {markAsRead, setTypeFilter} = require('./notificationActionCreators');

describe('markAsRead', () => {
    it('should create an action to mark a notification as read', () => {
        expect(markAsRead(1)).toEqual({ type: 'MARK_AS_READ', index: 1 });
    });
});

describe('setTypeFilter', () => {
    it('should create an action to set the type filter', () => {
        expect(setTypeFilter('DEFAULT')).toEqual({ type: 'SET_TYPE_FILTER', filter: 'DEFAULT' });
    });
});
