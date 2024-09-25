const factorial = (num) => {
  if(num === 1) return 1;
  return num * factorial(num - 1);
}

/*

  Shortest version:
    const factorial = num => num === 1 ? num : num * factorial(num - 1);

*/

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));