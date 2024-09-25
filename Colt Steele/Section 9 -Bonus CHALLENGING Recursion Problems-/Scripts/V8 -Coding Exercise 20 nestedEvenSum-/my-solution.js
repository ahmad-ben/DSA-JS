/*

  Challenge:
    Write a recursive function called nestedEvenSum. 
    Return the sum of all even numbers in an object which may contain nested objects.
    Inputs & Outputs Examples:
      Example 1:
        let obj1 = {
          outer: 2,
          obj: {
            inner: 2,
            otherObj: {
              superInner: 2,
              notANumber: true,
              alsoNotANumber: "yup"
            }
          }
        }
        nestedEvenSum(obj1);  => 6
      Example 2:
        let obj2 = {
          a: 2,
          b: {b: 2, bb: {b: 3, bb: {b: 2}}},
          c: {c: {c: 2}, cc: 'ball', ccc: 5},
          d: 1,
          e: {e: {e: 2}, ee: 'car'}
        };
        nestedEvenSum(obj2);  => 10

*/

const nestedEvenSum = (obj) => {
  let objTotal = 0;

  for (const key in obj) {
    if(typeof obj[key] === "object") objTotal += nestedEvenSum(obj[key]);
    
    if(typeof obj[key] === "number" && obj[key] % 2 === 0) 
      objTotal += obj[key];
  }

  return objTotal;
};

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}
console.log(nestedEvenSum(obj1));  // 6

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj2));  // 10
