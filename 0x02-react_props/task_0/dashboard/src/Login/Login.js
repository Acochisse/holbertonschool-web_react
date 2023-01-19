import React, { Component } from 'react';
import './Login.css';

export default class App extends Component {
	render() {
    return (
      <div className="App-body">
      <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    )}
}
