import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'
import CourseShape from './CourseShape';
import propTypes from 'prop-types';


const CourseList = ({ listCourses }) => {
	return (
		<table id="CourseList">
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