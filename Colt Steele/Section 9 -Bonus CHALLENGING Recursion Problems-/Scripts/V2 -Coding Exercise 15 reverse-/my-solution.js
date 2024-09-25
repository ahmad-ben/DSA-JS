/*

  Challenge:
    Write a recursive function called reverse. 
    Which accepts a string and returns a new string in reverse.
    Inputs & Outputs Examples:
      reverse('awesome')     => 'emosewa'
      reverse('rithmschool') => 'loohcsmhtir'

*/

const reverse = (string) => {
  if(string.length === 1) return string[0];
  return reverse(string.slice(1)) + string[0];
};

console.log(reverse('awesome'));     // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

