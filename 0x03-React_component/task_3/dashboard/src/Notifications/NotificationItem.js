import React from 'react';
import './Notifications.css';
import { markAsRead } from '../Notifications/Notifications';
import { number } from 'prop-types';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html, key}) => {
  if (value) return(<li data-notification-type={type} onClick={() => {markAsRead(key)}} >{value} </li>)
	if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(key)}}></li>)
	return(<li data-notification-type={type} onClick={() => {markAsRead(key)}}></li>)
}

NotificationItem.DefaultProps = {
	id: 0,
}

NotificationItem.propTypes = {
	id: PropTypes.number,
}

export default NotificationItem;
