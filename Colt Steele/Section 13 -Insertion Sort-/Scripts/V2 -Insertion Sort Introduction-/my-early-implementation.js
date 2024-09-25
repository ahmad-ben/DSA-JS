const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const valToSort = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if(valToSort > arr[j]){
        arr[j + 1] = valToSort;
        break;
      }

      arr[j + 1] = arr[j];
      if(j === 0) arr[j] = valToSort;
    }
    
  }
  return arr;
}

let firstArr = [3, 1, 5, 2, 4];
console.log(insertionSort(firstArr));

let secondArr = [78, 33, 3, 15];
console.log(insertionSort(secondArr));

let thirdArr = [67, 18, 34, 29, 50];
console.log(insertionSort(thirdArr));
