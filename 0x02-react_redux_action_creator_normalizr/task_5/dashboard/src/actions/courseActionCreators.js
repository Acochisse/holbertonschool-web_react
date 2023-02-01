const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes")

function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index
  }
}
function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index
  }
}

console.log(selectCourse(1));
console.log(unselectCourse(1));