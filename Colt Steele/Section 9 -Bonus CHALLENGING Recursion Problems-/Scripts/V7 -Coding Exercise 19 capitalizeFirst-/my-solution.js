/*

  Challenge:
    Write a recursive function called capitalizeFirst. 
    Given an array of strings, capitalize the first letter of each string in the array.
    Inputs & Outputs Examples:
      capitalizeFirst(['car','taco','banana']); => ['Car','Taco','Banana']

*/

const capitalizeFirst = (arr) =>{
  arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  if(arr.length === 1) return arr;

  return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']