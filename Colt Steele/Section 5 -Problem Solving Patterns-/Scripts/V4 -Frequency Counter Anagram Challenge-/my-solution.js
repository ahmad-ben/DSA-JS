const areTheyAnagram = (strOne, strTwo) => {
  if(strOne.length !== strTwo.length) return false;
  
  let strOneCounterObj = {};
  let strTwoCounterObj = {};

  for(char of strOne) strOneCounterObj[char] = ++strOneCounterObj[char] || 1;
  for(char of strTwo) strTwoCounterObj[char] = ++strTwoCounterObj[char] || 1;

  for(key in strOneCounterObj){
    if(
      !(strTwoCounterObj[key]) || 
      !(strOneCounterObj[key] === strTwoCounterObj[key])  
    ) return false;
  }

  return true;
}


const stringExampleOne = "ahmed";
const stringExampleOneAnagram = "hmade";

const stringExampleTwo = "fatima";
const stringExampleTwoAnagram = "fatmai";

const stringExampleThree = "mohammed";
const stringExampleThreeAnagram = "mhemmado";

console.log(areTheyAnagram(stringExampleOne, stringExampleOneAnagram));
console.log(areTheyAnagram(stringExampleOne, stringExampleTwoAnagram));
console.log(areTheyAnagram(stringExampleTwo, stringExampleTwoAnagram));
console.log(areTheyAnagram(stringExampleTwo, stringExampleThreeAnagram));
console.log(areTheyAnagram(stringExampleThree, stringExampleThreeAnagram));
console.log(areTheyAnagram(stringExampleThree, stringExampleOneAnagram));