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
}

var arr1 = [1,3,4,5];
var arr2 = [2,4,6,8];
console.log(merge(arr1,arr2)); // [1,2,3,4,4,5,6,8]

var arr3 = [-2,-1,0,4,5,6];
var arr4 = [-3,-2,-1,2,3,5,7,8];
console.log(merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

var arr5 = [3,4,5]
var arr6 = [1,2]
console.log(merge(arr5,arr6)); // [1,2,3,4,5]

var names = ["Bob", "Ethel", "Christine"]
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

function stringLengthComparator(str1, str2) {
return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]