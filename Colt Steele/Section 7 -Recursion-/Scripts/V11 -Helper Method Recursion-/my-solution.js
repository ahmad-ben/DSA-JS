const oddNumbersOfArr = (arr) => {
  let oddNumbersArr = [];

  const isFirstNumOdd = (arr) => {
    if(arr.length === 0) return;
    if(arr[0] % 2 !== 0) oddNumbersArr.push(arr[0]);
    isFirstNumOdd(arr.slice(1));
  }

  isFirstNumOdd(arr);

  console.log(oddNumbersArr);
}

oddNumbersOfArr([1, 6, 3, 5, 8, 10, 19]);
oddNumbersOfArr([12, 15, 18, 24, 99]);