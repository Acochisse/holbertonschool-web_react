import Immutable from 'immutable';

function areMapsEqual(map1, map2) {
  return Immutable.is(map1, map2)

}

export default areMapsEqual;
