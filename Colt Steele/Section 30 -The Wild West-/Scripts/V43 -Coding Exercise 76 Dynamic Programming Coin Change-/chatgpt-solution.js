const coinChange = (arr, wantedValue) => {
  const memo = {}; // Memoization object

  const check = (wantedValue, idx) => {

    if (wantedValue === 0) return 1; // Found a valid combination
    if (wantedValue < 0 || idx < 0) return 0; // Invalid case

    const key = `${wantedValue}_${idx}`; // Create a unique key
    if (key in memo) return memo[key]; // Return cached result

    // Either include the current coin or exclude it
    const include = check(wantedValue - arr[idx], idx);
    const exclude = check(wantedValue, idx - 1);

    memo[key] = include + exclude; // Cache the result    
    return memo[key];
  };
  
  return check(wantedValue, arr.length - 1);
};

const denominations = [1, 5, 10, 25] //25

console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45)) // 39
console.log(coinChange(denominations, 100)) // 242
console.log(coinChange(denominations, 145)) // 622
console.log(coinChange(denominations, 1451)) // 425663
console.log(coinChange(denominations, 14511)) // 409222339

/*
  {
    '1_0': 1,
    '2_0': 1,
    '3_0': 1,
    '4_0': 1,
    '5_0': 1,
    '5_1': 2,
    '5_2': 2,
    '6_0': 1,
    '7_0': 1,
    '8_0': 1,
    '9_0': 1,
    '10_0': 1,
    '10_1': 3,
    '11_0': 1,
    '12_0': 1,
    '13_0': 1,
    '14_0': 1,
    '15_0': 1,
    '15_1': 4,
    '15_2': 6,
    '16_0': 1,
    '17_0': 1,
    '18_0': 1,
    '19_0': 1,
    '20_0': 1,
    '20_1': 5,
    '21_0': 1,
    '22_0': 1,
    '23_0': 1,
    '24_0': 1,
    '25_0': 1,
    '25_1': 6,
    '25_2': 12,
    '25_3': 13
  }

  => Order handling:
  {
    '1_0': 1,
    '2_0': 1,
    '3_0': 1,
    '4_0': 1,
    '5_0': 1,
    '6_0': 1,
    '7_0': 1,
    '8_0': 1,
    '9_0': 1,
    '10_0': 1,
    '11_0': 1,
    '12_0': 1,
    '13_0': 1,
    '14_0': 1,
    '15_0': 1,
    '16_0': 1,
    '17_0': 1,
    '18_0': 1,
    '19_0': 1,
    '20_0': 1,
    '21_0': 1,
    '22_0': 1,
    '23_0': 1,
    '24_0': 1,
    '25_0': 1,

    '5_1': 2,
    '10_1': 3,
    '15_1': 4,
    '20_1': 5,
    '25_1': 6,

    '5_2': 2,
    '15_2': 6,
    '25_2': 12,

    '25_3': 13
  }
*/

/*

  ??? How this is exactly working. 

*/