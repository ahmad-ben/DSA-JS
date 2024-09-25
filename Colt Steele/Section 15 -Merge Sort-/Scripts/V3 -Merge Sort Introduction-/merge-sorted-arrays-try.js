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

const firstArr = [2, 5, 7, 9];
const secondArr = [1, 3, 4, 6, 12, 15, 30];
console.log(mergeSortedArrays(firstArr, secondArr));

const thirdArr = [13, 20, 55, 90];
const forthArr = [12, 22, 24, 36, 55, 78, 100];
console.log(mergeSortedArrays(thirdArr, forthArr));

const fifthArr = [];
const sixthArr = [12, 22];
console.log(mergeSortedArrays(fifthArr, sixthArr));