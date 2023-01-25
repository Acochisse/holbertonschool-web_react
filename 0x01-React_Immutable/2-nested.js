import {fromJS, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  return getIn([array, object])
}
