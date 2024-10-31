const getDigit = (n, i) => Math.trunc(n / Math.pow(10, i)) % 10;

const digitCount = n => n === 0 ? 1 : Math.trunc(Math.log10(Math.abs(n))) + 1;

const mostDigits = (arr) => {
  let maxDigits = 0;
  arr.forEach(n => (digitCount(n) > maxDigits) && (maxDigits = digitCount(n)));
  return maxDigits;
};

const radixSort = (arr) => {
  let cellsContainer = new Array(10).fill().map(cell => []);
  const maxDigitsNum = mostDigits(arr);
  for (let i = 0; i < maxDigitsNum; i++) {
    for (let j = 0; j < arr.length; j++) cellsContainer[getDigit(arr[j], i)].push(arr[j]);
    arr = [].concat(...cellsContainer);
    cellsContainer = new Array(10).fill().map(cell => []);
  };
  return arr;
};

console.log(radixSort([2, 44, 1, 59, 2, 30])); //[1, 2, 3, 30, 44, 59]
console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
  // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
