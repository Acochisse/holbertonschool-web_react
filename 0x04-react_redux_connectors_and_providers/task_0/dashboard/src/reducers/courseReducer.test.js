const {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} = require('../actions/courseActionTypes')
const {toJS} = require('immutable')
const uiReducer = require('./uiReducer');

describe('courseReducer', () => {
  it('Should return default state', () => {
    expect(uiReducer().toEqual(
      []
    )
    )})});

    describe('courseReducer action:FETCH', () => {
      it('Should return unselected list', () => {
        expect(uiReducer(FETCH_COURSE_SUCCESS).toJS.toEqual(
          [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ]
        )
        )})});

describe('courseReducer action: SELECT', () => {
  it('Should return selected course state', () => {
    expect(uiReducer(SELECT_COURSE).toJS.toEqual(
      [
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: false,
          credit: 20
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40
        }
      ]
    )
    )})});