// Create a function named concatElements
import  {List, Map}  from   'immutable' ;

function concatElements(page1, page2) {
  return List.concat(page1, page2);
}

// Create a function named mergeElements using Map from immutable
//if one of the values pairs is the same, use the values of page2

function mergeElements(page1, page2) {
  return Map.merge(page1, page2);
}

module.exports = {concatElements, mergeElements};
