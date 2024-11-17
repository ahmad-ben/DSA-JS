/*
Write a function called constructNote.
It accepts two strings: 
  A message and some letters. 
The function should return:
  True, if the message can be built with the letters that you are given.
  False, otherwise.
Assume that there are only lowercase letters and no space or special characters.
  In both the message and the letters.
Bonus Constraints:
  If M is the length of message and N is the length of letters:
    Time Complexity: O(M+N)
    Space Complexity: O(N)
*/

const constructNote = (message, letters) => {
  let obj = {};
  for (const l of letters) !obj[l] ? obj[l] = 1 : obj[l] += 1;
  for (const letter of message) {
    if(!obj[letter]) return false;
    obj[letter] -= 1;
  }
  return true;
};

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true