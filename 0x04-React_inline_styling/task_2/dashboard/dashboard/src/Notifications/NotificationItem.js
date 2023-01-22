import React, { PureComponent } from 'react';
import { markAsRead } from '../Notifications/Notifications';
import { number } from 'prop-types';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';




class NotificationItem extends PureComponent {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	
	markAsRead(key) {
		console.log(`Notification ${key} has been marked as read`);
	}
	render() {
		const styles = StyleSheet.create({
			NotifU: {color: 'red'},
			NotifN: {color: 'blue'},
		})
		if (this.props.value) {
			if (this.props.type == 'urgent') 
				return (<li  className={`${css(styles.NotifU)}`} data-notification-type={this.props.type} onClick={() => {markAsRead(0)}}>{this.props.value}</li>)
			else 
				return (<li  className={`${css(styles.NotifN)}`} data-notification-type={this.props.type} onClick={() => {markAsRead(0)}}>{this.props.value}</li>)
			}
		if (this.props.html)
			return(<li className={`${css(styles.NotifU)}`} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {markAsRead(1)}}></li>)
		return (<li className={`${css(styles.NotifN)}`} data-notification-type={this.props.type} onClick={() => {markAsRead(2)}}></li>)
		
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


export default NotificationItem;
