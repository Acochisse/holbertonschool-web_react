const {MARK_AS_READ, SET_TYPE_FILTER, URGENT, DEFAULT, FETCH_NOTIFICATIONS_SUCCESS} from '../actions/notificationActionTypes.js'

const notif0 = {
  notifications = [];
  filter = DEFAULT;
}

function notifReducer(action) {
  let notifR = [];
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      for (notif in action.data) {
        holder = notif.set(isRead, False);
      }
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
        }
      } else {
        notifR.push(notif);
      }
    case SET_TYPE_FILTER:
      return {
        filter: "DEFAULT",
        notifications: notifR
      }
    default:
      return notif0;
  }
}

export default notifReducer;