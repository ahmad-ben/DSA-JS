/*

  Challenge:
    Write a function called productOfArray. 
    Which takes in an array of numbers and returns the product of them all.
    Inputs & Outputs Examples:
      productOfArray([1,2,3]) => 6
      productOfArray([1,2,3,10]) => 60

*/

const productOfArray = (arr) => {
  if(arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1,2,3]));    // 6
console.log(productOfArray([1,2,3,10])); // 60
console.log(productOfArray([2,5,20]));   // 200
