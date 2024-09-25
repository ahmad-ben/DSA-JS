/*

  Challenge
    Write a function called maxSubarraySum. 
      Accepts an array of integers and a number called n. 
      The function should calculate the maximum sum of n consecutive elements in the array.
  Outputs & Inputs examples:
    maxSubarraySum([1,2,5,2,8,1,5],2) // 10
    maxSubarraySum([1,2,5,2,8,1,5],4) // 17
    maxSubarraySum([4,2,1,6],1) // 6
    maxSubarraySum([4,2,1,6,2],4) // 13
    maxSubarraySum([],4) // null

  Approach steps:
    First compare the consecutiveNumbersNumber if its long than the arr length:
      return null;
    Use the for loop to loop ove the array.
    Use the slice method to cut the portion of the array that we need.
    Use another loop to calculate the sum there.
      O(n²) Time complexity.
      O(n) Space complexity.
        => Bad approach obviously.
*/



const maxSubarraySum = (arr, numbersNum) => {
  if(numbersNum > arr.length) return null;

  let maxValue = 0; //=> For negative numbers we should have the value as -Infinity.

  for (let i = 0; i < arr.length; i++) { //=> i < arr.length - num + 1; is better
    const currentNumbersArr = arr.slice(i, i + numbersNum);
    let arrValuesSum = 0;

    for (let j = 0; j < currentNumbersArr.length; j++)
      arrValuesSum += currentNumbersArr[j];

    if(maxValue < arrValuesSum) maxValue = arrValuesSum; //=> 0 > negative numbers. 
  }

  return maxValue;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2));   // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));   // 17
console.log(maxSubarraySum([4,2,1,6],1));         // 6
console.log(maxSubarraySum([4,2,1,6,2],4));       // 13
console.log(maxSubarraySum([],4));                // null


