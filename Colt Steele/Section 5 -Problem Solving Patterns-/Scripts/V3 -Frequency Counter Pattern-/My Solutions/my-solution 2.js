const areTheyMatched = (arrOne, arrTwo) => {
  if(arrOne.length !== arrTwo.length) return false;

  let objArrOne = {}; 
  let objArrTwo = {}; 
  let isTheyMatched = true;

  arrOne.forEach(item => objArrOne[item] = ++objArrOne[item] || 1);
  arrTwo.forEach(item => objArrTwo[item] = ++objArrTwo[item] || 1);

  for(key in objArrOne){
    const valueInFirstObj = objArrOne[key];
    const valueInSecondObj = objArrTwo[key ** 2];
    if(!valueInSecondObj || !(valueInFirstObj === valueInSecondObj)) 
      isTheyMatched = false;
  }
  
  return isTheyMatched;
}

const arrExampleOne = [1, 2, 3];
const arrExampleOneSquared = [1, 4, 9];

const arrExampleTwo = [3, 6, 9, 12];
const arrExampleTwoSquared = [144, 36, 81, 9];

const arrExampleThree = [2, 4, 6, 8, 10];
let arrExampleThreeSquared = [36, 64, 100, 4, 16];

console.log(areTheyMatched(arrExampleOne, arrExampleOneSquared));
console.log(areTheyMatched(arrExampleTwo, arrExampleTwoSquared));
console.log(areTheyMatched(arrExampleThree, arrExampleThreeSquared));
console.log(areTheyMatched(arrExampleTwo, arrExampleOneSquared));
console.log(areTheyMatched(arrExampleOne, arrExampleThreeSquared));
console.log(areTheyMatched(arrExampleThree, arrExampleTwoSquared));