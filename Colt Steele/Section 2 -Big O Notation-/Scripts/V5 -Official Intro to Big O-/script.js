/* SOME FUNCTION AND THEIR BIG O NOTATION  */

/* 
  Always 3 operations, so it's: 
    => O(1) 
*/
const addUpToSecond = (n) => n * (n + 1) / 2;

/* 
  2 + 5n operations, so:
    n = 1 => 2 + ( 5 * 1 ) = 2 + 5  = 7
    n = 2 => 2 + ( 5 * 2 ) = 2 + 10 = 12
    n = 3 => 2 + ( 5 * 3 ) = 2 + 15 = 17
  That means:
    => O(n) 
*/
const addUpToFirst = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) total += i;
  return total;
}

/* 
  8 + 7n operations, so:
    n = 1 => 8 + ( 7 * 1 ) = 8 + 7  = 15
    n = 2 => 8 + ( 7 * 2 ) = 8 + 14 = 22
    n = 3 => 8 + ( 7 * 3 ) = 8 + 21 = 29
  That means:
    => O(n) 
*/
const countUpAndDown = (n) => {
  console.log("Going up!"); //! 1
  for (let i = 0; i < n; i++) { //! 1 + n + 2n
    console.log(i); //! 1
  }
  console.log("At the top!\nGoing down..."); //! 1
  for (let j = n - 1; j >= 0; j--) { //! 2 + 2n + 2n
    console.log(j); //! 1
  }
  console.log("Back down. Bye!"); //! 1
}

/* 
  Operation numbers is: 
    (1 + 3n) * (1 + 3n) + (1 + 3n) * n
    1 + 2(3n) + 3n² + n + 3n² 
    1 + 6n + n + 3n² + 3n²
    1 + 7n + 6n²
  That means:
    => O(n²) 
  ! Maybe this is wrong.
*/
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) { //! 1 + n + 2n
    for (let j = 0; j < n; j++) { //! n + n² + 2n²
      console.log(i, j); //! n²
    }
  }
}