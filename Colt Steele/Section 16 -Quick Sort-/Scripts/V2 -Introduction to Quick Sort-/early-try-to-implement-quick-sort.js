/*

  SEPARATE FUNCTION SPECIFIC FOR PUT AN ARRAY ELEMENT IN ITS CORRECT PLACE:
  const orderFirstItemInArr = (arr) => {
    const firstItem = arr[0];
    let bigItemIdx = arr.length - 1;
    let idxInArr = 1; 

    while(idxInArr <= bigItemIdx){
      if(firstItem > arr[idxInArr]) idxInArr++;
      else{
        console.log(firstItem, arr[idxInArr])
        const itemInBigItemIdx = arr[bigItemIdx];
        arr[bigItemIdx] = arr[idxInArr];
        arr[idxInArr] = itemInBigItemIdx;
        bigItemIdx--;
      }
    }

    arr[0] = arr[bigItemIdx];
    arr[bigItemIdx] = firstItem;
    
    return bigItemIdx;
  }

*/

const orderFirstItemInArr = (arr) => {
  const firstItem = arr[0];
  let bigItemIdx = arr.length - 1;
  let idxInArr = 1; 

  while(idxInArr <= bigItemIdx){
    if(firstItem > arr[idxInArr]) idxInArr++;
    else{
      console.log(firstItem, arr[idxInArr])
      const itemInBigItemIdx = arr[bigItemIdx];
      arr[bigItemIdx] = arr[idxInArr];
      arr[idxInArr] = itemInBigItemIdx;
      bigItemIdx--;
    }
  }

  arr[0] = arr[bigItemIdx];
  arr[bigItemIdx] = firstItem;
  
  return bigItemIdx;
}


const quickSort = (arr) => {
  if(arr.length <= 1) return arr;

  const bigItemIdx = orderFirstItemInArr(arr);

  const rightPart = arr.slice(0, bigItemIdx);
  const leftPart = arr.slice(bigItemIdx + 1);

  return quickSort(rightPart).concat(arr[bigItemIdx], quickSort(leftPart));
}

console.log(quickSort([30, 5, 47, 9, 80, 13, 126]));
console.log(quickSort([11, 33, 0, 55, 77, 99, 88, 22, 44, 66]));

