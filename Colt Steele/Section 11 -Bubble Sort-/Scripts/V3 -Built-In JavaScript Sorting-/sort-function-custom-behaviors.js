const numberCompare = (num1, num2) =>{ 
  console.log("First Number: ", num1);
  console.log("Second Number: ", num2);
  
  return num1 - num2;
}

let firstArr = [6, 4, 15, 10];
firstArr.sort(numberCompare);
console.log(firstArr);

/* 

  First Number:  4
  Second Number:  6
    :: 4  - 6  = -2 => [4, 6]
    First Number:  15
    Second Number:  4
    :: 15 - 4  = 11 => [4, 15]
    First Number:  15
    Second Number:  6
    :: 15 - 6  = 9 =>  [6, 15]
    First Number:  10
    Second Number:  6
    :: 10 - 6  = 4 =>  [6, 10]
    First Number:  10
    Second Number:  15
    :: 10 - 15 = -5 => [10, 15]

  => Result [ 4, 6, 10, 15 ]

*/

//:================================================================================================

const strLengthCompare = (str1, str2) =>{ 
  console.log("First Str: ", str1);
  console.log("Second Str: ", str2);
  
  return str1.length - str2.length;
}

let arrTwo = ["Steele", "Colt", "Data Structures", "Algorithms"];
arrTwo.sort(strLengthCompare);
console.log(arrTwo);
