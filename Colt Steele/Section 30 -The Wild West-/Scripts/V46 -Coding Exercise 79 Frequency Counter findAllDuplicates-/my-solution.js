const findAllDuplicates = (arr) => {
  let duplicatesVal = [], valuesObj = {};
  arr.forEach(v => !valuesObj[v] ? valuesObj[v] = true : duplicatesVal.push(v))
  return duplicatesVal;
};

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));          // array has 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0]));            // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));   // array has 3, 2, and 1