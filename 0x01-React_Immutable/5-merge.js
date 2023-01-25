// Create a function named concatElements
import  {List, Map}  from   'immutable' ;

function concatElements(page1, page2){
  return List.concat(page1, page2);
}

function mergeElements(page1, page2){
  return Map.merge(page1, page2);
}

export {concatElements, mergeElements};
