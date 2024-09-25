/*

  Challenge:
    Write a recursive function called fib. 
    Which accepts a number and returns the nth number in the Fibonacci sequence. 
      the Fibonacci sequence is: 
        The sequence of whole numbers 1, 1, 2, 3, 5, 8, etc. 
        Which starts with 1 and 1. 
        Where every number thereafter is equal to the sum of the previous two numbers.
    Inputs & Outputs Examples:
      fib(4)  => 3
      fib(10) => 55
      fib(28) => 317811
      fib(35) => 9227465

*/

const fib = (num) => {
  if(num === 1 || num === 2 ) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(4));  // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465