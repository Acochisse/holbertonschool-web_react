#!/usr/bin/node
const notifList = require('../../../../notifications.json');


function getAllNotificationsByUser(userId) {
  let notifications = [];
  for (let i in notifList) {
    if (notifList[i].author.id === userId) {
      notifications.push(notifList[i].context);
    }
  }
  return notifications;
}

module.exports = getAllNotificationsByUser;

console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));