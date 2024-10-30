function insertionSort(arr, comparator = (a,b) => a - b){
  for (let i = 1; i < arr.length; i++) {
      let currVal = arr[i];
      let j = i - 1;
      // check if j >=0 first or it will break the comparator!!
      while(j >= 0 && comparator(arr[j], currVal) > 0 ) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = currVal;
  }
  return arr;
}