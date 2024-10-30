const merge = (arr, start, mid, end, comparatorFun) => {
  if (typeof comparatorFun !== "function") comparatorFun = (a, b) => a - b;

  const leftArr = arr.slice(start, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;
  while (i < leftArr.length && j < rightArr.length) {
    if (comparatorFun(leftArr[i], rightArr[j]) <= 0) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
};

const mergeSort = (arr, start = 0, end = arr.length - 1, comparatorFun) => {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid, comparatorFun);
  mergeSort(arr, mid + 1, end, comparatorFun);
  merge(arr, start, mid, end, comparatorFun);
};

var arr1 = [1, 3, 4, 2, 5, 4, 9];
console.log(mergeSort(arr1)); 
console.log(arr1); 