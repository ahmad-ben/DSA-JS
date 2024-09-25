const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValIdx = i;

    for (let j = i + 1; j < arr.length; j++) 
      if(arr[minValIdx] > arr[j]) minValIdx = j;

    if(minValIdx === i) continue;

    let oldFirstValue = arr[i];
    arr[i] = arr[minValIdx];
    arr[minValIdx] = oldFirstValue;
  }

  return arr;
}

let firstArr = [10, 7, 2, 5];
console.log(selectionSort(firstArr));

let secondArr = [3, 15, 9, 6, 12];
console.log(selectionSort(secondArr));