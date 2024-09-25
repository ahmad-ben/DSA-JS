//! No base case:
  function factorial(num){
    return num * factorial(num);
  }

//! Wrong inputs setup:
  function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num);
  }

//! Define the base case without actual returning:
  function factorial(num){
    if(num === 1) console.log(1) ;
    return num * factorial(num-1);
  }