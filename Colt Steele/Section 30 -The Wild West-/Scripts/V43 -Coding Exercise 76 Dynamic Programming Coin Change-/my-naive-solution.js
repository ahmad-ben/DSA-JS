const coinChange = (arr, wantedValue, i) => {
  let possibilitiesNumber = 0;
  let denominationsDuplicates = {};

  const check = (currentDenomination, wantedValue, currentIdx) => {
    if(denominationsDuplicates[currentDenomination]){
      let idx = 0;
      while(denominationsDuplicates[currentDenomination][idx] <= wantedValue){
        if(denominationsDuplicates[currentDenomination][idx] === wantedValue){
          possibilitiesNumber++;
          break;
        }
        const leftValue = wantedValue - denominationsDuplicates[currentDenomination][idx]; 
        for (let j = currentIdx - 1; j >= 0; j--) {
          check(arr[j], leftValue, j);
        }
        idx++;
      }

      return possibilitiesNumber;
    }else{
      if(wantedValue >= currentDenomination){
        let currentDenominationsVal = currentDenomination;
        while(currentDenominationsVal <= wantedValue){
          if(denominationsDuplicates[currentDenomination]){
            denominationsDuplicates[currentDenomination].push(currentDenominationsVal);
          }else {
            denominationsDuplicates[currentDenomination] = [currentDenominationsVal];
          };

          if(currentDenominationsVal === wantedValue){
            possibilitiesNumber++;
            break;
          }else{
            let leftValue = wantedValue - currentDenominationsVal;
            for (let j = currentIdx - 1; j >= 0; j--) {
              check(arr[j], leftValue, j);
            }
            currentDenominationsVal += currentDenomination;
          }

        }
      }  
    }

    
  };

  for (let i = 0; i < arr.length; i++) {
    let currentDenomination = arr[i];
    check(currentDenomination, wantedValue, i);
  }

  return possibilitiesNumber;
};

const denominations = [1, 5, 10, 25];

console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45)) // 39
console.log(coinChange(denominations, 100)) // 242
console.log(coinChange(denominations, 145)) // 622
console.log(coinChange(denominations, 1451)) // 425663
// console.log(coinChange(denominations, 14511))  409222339 => Very slow, inefficient solution 🥲.