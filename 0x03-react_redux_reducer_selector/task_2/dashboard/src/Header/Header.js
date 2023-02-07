import logo from '../assets/holberton_logo.jpg';
import React from 'react';
import {StyleSheet, css} from 'aphrodite'
import AppContext, { user } from '../App/AppContext';
import { useContext } from 'react';
import { App } from '../App/App';





function Header() {
  
  const styles = StyleSheet.create({
    Logo: {
      height: '40vmin',
      pointerEvents: 'none',
    }
  })
  const context = useContext(AppContext);


  return (
    <React.Fragment>
        <img src={logo} className={`${css(styles.Logo)}`} alt="logo" />
        <h1>
          School dashboard
        </h1>
        {context.user.isLoggedIn ? <p id='logoutSection'>Welcome {context.user.email}<span onClick={()=>{context.logOut()}}>(logout)</span></p> : <p></p>}
        </React.Fragment>)
}

export default Header;