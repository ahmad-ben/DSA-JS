const sortedFrequency = (arr, countedNum) => {
  if(arr[0] > countedNum || arr[arr.length - 1] < countedNum) return -1;
  let leftPoint = 0, reputationVal = 0;
  let rightPoint = arr.length - 1;

  const countInHalf = (arr, leftPoint, rightPoint) => {
    while(leftPoint <= rightPoint){
      let midPointer = Math.floor((leftPoint + rightPoint) / 2);
      if(arr[midPointer] > countedNum) rightPoint = midPointer - 1;
      else{
        if(arr[midPointer] === countedNum) 
          reputationVal += midPointer - leftPoint + 1;
        leftPoint = midPointer + 1;
      }
    }
  }

  while(leftPoint <= rightPoint){
    let midPointer = Math.floor((leftPoint + rightPoint) / 2);

    if(arr[midPointer] < countedNum) leftPoint = midPointer + 1;
    else if(arr[midPointer] > countedNum) rightPoint = midPointer - 1;
    else{
      reputationVal++;
      countInHalf(arr, leftPoint, midPointer - 1);
      countInHalf(arr, midPointer + 1, rightPoint);
      break;        
    }
  }

  return reputationVal || -1;
};

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1