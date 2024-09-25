/*

  We have here two of BON:
    0(1) and O(n)
  But we care specifically about what will happen if we make n bigger and bigger:
    It will make the BON O(1).
  So this function is O(1).

*/
const logAtMost5 = (maxNumber) => {
  for (let i = 0; i < Math.min(5, maxNumber); i++) 
    console.log(i);  
}

logAtMost5(2);
console.log("==========");  
logAtMost5(100);
