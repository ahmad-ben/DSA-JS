const merge = (firstArr, secondArr, comparatorFun) => {
  if(typeof comparatorFun !== "function") comparatorFun = (a, b) => a - b;
  let sortedArr = [];
  let firstArrIdx = 0, secondArrIdx = 0;

  while(firstArrIdx < firstArr.length && secondArrIdx < secondArr.length){
    if(comparatorFun(firstArr[firstArrIdx], secondArr[secondArrIdx]) > 0){
      sortedArr.push(secondArr[secondArrIdx]);
      secondArrIdx++;
    }else{
      sortedArr.push(firstArr[firstArrIdx]);
      firstArrIdx++;
    }
  }

  while(firstArrIdx < firstArr.length){
    sortedArr.push(firstArr[firstArrIdx]);
    firstArrIdx++;
  }

  while(secondArrIdx < secondArr.length){
    sortedArr.push(secondArr[secondArrIdx]);
    secondArrIdx++;
  }

  return sortedArr;
};

const mergeSort = (arr, comparatorFun) => {
  if(arr.length <= 1) return arr;

  let middlePoint = Math.floor(arr.length / 2);
  const firstPart = mergeSort(arr.slice(0, middlePoint), comparatorFun);
  const secondPart = mergeSort(arr.slice(middlePoint, arr.length), comparatorFun);

  console.log(firstPart, secondPart);
  return merge(firstPart, secondPart, comparatorFun);
}

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
mergeSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSort(nums)); 
  // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
  
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
  
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
  
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order