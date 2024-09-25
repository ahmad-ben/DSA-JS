/*
  TIME  COMPLEXITY: O(n)
  SPACE COMPLEXITY: O(1)
*/
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

/*
  TIME  COMPLEXITY: O(n)
  SPACE COMPLEXITY: O(n)
*/
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(2 * arr[i]);
  return newArr;
}