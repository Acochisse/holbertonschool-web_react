import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2){
  const mylist = Immutable.List(page1);
  const mylist2 = Immutable.List(page2);
  return mylist.mergeDeep(mylist2);
}

export default mergeDeeplyElements;
