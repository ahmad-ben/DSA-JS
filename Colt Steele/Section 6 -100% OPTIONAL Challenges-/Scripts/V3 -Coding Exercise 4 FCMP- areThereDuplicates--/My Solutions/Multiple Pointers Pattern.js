/* Multiple Pointers Pattern */

const areThereDuplicates = (...parametersArr) => {
  parametersArr.sort();

  let pointerOne = 0;
  let pointerTwo = 1;

  while(pointerTwo < parametersArr.length){
    if(parametersArr[pointerOne] === parametersArr[pointerTwo]) return true;
    pointerTwo++; pointerOne++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));