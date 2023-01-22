import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import propTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
	CourseList: {
			width: '100%',
			borderStyle: 'solid',
			borderWidth: '2px',
			borderColor: 'grey',
			
	},
	
})


const CourseList = ({ listCourses }) => {
	return (
		<table className={`CourseList ${css(styles.CourseList)}`}>
			<thead>
				<CourseListRow isHeader={true} textFirstCell="Available Courses" />
				<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody id="CourseBody">
				{listCourses.length === 0 && (
					<tr>
						<td>No course available yet</td>
					</tr>
				)}
				{listCourses.map(course => (
					<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
				))}
			</tbody>
		</table>
	)
}

CourseList.propTypes = {
  listCourses: propTypes.array
}

CourseList.defaultProps = {
  listCourses: []
}


export default CourseList;