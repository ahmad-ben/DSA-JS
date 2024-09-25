/*

  Challenge:
    Write a function called averagePair. 
    Given a sorted array of integers and a target average. 
      Determine if there is a pair of values in the array: 
        Where the average of the pair equals the target average. 
      There may be more than one pair that matches the average target.
    Bonus Constraints:
      Time: O(N)
      Space: O(1)
    Inputs & Outputs Examples:
      averagePair([1, 2, 3], 2.5)                         // true
      averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)      // true
      averagePair([-1, 0, 3, 4, 5, 6],  4.1)              // false
      averagePair([], 4)                                  // false

*/

const averagePair = (arr, wantedAverage) => {
  if(arr.length === 0) return false;

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while(leftPointer < rightPointer){
    let average = (arr[leftPointer] + arr[rightPointer])/2;
    if(average === wantedAverage) return true;
    else if(average > wantedAverage) --rightPointer;
    else ++leftPointer;    
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6],  4.1));              
console.log(averagePair([], 4));                                  