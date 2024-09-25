/* 
const sameFrequency = (firstNum, secondNum) => {
  let firstNumArr = `${firstNum}`.split('').map(Number);
  let secondNumArr = `${secondNum}`.split('').map(Number);

  if(firstNumArr.length !== secondNumArr.length) return false;

  let firstNumObj = {};
  let secondNumObj = {};

  firstNumArr.map(item => firstNumObj[item] = ++firstNumObj[item] || 1);
  secondNumArr.map(item => secondNumObj[item] = ++secondNumObj[item] || 1);

  for(key in firstNumObj) 
    if(secondNumObj[key] !== firstNumObj[key]) return false;

  return true; 

}
*/

const sameFrequency = (firstNum, secondNum) => {
  let firstNumArr = `${firstNum}`.split('').map(Number);
  let secondNumArr = `${secondNum}`.split('').map(Number);

  if(firstNumArr.length !== secondNumArr.length) return false;

  let firstNumObj = {};

  firstNumArr.forEach(item => firstNumObj[item] = ++firstNumObj[item] || 1);

  for (let num of secondNumArr) {
    if(firstNumObj[num]) --firstNumObj[num];
    else return false;
  }

  return true; 
}

console.log(sameFrequency(182, 281))          // true
console.log(sameFrequency(34, 14) )           // false
console.log(sameFrequency(3589578, 5879385))  // true
console.log(sameFrequency(22, 222)   )        // false