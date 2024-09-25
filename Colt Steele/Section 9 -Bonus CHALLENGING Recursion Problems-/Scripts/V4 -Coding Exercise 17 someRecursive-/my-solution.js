/*

  Challenge:
    Write a recursive function called someRecursive. 
    Which accepts an array and a callback. 
    The function returns: 
      True if a single value in the array returns true when passed to the callback. 
      False otherwise.
    Inputs & Outputs Examples:
      const isOdd = val => val % 2 !== 0;
      someRecursive([1,2,3,4], isOdd)           => true
      someRecursive([4,6,8,9], isOdd)           => true
      someRecursive([4,6,8], isOdd)             => false
      someRecursive([4,6,8], val => val > 10);  => false

*/

const someRecursive = (arr, checkFun) => {  
  if(arr.length === 0) return false;
  if(checkFun(arr[0]) === true) return true;
  return someRecursive(arr.slice(1), checkFun);
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd));           // true
console.log(someRecursive([4,6,8,9], isOdd));           // true
console.log(someRecursive([4,6,8], isOdd));             // false
console.log(someRecursive([4,6,8], val => val > 10));   // false