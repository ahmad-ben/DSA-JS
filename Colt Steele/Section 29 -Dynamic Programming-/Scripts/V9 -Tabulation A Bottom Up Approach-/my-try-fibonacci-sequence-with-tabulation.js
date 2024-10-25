const fib = (degree) => {
  if(degree < 3) return 1;

  let prePreviousValue = 1, previousValue = 1;
  let currentValue;
  for (let i = 2; i < degree; i++) {
    currentValue = previousValue + prePreviousValue; 
    prePreviousValue = previousValue; 
    previousValue = currentValue; 
  }

  return currentValue;
};

console.log(fib(2));
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));
