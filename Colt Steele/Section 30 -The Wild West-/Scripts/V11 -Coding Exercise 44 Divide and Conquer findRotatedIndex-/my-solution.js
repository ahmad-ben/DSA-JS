const findRotatedIndex = (arr, searchedValue) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let midIdx;

  while(leftIdx <= rightIdx){    
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let currentMid = arr[midIdx];

    if(currentMid === searchedValue) break;

    if(currentMid < arr[rightIdx]){
      if(searchedValue > currentMid && searchedValue <= arr[rightIdx])
        leftIdx = midIdx + 1;
      else rightIdx = midIdx - 1;
    }else{
      if(searchedValue >= arr[leftIdx] && searchedValue < currentMid)
        rightIdx = midIdx - 1;
      else leftIdx = midIdx + 1;
    }
  }

  return arr[midIdx] === searchedValue ? midIdx : -1;
};

console.log(findRotatedIndex([3,4,1,2],4) );                    // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) )    // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3))     // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14))         // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12))    // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5