const bubbleSort = (arr) => {
  for (let i = arr.length; i > 1; i--) {

    for (let j = 0; j < i - 1; j++) {
      if(arr[j] <= arr[j + 1]) continue;

      const currentVal = arr[j];
      arr[j] = arr[j + 1] ;
      arr[j + 1] = currentVal; 
    }

  }

  return arr;
} 

const firstArr = [3, 4, 2];
console.log(bubbleSort(firstArr));

const secondArr = [100, 50, 900, 20, 5];
console.log(bubbleSort(secondArr));