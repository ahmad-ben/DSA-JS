/*

  Challenge:
    Write a function called binarySearch.
    Which accepts a sorted array and a value.
      If the value exists it returns the index at which of it, Otherwise return -1.
    This algorithm should be more efficient than linearSearch. 
      You can read how to implement it in these two place.
        www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
        www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
    Inputs & Outputs Examples:
      binarySearch([1,2,3,4,5],2) => 1
      binarySearch([1,2,3,4,5],3) => 2
      binarySearch([1,2,3,4,5],5) => 4
      binarySearch([1,2,3,4,5],6) => -1
      binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
      ], 10) => 2
      binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
      ], 95) => 16
      binarySearch([
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
        40, 44, 64, 79, 84, 86, 95, 96, 98, 99
      ], 100) => -1    

*/

const binarySearch = (arr, num) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while(leftIdx <= rightIdx) {
    let middle = Math.ceil((leftIdx + rightIdx) / 2);

    if(arr[middle] === num) return middle;
    else if(arr[middle] > num) rightIdx = middle - 1;
    else leftIdx = middle + 1;
  }

  return -1;
};

console.log(binarySearch([1,2,3,4,5],2)); //1
console.log(binarySearch([1,2,3,4,5],3)); //2
console.log(binarySearch([1,2,3,4,5],5)); //4
console.log(binarySearch([1,2,3,4,5],6)); //-1


console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); //2

console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); //16

console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); //-1  
