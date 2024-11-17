/*

  Constraints:
    Solve this with the following requirements-:
      Time Complexity Requirement is O(n log n).
      Space Complexity Requirement is O(1).
  Inputs & Outputs Examples:
    findPair([6,1,4,10,2,4], 2)       // true
    findPair([8,6,2,4,1,0,2,5,13],1)  // true
    findPair([4,-2,3,10],-6)          // true
    findPair([6,1,4,10,2,4], 22)      // false
    findPair([], 0)                   // false
    findPair([5,5], 0)                // true
    findPair([-4,4], -8)              // true
    findPair([-4,4], 8)               // true
    findPair([1,3,4,6],-2)            // true
    findPair([0,1,3,4,6],-2)          // true

*/

const findPair = (arr, difference) => {
  arr.sort((a, b) => a - b);
  difference = Math.abs(difference);
  let leftIdx = 0, rightIdx = 1;

  while(rightIdx < arr.length){ 
    if(arr[rightIdx] - arr[leftIdx] === difference) return true;

    if(arr[rightIdx] - arr[leftIdx] < difference) rightIdx++;
    else{
      leftIdx++;
      if(leftIdx === rightIdx) rightIdx++;
    };
  }

  return false;
};

console.log(findPair([6,1,4,10,2,4], 2));       // true
console.log(findPair([8,6,2,4,1,0,2,5,13],1))   // true
console.log(findPair([4,-2,3,10],-6))           // true
console.log(findPair([6,1,4,10,2,4], 22))       // false
console.log(findPair([], 0))                    // false
console.log(findPair([5,5], 0))                 // true
console.log(findPair([-4,4], -8))               // true
console.log(findPair([-4,4], 8))                // true
console.log(findPair([1,3,4,6],-2))             // true
console.log(findPair([0,1,3,4,6],-2))           // true
