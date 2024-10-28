const sortedFrequency = (arr, countedNum) => {
  if(arr[0] > countedNum || arr[arr.length - 1] < countedNum) return -1;
  let leftPoint = 0;
  let rightPoint = arr.length - 1;

  const findLeftEdge = () => {
    while(leftPoint <= rightPoint){
      let midPoint = Math.floor((leftPoint + rightPoint) / 2);
      let currentItem = arr[midPoint];

      if(currentItem < countedNum) leftPoint = midPoint + 1;
      else if(currentItem > countedNum) rightPoint = midPoint - 1;
      else {
        if(rightPoint === midPoint) break;
        rightPoint = midPoint
      };
    }

    if (arr[rightPoint] === countedNum) return rightPoint;
  }

  const leftEdge = findLeftEdge();
  if(leftEdge === undefined) return -1;

  const findRightEdge = () => {
    leftPoint = 0;
    rightPoint = arr.length - 1;

    while(leftPoint <= rightPoint){
      let midPoint = Math.floor((leftPoint + rightPoint) / 2);
      let currentItem = arr[midPoint];

      if(currentItem < countedNum) leftPoint = midPoint + 1;
      else if(currentItem > countedNum) rightPoint = midPoint - 1;
      else {
        if(leftPoint === midPoint) break;
        leftPoint = midPoint
      };
    }

    if (arr[leftPoint] === countedNum) return leftPoint;
  }

  const rightEdge = findRightEdge();
  return rightEdge - leftEdge + 1;
};

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1