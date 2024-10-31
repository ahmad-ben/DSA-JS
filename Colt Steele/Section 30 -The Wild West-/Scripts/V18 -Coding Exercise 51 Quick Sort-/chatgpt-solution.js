const quickSort = (arr, comparatorFun = (a, b) => a - b, startIdx = 0, endIdx = arr.length - 1) => {
  if (startIdx < endIdx) {
    const pivotIdx = partition(arr, comparatorFun, startIdx, endIdx);
    quickSort(arr, comparatorFun, startIdx, pivotIdx - 1);
    quickSort(arr, comparatorFun, pivotIdx + 1, endIdx);
  }
  return arr;
};

const partition = (arr, comparatorFun, startIdx, endIdx) => {
  const pivot = arr[endIdx];
  let i = startIdx - 1;
  for (let j = startIdx; j < endIdx; j++) {
    if (comparatorFun(arr[j], pivot) < 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[endIdx]] = [arr[endIdx], arr[i + 1]];
  return i + 1;
};
