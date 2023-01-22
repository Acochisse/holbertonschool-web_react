import React from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear, getLatestNotification } from '../utils/utils.js';
import Notification from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom.js';
import { BodySection } from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
		alignText: 'right',
		color: '#e01d1d',
		fontSize: '20px',
		borderBottom: '3px solid #e01d1d',
	},
	headerIMG: {
		width: '200px',
	},
	footer: {
		borderTop: '3px solid #e01d1d',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		position: 'fixed',
		bottom: '0',
		fontStyle:'italic',
	},
	body: {
		margin: '55px',
		justifyContent: 'center',
	},
});

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
	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}})};
	constructor(props) {
		super(props)
		
	}
	render() {
	return (
		<>
		<div>
			<Header />
		</div>
			<div className={`App-body ${css(styles.body)}`}>
				{this.props.isLoggedIn ? <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses={listCourses}/> </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title='Log in to continue'><Login /> </BodySectionWithMarginBottom>  }
				<BodySection title= "News from the school" >
					<p>The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is, is now the position that it wasn't, and it follows that the position that it was, is now the position that it isn't.
In the event that the position that it is in is not the position that it wasn't, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn't. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.
The missile guidance computer scenario works as follows. Because a variation has modified some of the information the missile has obtained, it is not sure just where it is. However, it is sure where it isn't, within reason, and it knows where it was. It now subtracts where it should be from where it wasn't, or vice-versa, and by differentiating this from the algebraic sum of where it shouldn't be, and where it was, it is able to obtain the deviation and its variation, which is called error.</p> </BodySection>
			</div>
			<div className={`App-footer ${css(styles.footer)}`}>
				<Footer />
			</div>
		</>
	)
	}
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
	logOut: () => {
	},
};

export { App, listCourses, listNotification };