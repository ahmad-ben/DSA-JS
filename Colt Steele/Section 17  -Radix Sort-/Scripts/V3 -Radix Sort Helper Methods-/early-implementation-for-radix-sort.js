/* 
  Create an array with tem array inside it.
    0 -> 9 indexes.
  Loop over our array for the first time. 
    Caring about the first number in the right, so as index is 0.
      Exactly like the number of iteration in this moment.
    If the right number is 0 put it in the array of index 0 in our big array.
      If it 1 put it in 1 and so on.
      We should put them in the subarray as the newest is the latest in array.
        Push Method.
      For pull them in the manner that make sure we:
        Order the element with one digit.
        Semi-Order the element with more than one digit but with similar next numbers.
    Keep doing these until find that all the number don't have a digit in that position.
      We should set up a variable in each iteration for this.
    Clean the bigArray -bucketsContainer- before each iteration.
*/

const createBucketsContainer = () => Array.from({ length: 10 }, () => []);

const getDigitByNum = (num, digitNum) => {
  const numAsString = num.toString();
  const value = numAsString[numAsString.length - 1 - digitNum];
  return value || null;
}

const radixSort = (arr) => {
  let digitIdx = 0;
  let aDigitIsNum = true;
  
  while(aDigitIsNum){
    const bucketContainer = createBucketsContainer(); 
    aDigitIsNum = false;

    for (let i = 0; i < arr.length; i++) {

      const currentDigit = getDigitByNum(arr[i], digitIdx);

      if(currentDigit === null) bucketContainer[0].push(arr[i]);
      else{
        aDigitIsNum = true;
        bucketContainer[currentDigit].push(arr[i]);
      }

    }    
    digitIdx++;

    arr = [];
    for (let i = 0; i < bucketContainer.length; i++) 
      for (let j = 0; j < bucketContainer[i].length; j++) 
        arr.push(bucketContainer[i][j]);

  }

  return arr;
};


const firstArr = [345, 22, 17, 96, 82, 3, 1295, 4386]; 
  //=> [3, 17, 22, 82, 96, 345, 1295, 4386]
console.log(radixSort(firstArr));

const secondArr = [1425, 67, 33, 143, 98, 941, 2, 532, 9, 2396]; 
  //=> [2, 9, 33, 67, 98, 143, 532, 941, 1425, 2396]
console.log(radixSort(secondArr));

const thirdArr = ["0093", 36, 20, "000001", "0897", 500]; 
  //=> [1, 20, 36, 93, 500, 897]
console.log(radixSort(thirdArr));

