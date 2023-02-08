import React from 'react';
import NotificationItem from './NotificationItem';
import propTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'
import {App} from '../App/App';
import AppContext, { user } from '../App/AppContext';



class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    }
    
  }


  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }
  
  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  static contextType = AppContext;



  render(){
    const styles = StyleSheet.create({
      notifB: {
        borderStyle:  'solid',
        borderColor: 'red',
        borderWidth: 2,
        padding: 4,
        '@media (max-width: 900px)': {
          fontSize: 20,
          height: '100%',
          width: '100%',
          backgroundColor:'white',
          position:'fixed',
          top:0,
          left:0,
          zIndex: '1000',
        }
      },
      notifHead: {
        marginLeft: '45%',
        ':hover': {
          animationName: {
            '25%': {
              opacity: '0.5',
              transform: 'translateY(-5px)'
            },
            '75%': {
              opacity: '1',
              transform: 'translateY(5px)'
            }
          },
          animationDuration: '1s',
          animationIterationCount: '3',
        }

      }
    })
    if (this.props.displayDrawer)
  {return (
    <React.Fragment>
    {}
    <div className={`${css(styles.notifB)}`}>
      <button style={{'marginLeft':'95%', 'ariaLabel': 'Close'}} onClick={() =>{(this.handleHideDrawer())}}>X</button>
      <p>
      Here is the list of notifications
      </p>
      <ul>
        {this.props.listNotifications.length === 0 && (
          <li>No new notification for now</li>
        )}
        {
            this.props.listNotifications.map(notification => (
              <NotificationItem 
                          key={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          id ={notification.id}

                          logOut = {this.props.logOut}
                          listNotifications = {this.props.listNotifications}
                          markNotificationAsRead = {this.props.markNotificationAsRead}/>
            ))
          }
      </ul>
    </div>
    </React.Fragment>
  )} else return(
    <div className={`${css(styles.notifHead)}`} onClick={() => {this.handleDisplayDrawer()}}>
    <p>Your notifications</p>
    </div>
  )
}
}


function notifClick() {
  handleDisplayDrawer()
}

function closeButton() {
  console.log("Close button has been clicked");
  handleHideDrawer()
}


Notification.propTypes = {
  listNotifications: propTypes.array,
  markNotificationAsRead: propTypes.func,
  displayDrawer: propTypes.bool,
}

Notification.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {},
  displayDrawer: false,
}

export {Notification};