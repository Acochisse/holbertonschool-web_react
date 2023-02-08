const {MARK_AS_READ, SET_TYPE_FILTER, notificationTypeFilters} = require('./notificationActionTypes');
const { bindActionCreators } = require("redux");

function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        index: index,
    };
}

function setTypeFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter: filter,
    };
}
notificationActions = {
    markAsAread,
    setTypeFilter
}

// use bindActionCreators to bind the action creators to dispatch and export them

module.exports = bindActionCreators(notificationActions, dispatch);
