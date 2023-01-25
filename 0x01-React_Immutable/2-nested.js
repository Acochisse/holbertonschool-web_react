import {fromJS, getIn } from 'immutable';


//Given the function below, edit it to return the value of the object at the defined path
// The first argument is a plain object
// The second one is an array containing a list of a path to some key in the object
// The function should return the value of the object at the defined path

export default function accessImmutableObject2(object, array) {
  return fromJS(object).getIn(array);
}