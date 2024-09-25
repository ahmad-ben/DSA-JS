/*

  Challenge:
    Given an array of integers and a number. 
    Write a function called maxSubArraySum, which: 
      Finds the maximum sum of a subArray with the length of the number passed to the function.
        Note that a subArray must consist of consecutive elements from the original array. 
    Inputs & Outputs Examples:
      maxSubArraySum([100,200,300,400], 2)        // 700
      maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)   // 39 
      maxSubArraySum([-3,4,0,-2,6,-1], 2)         // 5
      maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)   // 5
      maxSubArraySum([2,3], 3)                    // null
    Constraints:
      Time Complexity  - O(N)
      Space Complexity - O(1)

*/

const maxSubArraySum = (arr, num) => {
  if(arr.length < num) return null;

  let maxSum = 0;

  for (let i = 0; i < num; i++) maxSum += arr[i]; 

  let previousValue = maxSum;

  for (let j = 1; j < arr.length; j++) {
    previousValue = previousValue - arr[j-1] + arr[j + num - 1];
    if(previousValue > maxSum) maxSum = previousValue; 
  }

  return maxSum;
}


console.log(maxSubArraySum([100,200,300,400], 2));        // 700
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4));   // 39 
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2));         // 5
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2));   // 5
console.log(maxSubArraySum([2,3], 3));                    // null