import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';




class Notifications extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps) {
		if (nextProps.listNotification.length > this.props.listNotification.length)
			return true;
		return False;
	}
	render() {
	return (
		<>
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			{this.props.displayDrawer && (
				<div className="Notifications">
					<button style={{
						position: 'absolute',
						background: 'transparent',
						border: 'none',
						right: '20px',
					}}
						aria-label='close'
						onClick={() => {
							console.log('Close button has been clicked');
						}}>
						<img src={close_icon} alt="close" height="15px" width="15px"></img>
					</button>
					<p>Here is the list of notifications</p>
					<ul>
						{this.props.listNotification.length === 0 && (
							<li>No new notification for now</li>
						)}
						{
							this.props.listNotification.map(notification => (
								<NotificationItem key={notification.id}
								 type={notification.type} 
								 value={notification.value} 
								 html={notification.html} />
							))
						}
					</ul>
				</div>
			)}
		</>
	)
}
}
function markAsRead(id) {
	console.log(`Notification ${id} has been marked as read`);
}


Notifications.defaultProps = {
	displayDrawer: false,
	listNotification: [],
	markAsRead: () => {}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotification: PropTypes.array,
	markAsRead: PropTypes.func
}

export {Notifications, markAsRead};
