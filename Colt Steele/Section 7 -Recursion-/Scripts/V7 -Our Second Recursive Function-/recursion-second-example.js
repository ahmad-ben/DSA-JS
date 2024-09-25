// function sumRange(num){
//   if(num === 1) return 1; //=> Base case.
//   return num + sumRange(num-1); //=> Different Input Recursive Call.
// }

//My Short Version:
  const sumRange = (num) => num === 1 ? num : num + sumRange(num-1);

console.log(sumRange(4));

/*

sumRange(3);
  No.
  3 + sumRange(2);

sumRange(2);
  No.
  2 + sumRange(1);

sumRange(1);
  Yes => RETURN 1.

sumRange(1) = 1;

  sumRange(2) = 2 + sumRange(1) = 2 + 1 = 3;

    sumRange(3) = 3 + sumRange(2) = 3 + 3 = 6;

*/