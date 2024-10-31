const digitCount = n => n === 0 ? 1 : Math.trunc(Math.log10(Math.abs(n))) + 1;

const mostDigits = (arr) => {
  let maxDigits = 0;
  arr.forEach(n => (digitCount(n) > maxDigits) && (maxDigits = digitCount(n)));
  return maxDigits;
};

console.log(mostDigits([1, 9, 10, 100, 99]));     // 3
console.log(mostDigits([100, 1010, 1, 500]));     // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([]));                      // 0