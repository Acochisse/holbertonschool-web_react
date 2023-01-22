import propTypes from "prop-types";
import React, { Component } from "react";


const CourseShape = propTypes.shape({
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  credit: propTypes.number.isRequired
});




export default CourseShape;
