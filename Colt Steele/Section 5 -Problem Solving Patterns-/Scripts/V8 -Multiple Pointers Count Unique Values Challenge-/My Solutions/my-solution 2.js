/*

The big different that i see here, is:
  In the sorted if you leave a number you will never see it again.
    If you move in the same direction with both pointers.
    When you move you basically have two scenarios:
      You will find the same number as the last one.
      You will find a different number but absolutely not the previous numbers:
        You move in a specific direction in a sorted array.
        If you pass a value you will never see it again.
  
  The new method is based on what we have found will be:
    We will start two pointers in one side.
      Fix the first and count its value as unique.
      Move the second pointer to the next index.
        If the two pointers have the same value, move the second pointer again.
        If the second pointer has different value: 
          Count its value.
          Move the first pointer to the second pointer. 
          Move the second to check the next index value and repeat the same process.
            If the second pointer index is the last we should: 
              Stop the looping.
              Log the number.

*/

const countUniqueValues = (arr) => {
  if(arr.length === 1) return console.log(1);

  let numberOfUniqueValues = 0;
  let firstPointer = 0;
  let secondPointer = 1;

  while(secondPointer < arr.length){
    if(secondPointer == 1) ++numberOfUniqueValues;
    if(arr[secondPointer] !== arr[firstPointer]){
      ++numberOfUniqueValues;
      firstPointer = secondPointer;  
    }
    ++secondPointer;
  }

  console.log(numberOfUniqueValues);
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([1]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
countUniqueValues([-2, -2]) // 4
countUniqueValues([-2, -1]) // 4

