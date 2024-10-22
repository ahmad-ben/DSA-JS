let alreadyCalculatedDegrees = {1: 1, 2: 1};

const fib = (degree) => {
  if(alreadyCalculatedDegrees[degree]) return alreadyCalculatedDegrees[degree];

  const result = fib(degree - 1) + fib(degree - 2);
  alreadyCalculatedDegrees[degree] = result; 
  return result; 
};

// Measure Execution Time for fib (with memoization)
console.time('Memoized Fibonacci');
console.log('Memoized Result:', fib(30)); // Gives 5.248ms 
console.timeEnd('Memoized Fibonacci');

/*
  In ../V4 -Writing A Recursive Solution-/my-try-fibonacci-sequence-recursively.js 
    It seems that our idea works!!
*/






