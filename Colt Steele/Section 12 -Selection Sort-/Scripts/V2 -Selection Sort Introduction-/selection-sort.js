const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let idxOfMinVal = i;
    let minVal = arr[idxOfMinVal];

    for (let j = i + 1; j < arr.length; j++) {
      if(minVal <= arr[j]) continue;

      minVal = arr[j];
      idxOfMinVal = j;
    }

    if(idxOfMinVal === i) continue;

    arr[idxOfMinVal] = arr[i];
    arr[i] = minVal;
  }

  return arr;
}

let firstArr = [10, 7, 2, 5];
console.log(selectionSort(firstArr));

let secondArr = [3, 15, 9, 6, 12];
console.log(selectionSort(secondArr));