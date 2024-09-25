const pairArrSumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return false;
}

const arrOne = [-3, -2, -1, 0, 1, 2, 3];
const arrTwo = [-2, 0, 1, 3];
const arrThree = [1, 2, 3];

console.log(pairArrSumZero(arrOne));
console.log(pairArrSumZero(arrTwo));
console.log(pairArrSumZero(arrThree));

/*
  Time Complexity - O(N²)
  Space Complexity - O(1)
*/