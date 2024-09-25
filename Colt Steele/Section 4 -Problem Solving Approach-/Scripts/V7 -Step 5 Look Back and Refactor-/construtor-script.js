// Start point
function charCount (str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)){
      if(obj[char] > 0) {
        obj[char]++;
      }else{
        obj[char] = 1;
      }      
    }
  }
  return obj;
}

/*
  Changes:
    - For of loop is more readable.
    - Simplify the nested function to ternary operator.
    - Use CharCodeAt instead of Regex.
    - Change the character to lower case after make sure that is a character.
*/ 

function charCountEnhanced (str) {
  var obj = {};
  for (var char of str) {
    if(isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
};

console.log(charCount("Hello"));
console.log(charCountEnhanced("Hello"));
console.log(charCount("Complex phrase here, 1223334444."));
console.log(charCountEnhanced("Complex phrase here, 1223334444."));
console.log(charCountEnhanced("Hello WORLD hi!!!!"));