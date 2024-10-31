/*
  Goode implementation but they starts from the left and i want it from right.
    
  const getDigitByNum = (num, digitNum) => {
    const value = num.toString()[digitNum - 1];
    return value || null;
  }

  const getDigitByNum = (num, digitNum) => num.toString()[digitNum - 1] || null;
*/

const getDigitByNum = (num, digitNum) => {
  const numAsString = num.toString();
  const value = numAsString[numAsString.length - 1 - digitNum];
  return value || null;
}

const firstNum = 123456;
console.log(getDigitByNum(firstNum, 0));
console.log(getDigitByNum(firstNum, 1));
console.log(getDigitByNum(firstNum, 3));
console.log(getDigitByNum(firstNum, 10));

