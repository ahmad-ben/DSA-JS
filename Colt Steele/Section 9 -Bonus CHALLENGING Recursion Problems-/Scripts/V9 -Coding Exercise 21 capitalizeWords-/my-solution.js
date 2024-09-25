/*

  Challenge:
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized.
    Inputs & Outputs Examples:
      Example 1:
        let words = ['i', 'am', 'learning', 'recursion'];
        capitalizeWords(words); => ['I', 'AM', 'LEARNING', 'RECURSION']
      Example 2:
        let words = ['here', 'we', 'go'];
        capitalizeWords(words); => ['HERE', 'WE', 'GO']

*/

const capitalizeWords = (arr) => {
  arr[0] = arr[0].toUpperCase();

  if (arr.length === 1) return arr;

  return [arr[0]].concat(capitalizeWords(arr.slice(1)));
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));  // ['I', 'AM', 'LEARNING', 'RECURSION']

words = ['here', 'we', 'go'];
console.log(capitalizeWords(words));  // ['HERE', 'WE', 'GO']

