import React from 'react';
import { App } from '../App/App';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    }
    
  render(){
    console.log(this.props)
    const styles = StyleSheet.create({
      notifU: {
        color: 'red',
        '@media (max-width: 900px)': {
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: '10px 8px',
          listStyleType: 'none',
          marginLeft: -40
        }
      },
      notifN: {
        color: 'blue',
        '@media (max-width: 900px)': {
          width: '100%',
          borderBottomStyle: 'solid',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: '10px 8px',
          listStyleType: 'none',
          marginLeft: -40
        }
      },
    })
  if (this.props.value) {
    if (this.props.type == 'urgent') return(<li  className={`${css(styles.notifU)}`} data-notification-type={this.props.type} onClick={() => {this.props.markNotificationAsRead(this.props.id)}}>{this.props.value}</li>)
    else
      return(<li  className={`${css(styles.notifN)}`}  data-notification-type={this.props.type} onClick={() => {this.props.markNotificationAsRead(this.props.id)}}>{this.props.value}</li>)}
  if (this.props.html) return(<li className={`${css(styles.notifU)}`} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => {this.props.markNotificationAsRead(this.props.id)}}></li>)
  return (<li className={`${css(styles.notifN)}`} data-notification-type={this.props.type} onClick={() => {this.props.markNotificationAsRead(this.props.id)}}></li>)
};
}

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({__html: propTypes.string,}),
  id: propTypes.number,
  markNotificationAsRead: propTypes.func,
  listNotifications: propTypes.array
}

NotificationItem.defaultProps = {
  type: '',
  value: '',
  html: {},
  id: 0,
  markNotificationAsRead: () => {},
  listNotifications: []
}

export default NotificationItem;