// Create a function named concatElements
import  Immutable  from   'immutable' ;

const concatElements = (page1, page2) => {
  const mylist = Immutable.List(page1);
  const mylist2 = Immutable.List(page2);
  return mylist.concat(mylist2);
}

function mergeElements(page1, page2){
  const mylist = Immutable.List(page1);
  const mylist2 = Immutable.List(page2);
  return mylist.merge(mylist2);
}

export {concatElements, mergeElements};