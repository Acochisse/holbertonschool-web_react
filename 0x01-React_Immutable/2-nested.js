import { fromJS, getIn } from 'immutable';

export default function accessImmutableObject2(object, array) {
  return fromJS(object).getIn(array);
}
