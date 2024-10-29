const selectionSort = (arr, comparatorFun) => {
  if(typeof comparatorFun !== "function") comparatorFun = (a, b) => a - b;

  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIdxVal = i;
    for (let j = i + 1; j < arr.length; j++) 
      if(comparatorFun(arr[smallestIdxVal], arr[j]) > 0) smallestIdxVal = j;
    
    [arr[i], arr[smallestIdxVal]] = [arr[smallestIdxVal], arr[i]];
  }

  return arr;
};

console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
console.log(selectionSort([]));
 
var arrNumbers = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(selectionSort(arrNumbers)); 
  // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
   
console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
  
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
  
console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
  