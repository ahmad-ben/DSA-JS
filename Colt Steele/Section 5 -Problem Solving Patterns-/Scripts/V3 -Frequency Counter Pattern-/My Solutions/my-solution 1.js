/*

For each number in the first arr we should: 
  Have its squared value in the second array.
  That squared value should been seen before.
We will ignore inputs checking validation.
Inputs are:
  2 array, full of numbers. 
Output is:
  Boolean.
    If the 2 conditions happen should be true, if no should be false. 

Solutions:
  ! -----------------------------------------------------------------------------------------------
  The second arr -that hold the squared value-:
  Should have the same length of the first arr or more. 
  I can loop over the first arr, and for each item:
  Loop over the second array, and see if there a squared value for it:
  If yes: Remove that item in the second array -by the index-. and complete the same process. 
  If no: Return false since the conditions didn't happen.
  => This solution is: 
  O(n²) Time complexity.
  O(n) Space complexity.
  
  ! -----------------------------------------------------------------------------------------------
  Create 2 objects.
  One for the first array, and the other for the second.
  Loop over the both array and for each item:
  If it's a key in the objects increment it's value by 1.
  If it's not add the item as a key and make its value 1.
  After finishing:
  Loop over the first obj, for each key:
  a squared value of it as a key in the second object.
  They values should be the same.
  => This solution is: 
  O(n) Time complexity.
  O(n) Space complexity.

*/


// The first solution:
const areTheyMatchedOne = (arrOne, arrTwo) => {
  if(arrOne.length > arrTwo.length) return false;
  let numberOfMatchedItems = 0;

  arrOne.forEach(arrOneItem => {
    arrOneItemSquared = arrOneItem * arrOneItem;

    for (let idx = 0; idx < arrTwo.length; idx++) {
      if(arrOneItemSquared === arrTwo[idx]){
        arrTwo.splice(idx, 1);
        numberOfMatchedItems++;
        break;
      }
      if(idx + 1 === arrTwo.length) break;
    }

  });

  if(numberOfMatchedItems === arrOne.length) return true;
  return false;
}


let arrExampleOne = [1, 2, 3];
let arrExampleOneSquared = [1, 4, 9];

let arrExampleTwo = [3, 6, 9, 12];
let arrExampleTwoSquared = [144, 36, 81, 9];

let arrExampleThree = [2, 4, 6, 8, 10];
let arrExampleThreeSquared = [36, 64, 100, 4, 16];

console.log("******* FALSE", areTheyMatchedOne(arrExampleTwo, arrExampleOneSquared));
console.log("******* FALSE", areTheyMatchedOne(arrExampleOne, arrExampleThreeSquared));
console.log("******* FALSE", areTheyMatchedOne(arrExampleThree, arrExampleTwoSquared));
console.log("******* TRUE", areTheyMatchedOne(arrExampleOne, arrExampleOneSquared));


arrExampleOne = [1, 2, 3];
arrExampleOneSquared = [1, 4, 9];

arrExampleTwo = [3, 6, 9, 12];
arrExampleTwoSquared = [144, 36, 81, 9];

arrExampleThree = [2, 4, 6, 8, 10];
arrExampleThreeSquared = [36, 64, 100, 4, 16];


console.log("******* TRUE", areTheyMatchedOne(arrExampleThree, arrExampleThreeSquared));
console.log("******* TRUE", areTheyMatchedOne(arrExampleTwo, arrExampleTwoSquared));
