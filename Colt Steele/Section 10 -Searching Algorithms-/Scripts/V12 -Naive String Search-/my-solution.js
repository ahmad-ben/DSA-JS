/*

  Challenge:
    Count the number of times a smaller string appears in a longer string.
    Inputs & Outputs Examples:
      findMatchNumber("omg this omg is omg hh.", "omg");        => 3 
      findMatchNumber("ahmed is always ahmed.", "ahmed");       => 2
      findMatchNumber("ahmed mohammad ahmed Abd ahmed", "a");   => 5

*/




const findMatchNumber = (str, subStr) => {
  let matchNum = 0;

  for (let i = 0; i < str.length - subStr.length + 1; i++) {
    let matchedChar = 0;
    if(str[i] !== subStr[0]) continue;
    matchedChar++;

    for (let j = 1; j < subStr.length; j++) 
      if(str[i + j] === subStr[j]) matchedChar++; else break;

    if(matchedChar === subStr.length) matchNum++;
  }

  return matchNum;
};

console.log(findMatchNumber("omg this omg is omg hh.", "omg"));             // 3
console.log(findMatchNumber("ahmed is always ahmed.", "ahmed"));            // 2
console.log(findMatchNumber("ahmed mohammad ahmed Abd ahmed", "a"));        // 5
console.log(findMatchNumber("You will not find it 😁.", "z"));              // 0



