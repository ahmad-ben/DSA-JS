/*

  Challenge:
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent. 
    This function should mimic the functionality of Math.pow(). 
      Do not worry about negative bases and exponents.
    Inputs & Outputs Examples:
      power(2,0) => 1
      power(2,2) => 4
      power(2,4) => 16 

*/

const power = (base, exponent) => {
  if(exponent === 0) return 1;
  return base * power(base, base - 1);
};

console.log(power(2, 0));
console.log(power(2, 1));
console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(5, 3));

