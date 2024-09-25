const mergeSortedArrays = (firstArr, secondArr) => {
  let newSortedArr = [];

  let idxOfFirstArr = 0;
  let idxOfSecondArr = 0;

  while(idxOfFirstArr < firstArr.length || idxOfSecondArr < secondArr.length){
    let firstArrItem = firstArr[idxOfFirstArr];
    let secondArrItem = secondArr[idxOfSecondArr];

    if(firstArrItem > secondArrItem || firstArrItem === undefined){
      newSortedArr.push(secondArrItem);
      idxOfSecondArr++;
      continue;
    }

    newSortedArr.push(firstArrItem);
    idxOfFirstArr++;
  }

  return newSortedArr;
};

const mergeSort = (arr) => {
  if(arr.length <= 1 ) return arr;
  
  let middle = Math.ceil(arr.length / 2); 
  let rightSortedArr = mergeSort(arr.slice(0, middle));
  let leftSortedArr = mergeSort(arr.slice(middle));

  return mergeSortedArrays(rightSortedArr, leftSortedArr);
};

const firstArr = [9, 5, 1, 3];
console.log(mergeSort(firstArr)); //=> [ 1, 3, 5, 9 ]

const secondArr = [15, 4, 1, 3, 30, 6, 12];
console.log(mergeSort(secondArr)); //=> [ 1,  3,  4, 6, 12, 15, 30 ]

const thirdArr = [20, 90, 13, 5];
console.log(mergeSort(thirdArr)); //=> [5, 13, 20, 90];

const forthArr = [24, 55, 11, 36, 3, 10, 47];
console.log(mergeSort(forthArr)); //=> [3, 10, 11, 24, 36, 47, 55];

const fifthArr = [];
console.log(mergeSort(fifthArr));

const sixthArr = [22, 12];
console.log(mergeSort(sixthArr));


