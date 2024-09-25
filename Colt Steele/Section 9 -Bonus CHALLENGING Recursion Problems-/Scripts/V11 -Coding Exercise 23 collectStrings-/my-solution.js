/*

  Challenge:
    Write a function called collectStrings. 
    Accepts an object and returns an array of all object values that have a typeof string.
    Inputs & Outputs Examples:
      Example 1:
        const obj = {
          stuff: "foo",
          data: {
            val: {
              thing: {
                info: "bar",
                moreInfo: {
                  evenMoreInfo: {
                    weMadeIt: "baz"
                  }
                }
              }
            }
          }
        }
        collectStrings(obj) => ["foo", "bar", "baz"];
      Example 2:
        const obj = {one: "strOne", two: {twoOne: 1, twoTwo: "strTwo"}, three: 3, four: "strThree"}
        collectStrings(obj) => ["strOne", "strTwo", "strThree"];

*/

const collectStrings = (obj) => {
  let arrOfStrings = [];

  for (const key in obj) {
    if(typeof obj[key] === "object") 
      arrOfStrings = arrOfStrings.concat(collectStrings(obj[key]));

    if(typeof obj[key] === "string") arrOfStrings.push(obj[key]);
  }

  return arrOfStrings;
}

let obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}
console.log(collectStrings(obj));     // ["foo", "bar", "baz"];

obj = {one: "strOne", two: {twoOne: 1, twoTwo: "strTwo"}, three: 3, four: "strThree"}
console.log(collectStrings(obj));     // ["strOne", "strTwo", "strThree"];
