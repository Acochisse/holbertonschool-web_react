#!/usr/bin/node
import * as notifList from '../../../../notifications.json';
import { normalize, schema, idAttribute } from 'normalizr';

//create three schemas in normalizr: User, Message, and Notification
const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity('messages', {
  idAttribute: 'guid',
});
const notificationSchema = new schema.Entity('notifications', {
  author: user,
  context: message
});

const user = new schema.Array(userSchema);
  export default getAllNotificationsByUser;
  export const normalizeData = (notifList, [notification])

function getAllNotificationsByUser(userId) {
//use the normalized data to create an array of notifications
  return Object.values(normalizeData.entities.notifications)
  .filter((notification) => notification.author === userId);

function notificationNormalizer(data,) {
  return normalize(data, [notification]);
}
};

module.exports = { getAllNotificationsByUser, notificationNormalizer};
