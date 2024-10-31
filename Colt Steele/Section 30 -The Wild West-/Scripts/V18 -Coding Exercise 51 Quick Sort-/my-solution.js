const pivot = (arr, comparatorFun, startIdx = 0, endIdx = arr.length - 1) => {
  if(typeof comparatorFun !== "function") comparatorFun = (a, b) => a - b;
  let futurePivotIdx = startIdx;
  for (let i = startIdx + 1; i <= endIdx; i++) {
    if(comparatorFun(arr[startIdx], arr[i]) <= 0) continue;
    futurePivotIdx++;
    [arr[futurePivotIdx], arr[i]] = [arr[i], arr[futurePivotIdx]];
  }
  if(futurePivotIdx !== startIdx) 
    [arr[futurePivotIdx], arr[startIdx]] = [arr[startIdx], arr[futurePivotIdx]];
  return futurePivotIdx;
};

const quickSort = (arr, comparatorFun, startIdx = 0, endIdx = arr.length - 1) => {
  if(endIdx - startIdx < 1) return arr;
  
  const pivotIdx = pivot(arr, comparatorFun, startIdx, endIdx);

  quickSort(arr, comparatorFun, startIdx, pivotIdx -1);
  quickSort(arr, comparatorFun, pivotIdx + 1, endIdx);

  return arr;
};

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3]; 
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const arr4 = [3, 2, 1, 5, 4];
 
function strLength(a, b) {
  return a.length - b.length
}
 
console.log(quickSort([4, 20, 12, 10, 7, 9]));   // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4]));          // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3]));               // [1, 2, 3]
console.log(quickSort([]));
 
var arrNumbers = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(arrNumbers)); 
  // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(quickSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
console.log(quickSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
 

 


