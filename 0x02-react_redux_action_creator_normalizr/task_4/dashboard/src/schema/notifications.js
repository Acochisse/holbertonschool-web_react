#!/usr/bin/node
const notifList = require('../../../../notifications.json');
const {normalize, schema, idAttribute} = require('normalizr');

//use normalized data instead of notifList in a for in loop to create the same function with the same output
function getAllNotificationsByUser(userId) {
  let notifications = [];
  for (notif in normalizedData.entities.users) {
    if (notif.id === userId) {
      notifications.push(notif.context)
    }
  }
  return notifications;
}


const user = new schema.Entity('users');
const messages = new schema.Entity('messages', {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: messages,
});

const normalizedData = normalize(notifList, [notification]);

module.exports = getAllNotificationsByUser;

// console.log(normalizedData.entities.users);

// console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));