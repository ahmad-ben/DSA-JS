const charCount = (str) => {
  /* 
    Check if the input is string type first:
      If no => Return Err and go out the function.
    Check if the input is empty:
      If yes => Return Err and go out the function.
      If no
        Create an empty obj that will have the data:
          The key is the string.
          The value is the number of existing.
        Loop over all the characters of the string  
          Make sure they are character
            If no skip to the other character.
              They are number, spaces...
            If yes 
              Make the character lower case
              Check if the key -character- is exist in the obj.
                If yes, Increment the value by one.
                If no, Make the value 1.
  */

  if(typeof str != "string") 
    throw new Error("The type of the input should be string");

  if(str === "") throw new Error("The string is empty");

  const charactersCounter = {};
  const regexCheck = /^[a-zA-Z0-9]+$/; 

  for (i = 0; i < str.length; i++) {
    let currentChar = str[i];
    const isCharOrNum = regexCheck.test(currentChar);
    if(!isCharOrNum) continue;
    currentChar = currentChar.toLowerCase();
    charactersCounter[currentChar] = 
      charactersCounter[currentChar] ? ++charactersCounter[currentChar] : 1;   
  }

  return charactersCounter;
}

// console.log(charCount([])) ✔️
// console.log(charCount("")) ✔️
console.log(charCount("Hello"));
console.log(charCount("Hello Hi"));
console.log(charCount("Hello Hi 12345"));
console.log(charCount("Hello Hi 122333444455555"));
console.log(charCount("My name is ahmed, i have a lot of $"));