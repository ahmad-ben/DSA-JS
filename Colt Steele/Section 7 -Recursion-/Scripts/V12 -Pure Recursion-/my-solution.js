getOddNumbers = (arr, currentIdx) => {
  if(currentIdx === arr.length) return arr;

  if(arr[currentIdx] % 2 === 0) arr.splice(currentIdx, 1);
  else currentIdx++;

  return getOddNumbers(arr, currentIdx);
}


console.log(getOddNumbers([12, 15, 18, 24, 99], 0));
console.log(getOddNumbers([12, 15, 18, 24, 80], 0));