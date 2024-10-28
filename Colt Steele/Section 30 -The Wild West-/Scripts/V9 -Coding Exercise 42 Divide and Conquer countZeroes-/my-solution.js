/*
  We have an important note we should consider.
    We have all the 1s in the left and than all the 0s in the right, starting form this.
    We have also the constrain time complexity is O(long n), that means:
      We should roughly divide the number of items in each step.
  Solution progress:
    Create two pointers, one in the max left and the other in the max right.
    Calculate the middle index and see its value, we have here two odds:
      The value is 0:
        All the right values are 0 count them.
        Get the max left before the middle index that we already calculate its 0.
        Repeat the progress until the left is bigger than right.
        The value is 1:
        All the left values are 1.
        Get the max right after the middle index that its value is 1.
        Repeat the progress until the left is bigger than right.

*/

const countZeroes = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let zerosNumber = 0;
  
  while(leftPointer <= rightPointer){
    let middlePointer = Math.floor((rightPointer + leftPointer) / 2) ;

    if(arr[middlePointer] === 1) leftPointer = middlePointer + 1;
    else{
      zerosNumber += rightPointer - middlePointer + 1;
      rightPointer = middlePointer - 1;
    }
  }

  return zerosNumber;
};

console.log(countZeroes([1,1,1,1,0,0]));  // 2
console.log(countZeroes([1,0,0,0,0]))     // 4
console.log(countZeroes([0,0,0]))         // 3
console.log(countZeroes([1,1,1,1]))       // 0