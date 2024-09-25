/*

  We have here two of BON:
    0(1) and O(n)
  But we care specifically about what will happen if we make n bigger and bigger:
    It will make the BON O(n).
  So this function is O(n).

*/
const logAtLeast5 = (maxNumber) => {
  for (let i = 0; i < Math.max(5, maxNumber); i++) 
    console.log(i);  
}

logAtLeast5(3);
console.log("==========");  
logAtLeast5(9);
