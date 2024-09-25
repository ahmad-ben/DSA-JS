/* 

  Since the array is sorted we will follow this strategy:
    We will start from the edge and do the sum, we have then three possibilities:
      The sum is 0, so we complete the missions.
      The sum is greater than 0, so we should reduce the numbers and that's by:
        Move the right index, since we have a sorted array this is the way to  do it.
      The sum is greater than 0, so we should increase the numbers and that's by:
        Move the left index, since we have a sorted array this is the way to do it.
      If the index of the two element is the same: 
        that's mean all the possibilities don't achieve our goal.

*/

const pairArrSumZero = (arr) => {
  let leftIdx = 0 
  let rightIdx = arr.length - 1;

  while(leftIdx !== rightIdx){
    const leftPointer = arr[leftIdx];
    const rightPointer = arr[rightIdx];
    if(leftPointer + rightPointer === 0) return [leftPointer, rightPointer];
    if(leftPointer + rightPointer > 0) --rightIdx;
    else ++leftIdx;
  }

  return false;
}

const arrOne = [-3, -2, -1, 0, 1, 2, 3];
const arrTwo = [-2, 0, 1, 3];
const arrThree = [1, 2, 3];
const arrFour = [-34, -25, -12, -10, -5, 0, 1, 2, 5, 13, 30, 90];

// console.log(pairArrSumZero(arrOne));
// console.log(pairArrSumZero(arrTwo));
// console.log(pairArrSumZero(arrThree));
// console.log(pairArrSumZero(arrFour));

/*
  Time Complexity - O(N)
  Space Complexity - O(1)
*/