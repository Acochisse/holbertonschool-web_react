const {MARK_AS_READ, SET_TYPE_FILTER, notificationTypeFilters} = require('./notificationActionTypes');

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

module.exports = {markAsAread, setTypeFilter};