const bubbleSort = (arr) => {
  let alreadySortedSets = 0;

  for (let i = arr.length; i > 1 + alreadySortedSets; i--) {
    const alreadySortedSetsSec = alreadySortedSets; 

    for (let j = 0; j < i - 1 - alreadySortedSetsSec; j++) {
      // console.log(
      //   "Current value: ", arr[j], 
      //   "Next Value:", arr[j + 1],
      //   "alreadySortedSets", alreadySortedSets
      // );
      
      if(arr[j] <= arr[j + 1]) alreadySortedSets ++;
      else{
        const currentVal = arr[j];
        arr[j] = arr[j + 1] ;
        arr[j + 1] = currentVal; 
        alreadySortedSets = 0;
      }
    }

  }

  return arr;
} 

const firstArr = [3, 4, 2];
console.log(bubbleSort(firstArr));      //=> [2, 3, 4];

const secondArr = [1, 7, 2, 9, 12, 15];
console.log(bubbleSort(secondArr));     //=> [1, 2, 7, 9, 12, 15];

const thirdArr = [1, 7, 2, 9, 12, 15, 3, 100, 300, 900];
console.log(bubbleSort(thirdArr));      //=> [1, 2, 3, 7, 9, 12, 15, 100, 300, 900];

const forthArr = [1, 2, 3, 4, 5, 6];
console.log(bubbleSort(forthArr));      //=> [1, 2, 3, 4, 5, 6];