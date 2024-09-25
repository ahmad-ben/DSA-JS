const bubbleSort = (arr) => {
  let itemsProcessed = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    
    for (let j = 0; j < arr.length - 1 - itemsProcessed; j++) {
      if(arr[j] <= arr[j + 1]) continue;

      const currentVal = arr[j];
      arr[j] = arr[j + 1]; 
      arr[j + 1] = currentVal; 

    }

    itemsProcessed++;
  }

  console.log(arr);
} 

const firstArr = [7, 3, 2];
bubbleSort(firstArr);

const secondArr = [60, 77, 3, 35, 200, 90];
bubbleSort(secondArr);