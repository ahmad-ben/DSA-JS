/*

  Challenge:
    Given a sorted array of integers, Write a function called search. 
      That accepts a value and returns the index where the value passed to the function is located.
      If the value is not found, return -1

  Solution with the pattern:
    Since the array is sorted, we will try to start from the middle -Divide array length-:
      If the value of the middle index is what we want then return that index.
      If the value of the middle index is less that what we want:
        We should go to the middle of the right part, and do the comparison again.
      If the value of the middle index is bigger that what we want:
        We should go to the middle of the left part, and do the comparison again.
    When we should stop:
      We should stop if we return back to an index we already were there.
*/


const search = (arr, num) => {
  leftIdx = 0;
  rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx){
    middleIdx = Math.ceil((rightIdx + leftIdx) / 2);
    console.log("middle: ", middleIdx);
    if(arr[middleIdx] === num) return middleIdx;
    if(arr[middleIdx] > num) rightIdx = middleIdx - 1;
    else leftIdx = middleIdx + 1;
  }

  return -1;

}

console.log(search([1, 3, 4, 6], 4) )             //  2
console.log(search([1, 2, 4, 5, 6], 6))           //  4
console.log(search([1, 2, 3, 4, 5, 6], 11))       // -1
console.log(search([4, 6, 26, 33, 84, 99], 84))   //  4



