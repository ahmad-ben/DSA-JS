/*

  Challenge:
    Write a function called findLongestSubstring, Which: 
      Accepts a string.
      Returns the length of the longest substring with all distinct characters.
    Inputs & Outputs Examples:
      findLongestSubstring('')                  // 0
      findLongestSubstring('rithmschool')       // 7
      findLongestSubstring('thisisawesome')     // 6
      findLongestSubstring('thecatinthehat')    // 7
      findLongestSubstring('bbbbbb')            // 1
      findLongestSubstring('longestsubstring')  // 8
      findLongestSubstring('thisishowwedoit')   // 6
    Constraints:
      Time Complexity - O(n)

*/

const findLongestSubstring = (str) => {
  if(str.length === 0) return console.log(0);

  let firstPointer = 0;
  let secondPointer = 1;
  let longestSubStringNum = 0;
  let currentSubStringObj = {};
  currentSubStringObj[str[firstPointer]] = firstPointer;

  for (secondPointer; secondPointer < str.length; secondPointer++) {
    let charOfSecondPointer = str[secondPointer];

    if(currentSubStringObj[charOfSecondPointer] !== undefined && 
      currentSubStringObj[charOfSecondPointer] >= firstPointer
    ){
      if(secondPointer - firstPointer > longestSubStringNum)
        longestSubStringNum = secondPointer - firstPointer;

      firstPointer = currentSubStringObj[charOfSecondPointer] + 1;
    }
    currentSubStringObj[charOfSecondPointer] = secondPointer;
  }

  if(secondPointer - firstPointer > longestSubStringNum)
    longestSubStringNum = secondPointer - firstPointer;

  console.log("RESULT: ", longestSubStringNum, currentSubStringObj);
}

findLongestSubstring('')                  // 0
findLongestSubstring('rithmschool')       // 7
findLongestSubstring('thisisawesome')     // 6
findLongestSubstring('thecatinthehat')    // 7 
findLongestSubstring('bbbbbb')            // 1
findLongestSubstring('longestsubstring')  // 8
findLongestSubstring('thisishowwedoit')   // 6


/*


const findLongestSubstring = (str) => {
  let firstPointer = 0;
  let secondPointer = 1;
  let longestSubStringNum = 0;
  let currentSubStringObj = {};

  while(secondPointer < str.length){
    if(Object.keys(currentSubStringObj).length == 0) 
      currentSubStringObj[str[firstPointer]] = firstPointer;

    if(currentSubStringObj[str[secondPointer]] !== undefined && 
      currentSubStringObj[str[secondPointer]] >= firstPointer
    ){
      if(secondPointer - firstPointer > longestSubStringNum)
        longestSubStringNum = secondPointer - firstPointer;

      firstPointer = currentSubStringObj[str[secondPointer]] + 1;
      currentSubStringObj[str[secondPointer]] = secondPointer;
      secondPointer++;
    }else{
      currentSubStringObj[str[secondPointer]] = secondPointer;
      secondPointer++;
    }

    if(
      secondPointer == str.length && 
      secondPointer - firstPointer > longestSubStringNum
    ) longestSubStringNum = secondPointer - firstPointer;

  }

  console.log("RESULT: ", longestSubStringNum, currentSubStringObj);
}

*/