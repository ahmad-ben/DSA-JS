/*

  Challenge:
    Write a recursive function called flatten. 
    Which accepts an array of arrays and returns a new array with all values flattened.
    Inputs & Outputs Examples:
      flatten([1, 2, 3, [4, 5] ])                   // [1, 2, 3, 4, 5]
      flatten([1, [2, [3, 4], [[5]]]])              // [1, 2, 3, 4, 5]
      flatten([[1],[2],[3]])                        // [1,2,3]
      flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])  // [1,2,3]

*/

const flatten = (arr) => {
  if(arr.length === 0) return [];

  if(Array.isArray(arr[0])) 
    return flatten(arr[0]).concat(flatten(arr.slice(1)));

  return [arr[0]].concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5] ]));                   // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]) )              // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])  )                       // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))   // [1,2,3]



