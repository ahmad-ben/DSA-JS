/*

  Unfortunately:
    The return in while: 
      Stop the while looping.
      Make the function returned value the while return value.
    The Continue:
      Prevent us to add any operation after it.

*/

const testWhileBehavior = () => {
  let num = 0;

  while(num < 5){
    console.log("current number is: ", num);
    if(num === 3) return "From Return";
    console.log("current number is: ", num);
    num++;
  }

};

console.log(testWhileBehavior());