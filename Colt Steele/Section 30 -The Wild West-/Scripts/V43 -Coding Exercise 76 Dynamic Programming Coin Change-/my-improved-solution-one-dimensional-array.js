/*

  [
    => 1 [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    => 5 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6 ],
    => 10 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 12 ],
    => 25 [ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 13 ]
  ]

*/

const coinChange = (arr, wantedValue, i) => {
  let valuesPossibilities = 
    Array.from({ length: wantedValue + 1 }, (k, i) => i === 0 ? 1 : 0);

  for (let i = 0; i < arr.length; i++) {
    let currentCoin = arr[i]
    valuesPossibilities.forEach((item, itemIdx) => {
      previousItemVal = valuesPossibilities[itemIdx - currentCoin] ?? 0;
      valuesPossibilities[itemIdx] = previousItemVal + item;
    })
  };

  return valuesPossibilities[wantedValue];
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




