import React from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear, getLatestNotification } from '../utils/utils.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import propTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

const listNotification = [
	{id: 1, type: 'default', value: 'New course available'},
	{id: 2, type: 'urgent', value: 'New resume available'},
	{id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
]

const listCourses = [
  {id:1, name:'ES6', credit: 60},
  {id:2, name:'Webpack', credit: 20},
  {id:3, name:'React', credit: 40},
];
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
	return (
		<div className="App">
			<Header />
			<div className="App-body">
				{this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
			</div>
			<div className="App-footer">
				<Footer />
			</div>
		</div>
	)
	}
}


App.propTypes = {
  isLoggedIn: propTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;