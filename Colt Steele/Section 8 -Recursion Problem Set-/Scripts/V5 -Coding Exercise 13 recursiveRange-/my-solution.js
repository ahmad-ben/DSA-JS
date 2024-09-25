/* 

  Challenge:
    Write a function called recursiveRange.
    Which accepts a number and adds up all the numbers from 0 to the number passed to the function. 
    Inputs & Outputs Examples:
      recursiveRange(6)  => 21
      recursiveRange(10) => 55 

*/

const recursiveRange = (num) => {
  if(num === 1) return 1;
  return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6));  // 21
console.log(recursiveRange(10)); // 55 
