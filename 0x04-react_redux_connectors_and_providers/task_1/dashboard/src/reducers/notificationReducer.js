const {MARK_AS_READ, SET_TYPE_FILTER, URGENT, DEFAULT, FETCH_NOTIFICATIONS_SUCCESS} from '../actions/notificationActionTypes.js'
const {Map} = require('immutable');
const {notificationNormalizer} = require('../schema/notifications');

const notif0 = Map({
  notifications = [],
  filter = DEFAULT
});

function notifReducer(action) {
  let notifR = [];
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      for (notif in action.data) {
        holder = notif.set(isRead, False);
      }
      holder = notificationNormalizer(holder);
      notifR.push(holder);
      return {
        filter: "DEFAULT",
        notifications: notifR
      }
    case MARK_AS_READ:
      for (notif in action.data) {
        if (notif.id === action.index) {
          holder = notif.set(isRead, True);
          notifR.push(holder);
        } else {
        notifR.push(notif);
      }
    }
    case SET_TYPE_FILTER:
      return notif0.set(filter, action.filter);
       default:
      return notif0;
  }
}

export default notifReducer;