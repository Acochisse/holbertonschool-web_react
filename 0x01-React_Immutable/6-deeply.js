import Immutable from 'immutable';

function mergeDeeplyElements(page1, page2){
  const mylist = Immutable.Map(page1);
  const mylist2 = Immutable.Map(page2);
  return mylist.mergeDeep(mylist2);
}

export default mergeDeeplyElements;
