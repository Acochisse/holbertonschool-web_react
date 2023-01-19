import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import propTypes from 'prop-types';




const Notification = ({ displayDrawer, listNotification }) => {
	return (
		<>
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			{displayDrawer && (
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
						{listNotification.length === 0 && (
							<li>No new notification for now</li>
						)}
						{
							listNotification.map(notification => (
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


Notification.defaultProps = {
	displayDrawer: false,
	listNotification: []
}

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotification: propTypes.array
}

export default Notification