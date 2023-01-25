import {fromJS, getIn } from 'immutable';

export default function getImmutableObject(object, array) {
  return getIn(fromJS(array), object);
}
