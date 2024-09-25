const charCount = (str) => {
  if(typeof str != "string") 
    throw new Error("The type of the input should be string");

  if(str === "") throw new Error("The string is empty");

  const charactersCounter = {};

  for (let currentChar of str) {
    const isCharOrNum = isAlphaNumeric(currentChar);
    if(!isCharOrNum) continue;
    currentChar = currentChar.toLowerCase();
    charactersCounter[currentChar] = ++charactersCounter[currentChar] || 1;   
  }

  return charactersCounter;
}

function isAlphaNumeric(char) {
  codeOfChar = char.charCodeAt(0);
    if (
      (codeOfChar > 47 && codeOfChar < 58) || // numeric (0-9)
      (codeOfChar > 64 && codeOfChar < 91) || // upper alpha (A-Z)
      (codeOfChar > 96 && codeOfChar < 123)   // lower alpha (a-z)
    ) return true 
};

console.log(charCount("Hello"));
console.log(charCount("Hello there, 1223334444."));