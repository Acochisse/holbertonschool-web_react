import logo from '../assets/holberton_logo.jpg';
import year from '../utils/utils';
import React from 'react';
import getLatestNotification from "../Notifications/Notificationget"
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList'
import {displayDrawer} from '../Notifications/Notifications'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection';
import {StyleSheet, css} from 'aphrodite';
import userContext from './AppContext';
import {user} from './AppContext'
import { Notification } from '../Notifications/Notifications';


const listCourses = [
  {id:1, name:'ES6', credit: 60},
  {id:2, name:'Webpack', credit: 20},
  {id:3, name:'React', credit: 40},
];


class App extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h'){
        alert('Logging you out');
        this.props.logOut();
      }    })
  };
  constructor(props) {
    super(props);
    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course Available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
      ]
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password){
    console.log('changing state?')
    this.setState(
      (prevState) => ({
        user: {                   // object that we want to update
          ...prevState.user,
          email: email,
          password: password,
          isLoggedIn: true       // update the value of specific key
        }
    }))
  }

  logOut = () => { 
    this.setState({ user: {
      email: '',
      password: '',
      isLoggedIn: false
    }})
  }

  shouldComponentUpdate(prevState) {
    if (prevState !== this.state) {
      return true
    }
    return false
  }

  markNotificationAsRead(id) {
    const list = this.state.listNotifications
    this.setState({
      listNotifications: list.filter((notif) => {
      return notif.id !== id
      })});
  }

render() {
  const styles = StyleSheet.create({
    App:{
      textAlign: 'center'
    },
    footer: {
      fontStyle: 'italic',
      color: 'black',
    },
    body: {
      color: 'black',
      marginTop: 40,
      minHeight: 400,
      borderBottom: 'solid 2px red',
      textAlign: 'left'
    },
    AppH: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'red',
    borderBottom: 'solid 2px red',
    }
  })
  return (
    <userContext.Provider value={{
      user: this.state.user,
      logOut: this.state.logOut
    }}>
    <Notification listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead} logOut={this.logOut}/>
    <div className={`${css(styles.App)}`}>
      <header className={`${css(styles.AppH)}`}>
        <Header/>
      </header>
      <body className={`${css(styles.body)}`}>
      {this.state.user.isLoggedIn ? <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title='Log in to continue'><Login logIn={this.logIn}/></BodySectionWithMarginBottom>}
      <BodySection title='News from the school'>
        <p>The missile knows where it is by knowing where it isn't</p>
      </BodySection>
      </body>
      <footer className={`${css(styles.footer)}`}>
        <Footer/>
      </footer>
    </div>
    </userContext.Provider>
  )};
}

App.propTypes = {
}

App.defaultProps = {
}



export {App};