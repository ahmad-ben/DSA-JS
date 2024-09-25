// Constructor's first version of the solution:
function charCount (str) {
  //  Make an object to return at the end.
  var result = {};
  // Loop over the string.
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // for each character, 
    // If the char is number/letter and is a key in object, Add 1 to count.
    if(result[char] > 0) {
      result[char]++;
    }else{
      // If the char is number/letter and is not a key in object, Add it and set its value to 1.
      result[char] = 1;
    }
  }
  // If the char is something else (space, period, etc.), don't do anything.
  // Return the object.
}