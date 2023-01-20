import React, { PureComponent } from 'react';
import './Notifications.css';
import { markAsRead } from '../Notifications/Notifications';
import { number } from 'prop-types';
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	markAsRead(key) {
		console.log(`Notification ${key} has been marked as read`);
	}
	render() {
		const { type, value, html, key } = this.props;
		if (value) return(<li data-notification-type={type} onClick={() => {this.markAsRead(key)}} >{value} </li>)
		if (html) return(<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {this.markAsRead(key)}}></li>)
		return(<li data-notification-type={type} onClick={() => {this.markAsRead(key)}}></li>)
	}
}


NotificationItem.DefaultProps = {
	id: 0,
	type: 'default',
	value: '',
	html: {},
	key: 0,
}

NotificationItem.propTypes = {
	id: PropTypes.number,
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({ __html: PropTypes.string }),
	key: PropTypes.number,
}

export {NotificationItem};
