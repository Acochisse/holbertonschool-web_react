const {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} = require('../actions/courseActionTypes')
const {Map} = require('immutable');
const {normalize} = require('normalizr');
const {courseNormalizer} = require('../schema/courses');

const courses = [
  {
    id: 1,
    name: "ES6",
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20
  },
  {
    id: 3,
    name: "React",
    credit: 40
  }
]
const immCourses = []
for (course in courses) {
  let holder = Map(course)
  immCourses.push(holder)
}
const coursesSuccess = {
  type: FETCH_COURSE_SUCCESS,
  data: immCourses
}
const course0 = [];

function courseReducer(action) {
  let courseR = []
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      for (course in action.data) {
        holder = course.withMutations((course) => {
          course.set(isSelected, false)
        })
        holder = courseNormalizer(holder);
        courseR.push(holder)
      }
      return courseR
    case SELECT_COURSE:
      for (course in action.data) {
        if (course.id === action.index){
          holder = course.withMutations((course) => {
            course.set(isSelected, true)
          })
          courseR.push(holder)
        } else {
          courseR.push(course)
        }
      }
      return courseR
    case UNSELECT_COURSE:
      for (course in action.data) {
        if (course.id === action.index){
          holder = course.withMutations((course) => {
            course.set(isSelected, false)
          })
          courseR.push(holder)
        } else {
          courseR.push(course)
        }
      }
      return courseR
    default:
      return course0
  }
}