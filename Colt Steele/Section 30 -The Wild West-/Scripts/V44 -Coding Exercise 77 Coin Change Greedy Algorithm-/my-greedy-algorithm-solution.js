const minCoinChange = (coinsArr, value) => {
  let arrOfWantedCoins = [];
  let currentValue = 0;
  let idxOfCoin = coinsArr.length - 1;

  while(currentValue < value && idxOfCoin >= 0){
    if(currentValue + coinsArr[idxOfCoin] > value) idxOfCoin--;
    else{
      currentValue += coinsArr[idxOfCoin];
      arrOfWantedCoins.push(coinsArr[idxOfCoin]);
    }
  }

  return arrOfWantedCoins;
};

console.log(minCoinChange([1, 2, 3, 4, 5], 11));     // [5, 5, 1]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // [25, 25, 25, 10]
console.log(minCoinChange([1, 5, 6, 9], 11));        // [9, 1, 1]