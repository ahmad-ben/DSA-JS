// Recursive Version
function countDown(num){
  if(num <= 0) return console.log("All done!");

  console.log(num);
  num--;
  countDown(num);
}

/* 

2
  2
  No
  Log 2
  2-- => 1
  FUNCTION CALL WITH 1

1
  1
  No
  Log 1
  1-- => 0
  FUNCTION CALL WITH 0

0
  0
  Yes => Recursion Stop.

*/

// Iterative Version
function countDown(num){
  for(var i = num; i > 0; i--) console.log(i);

  console.log("All done!")
}


countDown(2);
