const bubbleSort = (arr, comparatorFun) => {
  if(typeof comparatorFun !== "function"){
    let processedItems = 0;
    let sortedItemsAtEnd = 0;

    for (let i = 0; i < arr.length - sortedItemsAtEnd; i++) {
      processedItems = processedItems + sortedItemsAtEnd;
      for (let j = 0; j < arr.length - processedItems - 1; j++) {
        if(arr[j] <= arr[j + 1]) sortedItemsAtEnd++;
        else{
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          sortedItemsAtEnd = 0;        
        }
      }
      processedItems++;
    }

    return arr;    
  }

  let processedItems = 0;
  let sortedItemsAtEnd = 0;

  for (let i = 0; i < arr.length - sortedItemsAtEnd; i++) {
    processedItems = processedItems + sortedItemsAtEnd;
    for (let j = 0; j < arr.length - processedItems - 1; j++) {
      const result = comparatorFun(arr[j], arr[j + 1]);
      if(result > 0){
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    processedItems++;
  }

  return arr;  

};

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));     // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([1, 2, 4, 3, 5, 6, 7]));     // [1, 2, 3, 4, 5, 6, 7]
console.log(bubbleSort([0, -10, 7, 4]));            // [-10, 0, 4, 7]
console.log(bubbleSort([30, 77, 5, 90, 34, 89, 100, 0, -3, -7, 10])); 
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([]));
var arrOfNumbers = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(arrOfNumbers)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order