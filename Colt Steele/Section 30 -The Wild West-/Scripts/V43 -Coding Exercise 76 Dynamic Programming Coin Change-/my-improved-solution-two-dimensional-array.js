/*

  Create an array, holds inside it NUMBER OF COINS -DENOMINATIONS- of arrays.
  Each of the inner arrays:
    Has the VALUE WE WANT TO GET FROM THE DENOMINATIONS of the elements.
    The first item value is 1 in all of them.  
  
  We will loop over our inner array:
    The result of each element in our inner array should be the Sum of: 
      The value of element behind it by the sam amount of our value.
        If exist otherwise is just 0.
      The value of element in the previous denomination above it -the same index-.
        If exist otherwise is just 0.

===================================================================================================

  [
    => 1 [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    => 5 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6 ],
    => 10 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 12 ],
    => 25 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 13 ]
  ]

*/

const coinChange = (arr, wantedValue, i) => {
  let containerArr = Array.from({ length: arr.length }, () => 
    Array.from({ length: wantedValue + 1 }, (k, i) => i === 0 ? 1 : undefined)
  );

  containerArr.forEach((innerArr, innerArrIdx) => {
    innerArr.forEach((e, elementIdx) => {
      if(elementIdx === 0) return;

      let previousIdx = elementIdx - arr[innerArrIdx];
      let previousElementVal = innerArr[previousIdx] ?? 0;

      let prevInnerArrEleVal = containerArr[innerArrIdx - 1] ? 
        containerArr[innerArrIdx - 1][elementIdx] : 0;

      innerArr[elementIdx] = previousElementVal + prevInnerArrEleVal;
    });
  });
  
  return containerArr[arr.length - 1][wantedValue];
};

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1))     // 1
console.log(coinChange(denominations, 2))     // 1
console.log(coinChange(denominations, 5))     // 2
console.log(coinChange(denominations, 10))    // 4
console.log(coinChange(denominations, 25))    // 13
console.log(coinChange(denominations, 45))    // 39
console.log(coinChange(denominations, 100))   // 242
console.log(coinChange(denominations, 145))   // 622
console.log(coinChange(denominations, 1451))  // 425663
console.log(coinChange(denominations, 14511)) // 409222339