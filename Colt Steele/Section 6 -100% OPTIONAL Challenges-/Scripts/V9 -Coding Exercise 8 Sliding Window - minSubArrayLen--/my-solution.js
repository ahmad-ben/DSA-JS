/*

  Challenge
    Write a function called minSubArrayLen, which accepts two parameters: 
      Array of positive integers and a positive integer.
    This function should return, the minimal length of a contiguous subArray of which: 
      The sum is greater than or equal to the integer passed to the function. 
      If there isn't one, return 0 instead.
    Inputs & Outputs Examples:
      minSubArrayLen([2,3,1,2,4,3], 7)                  // 2 -> [4,3] is the smallest subArray
      minSubArrayLen([2,1,6,5,4], 9)                    // 2 -> [5,4] is the smallest subArray
      minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)  // 1 -> [62] is greater than 52
      minSubArrayLen([1,4,16,22,5,7,8,9,10],39)         // 3
      minSubArrayLen([1,4,16,22,5,7,8,9,10],55)         // 5
      minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)         // 2
      minSubArrayLen([1,4,16,22,5,7,8,9,10],95)         // 0
    Constraints:
      Time Complexity  - O(n)
      Space Complexity - O(1)

*/









const minSubArrayLen = (arr, num) => {
  let leftPointer = 0;
  let rightPointer = 1;
  let currentCount = 0;
  let arrSmallestLength = Infinity; 

  currentCount = arr[leftPointer] + arr[rightPointer];

  while(rightPointer < arr.length){
    if(currentCount >= num){
      const currentArrLength = rightPointer - leftPointer + 1;
      if(currentArrLength < arrSmallestLength) arrSmallestLength = currentArrLength;
      currentCount -= arr[leftPointer];
      leftPointer++;
    }else{
      rightPointer++;
      currentCount += arr[rightPointer];
    }
  }

  if(arrSmallestLength === Infinity) return 0;
  return arrSmallestLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7) )                // 2 -> [4,3] the smallest subArray
console.log(minSubArrayLen([2,1,6,5,4], 9))                   // 2 -> [5,4] the smallest subArray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> [62]  is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39) )       // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)   )     // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) )       // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95) )       // 0