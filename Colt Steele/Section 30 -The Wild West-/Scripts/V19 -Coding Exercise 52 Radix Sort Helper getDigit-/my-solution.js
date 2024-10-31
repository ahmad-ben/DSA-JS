function getDigitFirstApproach(num, i) {
  const numberAsString = num.toString();
  return Number(numberAsString[numberAsString.length - 1 - i]) || 0;
};

const getDigitSecondApproach = (n, i) => Math.trunc(n / Math.pow(10, i)) % 10;

console.log(getDigitFirstApproach(12345, 0)); // 5
console.log(getDigitFirstApproach(12345, 1)); // 4
console.log(getDigitFirstApproach(12345, 2)); // 3
console.log(getDigitFirstApproach(12345, 3)); // 2
console.log(getDigitFirstApproach(12345, 4)); // 1
console.log(getDigitFirstApproach(12345, 5)); // 0
 
console.log(getDigitSecondApproach(8987, 0)); // 7
console.log(getDigitSecondApproach(8987, 1)); // 8
console.log(getDigitSecondApproach(8987, 2)); // 9
console.log(getDigitSecondApproach(8987, 3)); // 8
console.log(getDigitSecondApproach(8987, 4)); // 0



function getDigitFirstApproach(num, i) {
  return Math.trunc(num / Math.pow(10, i)) % 10
};