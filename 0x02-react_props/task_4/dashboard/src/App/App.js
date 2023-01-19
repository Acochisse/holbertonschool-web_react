import React from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import propTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

const App = ({ isLoggedIn }) => {
	return (
		<div className="App">
			<Header />
			<div className="App-body">
				{isLoggedIn ? <CourseList /> : <Login />}
			</div>
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	)
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;