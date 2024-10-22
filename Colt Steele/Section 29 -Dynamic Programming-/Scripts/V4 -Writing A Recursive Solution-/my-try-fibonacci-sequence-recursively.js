const fib = (degree) => {
  if(degree < 3) return 1;
  return fib(degree - 1) + fib(degree - 2);
};

/*
  1, 2, 3, 4, 5, 6,  7,  8,  9, 10
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55   
*/

// console.log(fib(2)); 
// console.log(fib(4)); 
// console.log(fib(5)); 
// console.log(fib(8)); 
// console.log(fib(10));

// Measure Execution Time for fib (without memoization)
console.time('Normal Fibonacci');
console.log('Normal Result:', fib(30)); // Gives 13.737ms
console.timeEnd('Normal Fibonacci');


