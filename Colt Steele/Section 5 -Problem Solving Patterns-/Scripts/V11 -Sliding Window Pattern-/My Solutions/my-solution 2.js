/*

  The whole idea here is:
    We need to loop over the wanted consecutive numbers just once.
      And from that's place we can just add the new value and remove the first one.
        Since the numbers should be consecutive as we said.

*/

const maxSubarraySum = (arr, numbersNum) => {
  if(numbersNum > arr.length) return null;

  let maxValue = previousValue = 0;

  for (firstIdx = 0; firstIdx < arr.length - numbersNum + 1; firstIdx++) {
    let lastIdx = firstIdx + numbersNum - 1;
    if(firstIdx === 0) 
      for (let j = 0; j <= lastIdx; j++) previousValue = maxValue += arr[j];
    else 
      previousValue = previousValue - arr[firstIdx - 1] + arr[lastIdx];
      if(maxValue < previousValue) maxValue = previousValue;
  }

  return maxValue;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2));   // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));   // 17
console.log(maxSubarraySum([4,2,1,6],1));         // 6
console.log(maxSubarraySum([4,2,1,6,2],4));       // 13
console.log(maxSubarraySum([],4));                // null