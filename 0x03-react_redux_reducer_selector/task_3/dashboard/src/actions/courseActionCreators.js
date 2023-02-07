const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes");
const { bindActionCreators } = require("redux");

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

const courseActions = {
  selectCourse,
  unselectCourse
}

// use bindActionCreators to bind the action creators to dispatch and export them

module.exports = bindActionCreators(courseActions, dispatch);