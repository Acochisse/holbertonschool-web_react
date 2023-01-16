import React from 'react';
import holberton_logo from './holberton-logo.jpg';
import './App.css';
import './utils.js';
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <>
    <div className="App-header">
      <img src={holberton_logo} alt='logo'/>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>login to access the full dashboard</p> 
    </div>
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
    </div>
  </>
  );
}


export default App;
