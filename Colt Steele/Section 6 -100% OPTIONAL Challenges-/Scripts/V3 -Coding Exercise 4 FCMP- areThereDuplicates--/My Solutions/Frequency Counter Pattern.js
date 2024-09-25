/* Frequency Counter Pattern */

const areThereDuplicates = (...parametersArr) => {
  let parametersObj = {};

  for(parameter of parametersArr){
    if(parametersObj[parameter]) return true;
    else parametersObj[parameter] = true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

