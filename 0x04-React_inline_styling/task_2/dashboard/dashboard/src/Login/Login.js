import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: "55",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      
  },
},
});



export default class App extends Component {
	render() {
    return (
      <div className={`${css(styles.login)}`}>
      <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    )}
  };
