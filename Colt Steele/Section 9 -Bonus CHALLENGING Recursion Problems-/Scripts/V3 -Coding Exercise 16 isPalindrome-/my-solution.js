/*

  Challenge:
    Write a recursive function called isPalindrome. 
    Which returns: 
      True if the string passed to it is a palindrome, reads the same forward and backward. 
      False Otherwise.
    Inputs & Outputs Examples:
      isPalindrome('awesome')                    // false
      isPalindrome('foobar')                     // false
      isPalindrome('tacocat')                    // true
      isPalindrome('amanaplanacanalpanama')      // true
      isPalindrome('amanaplanacanalpandemonium') // false

*/

const isPalindrome = (string) => {
  if(string.length === 0) return true;
  if(string[0] !== string[string.length - 1]) return false;
  return isPalindrome(string.slice(1, string.length - 1));
}

console.log(isPalindrome('awesome'));                    // false
console.log(isPalindrome('foobar'));                     // false
console.log(isPalindrome('tacocat'));                    // true
console.log(isPalindrome('amanaplanacanalpanama'));      // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false