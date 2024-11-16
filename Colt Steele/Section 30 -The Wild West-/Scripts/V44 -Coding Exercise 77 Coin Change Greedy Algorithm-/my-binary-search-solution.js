const minCoinChange = (coinsArr, value) => {
  let arrOfWantedCoins = [];

  while(value > 0){
    let rightIdx = coinsArr.length - 1;
    let leftIdx = 0;
    let closestCoinsToValue;
    
    while(leftIdx <= rightIdx){
      let closestCoinsToValueIdx =  Math.floor((rightIdx + leftIdx) / 2);   
      closestCoinsToValue =  coinsArr[closestCoinsToValueIdx];

      if(closestCoinsToValue === value) break;

      if(closestCoinsToValue > value) rightIdx = closestCoinsToValueIdx - 1;
      else leftIdx = closestCoinsToValueIdx + 1;
    };

    if(rightIdx < 0) closestCoinsToValue = coinsArr[0];
    else if(leftIdx > coinsArr.length) closestCoinsToValue = coinsArr[coinsArr.length - 1];

    arrOfWantedCoins.push(closestCoinsToValue);
    value -= closestCoinsToValue;
  }

  return arrOfWantedCoins;
};

console.log(minCoinChange([1, 2, 3, 4, 5], 11));     // [5, 5, 1]
console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // [25, 25, 25, 10]
console.log(minCoinChange([1, 5, 6, 9], 11));        // [9, 1, 1]