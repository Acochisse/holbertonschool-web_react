import {fromJS, getIn } from 'immutable';

export default function getImmutableObject(object) {
  return getIn(fromJS(object), array, undefined);
}
