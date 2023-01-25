// Create a function named concatElements
import  Immutable  from   'immutable' ;

function concatElements(page1, page2){
  return List.concat(page1, page2);
}

function mergeElements(page1, page2){
  return List.merge(page1, page2);
}

export {concatElements, mergeElements};
