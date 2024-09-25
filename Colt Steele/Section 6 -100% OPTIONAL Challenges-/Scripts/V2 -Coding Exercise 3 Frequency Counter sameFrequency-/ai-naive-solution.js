const sameFrequencyNaive = (firstNum, secondNum) => {
  let firstNumArr = `${firstNum}`.split('');
  let secondNumArr = `${secondNum}`.split('');

  if (firstNumArr.length !== secondNumArr.length) return false;

  for (let i = 0; i < firstNumArr.length; i++) {
    let found = false;
    for (let j = 0; j < secondNumArr.length; j++) {
      if (firstNumArr[i] === secondNumArr[j]) {
        secondNumArr.splice(j, 1);
        found = true;
        break;
      }
    }
    if (!found) return false;
  }

  return true;
}
