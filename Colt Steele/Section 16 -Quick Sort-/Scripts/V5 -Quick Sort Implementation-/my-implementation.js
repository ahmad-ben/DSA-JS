const swap = (arr, idxOne, idxTwo) => 
  [arr[idxOne], arr[idxTwo]] = [arr[idxTwo], arr[idxOne]];

const orderFirstItemInArr = (arr, start, end) => {
  const firstItem = arr[start];
  let idxOfSmallNum = start;

  for (let i = start + 1; i <= end; i++) {
    if(arr[i] < firstItem){
      idxOfSmallNum++;
      swap(arr, i, idxOfSmallNum);
    }
  }
  
  swap(arr, start, idxOfSmallNum);

  return idxOfSmallNum;
}


const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if(start >= end) return;

  const pivotIdx = orderFirstItemInArr(arr, start, end);

  quickSort(arr, start, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, end);

  return arr;
}

let firstArr = [30, 5, 47, 9];
console.log(quickSort(firstArr));

let secondArr = [50 ,13, 44, 92, 9, 88, 5, 23];
console.log(quickSort(secondArr));

let thirdArr = [44, 37, 2, 18, 55, 99];
console.log(quickSort(thirdArr));

