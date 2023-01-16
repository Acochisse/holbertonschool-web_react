import React from 'react';
import holberton_logo from './assets/holberton-logo.jpg';
import './App.css';
import './utils.js';
import { getFooterCopy, getFullYear } from '.utils/utils.js';

function App() {
  return (
    <>
    <div className="App-header">
      <img src={holberton_logo} alt='logo'/>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
    <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" name="password" />
      <button>OK</button>
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
    </div>
  </>
  );
}


export default App;
