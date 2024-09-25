/*

  Challenge:
    Write a function called isSubsequence, which takes in two strings and checks: 
      If the characters in the first string form a subsequence of the characters in the second one. 
        In other words, The function should check: 
          If the characters in the first string appear somewhere in the second string. 
            Without their order changing.
    Inputs & Outputs Examples:
      isSubsequence('hello', 'hello world');  // true
      isSubsequence('sing', 'sting');         // true
      isSubsequence('abc', 'abracadabra');    // true
      isSubsequence('abc', 'acb');            // false -order matters-
    Your solution MUST have AT LEAST the following complexities:
      Time Complexity  - O(N + M)
      Space Complexity - O(1)

*/


const isSubsequence = (subString, string) => {
  if(subString.length > string.length) return false;

  let subStringPointer = 0;

  for(char of string){
    if(char === subString[subStringPointer]) subStringPointer++;
    if(subStringPointer === subString.length) return true;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));     // true
console.log(isSubsequence('sing', 'sting'));            // true
console.log(isSubsequence('abc', 'abracadabra'));       // true
console.log(isSubsequence('abc', 'acb'));               // false -order matters-
console.log(isSubsequence('abcd', 'aaaebbbfcccjdddk')); // true