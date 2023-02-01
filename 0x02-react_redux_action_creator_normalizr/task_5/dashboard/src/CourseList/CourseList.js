import CourseListRow from './CourseListRow'
import React from 'react';
import CourseShape from './CourseShape';
import propTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite'

function CourseList({listCourses}) {
  const styles = StyleSheet.create({
    Clist: {
    width:'100%',
    borderStyle: 'solid',
    borderSolor: 'grey',
    borderSidth: 2,
    }
  })
  return (
    <table className={`${css(styles.Clist)}`}>
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true}/>
        <CourseListRow textFirstCell="Course Name" textSecondCell='Credit' isHeader={true}/>
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <tr>
            <td>No course available yet</td>
          </tr>
        )}
        {
          listCourses.map(course => (
            <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit} />
          ))
        }
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