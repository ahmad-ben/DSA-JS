/* 

  Challenge:
    Write a function called stringifyNumbers.
    It takes an object and finds all of the values which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!
    The exercise intends for you to create a new object with the numbers converted to strings. 
      Do not modify the original. Keep the original object unchanged.
    Inputs & Outputs Examples:
      Example 1:
        let obj = {
          num: 1,
          test: [],
          data: {
            val: 4,
            info: {
              isRight: true,
              random: 66
            }
          }
        }
        stringifyNumbers(obj)
          {
            num: "1",
            test: [],
            data: {
              val: "4",
              info: {
                isRight: true,
                random: "66"
              }
            }
          }

*/

const stringifyNumbers = (obj) => {
  let currentConvertedObj = {};
  
  for (const key in obj) {
    if(typeof obj[key] === "number") 
      currentConvertedObj[key] = obj[key].toString();

    else if(typeof obj[key] === "object" && !Array.isArray(obj[key])) 
      currentConvertedObj[key] = stringifyNumbers(obj[key]);

    else currentConvertedObj[key] = obj[key];
  }

  return currentConvertedObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(obj);
console.log(stringifyNumbers(obj));
