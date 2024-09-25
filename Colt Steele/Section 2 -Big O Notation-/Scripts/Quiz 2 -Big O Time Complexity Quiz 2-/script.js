function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++) 
    if (i % 2 === 0) newArray[i / 2] = array[i];

  return newArray;
}

/*

  array.length = 0
    Outer Loop:
      INDEX = 0  < A.L.N = 0 
        FALSE
      0 OPERATION
    Inner Loop:
      It's not achieved here.

  array.length = 1
    Outer Loop:
      INDEX = 0  < A.L.N = 1 
        TRUE
      1 OPERATION
      Inner Loop:
        INDEX = 0  <= I.O.O.F = 0 
        1 OPERATION

  array.length = 2
    Outer Loop:
      INDEX = 0  < A.L.N = 2 
        TRUE
      INDEX = 1  < A.L.N = 2 
        TRUE
      2 OPERATION
      Inner Loop:
        INDEX = 0  <= I.O.O.F = 0 
        INDEX = 0  <= I.O.O.F = 1 
        INDEX = 1  <= I.O.O.F = 1 
        3 OPERATION

  array.length = 3
    Outer Loop:
      INDEX = 0  < A.L.N = 3 
        TRUE
      INDEX = 1  < A.L.N = 3 
        TRUE
      INDEX = 2  < A.L.N = 3 
        TRUE
      3 OPERATION
      Inner Loop:
        INDEX = 0  <= I.O.O.F = 0 
        INDEX = 0  <= I.O.O.F = 1 
        INDEX = 1  <= I.O.O.F = 1 
        INDEX = 0  <= I.O.O.F = 2 
        INDEX = 1  <= I.O.O.F = 2 
        INDEX = 2  <= I.O.O.F = 2 
        6 OPERATION
*/

function subtotals(array) {
  let subtotalArray = Array(array.length);

  for (let i = 0; i < array.length; i++) { 
    console.log("The Index Value of the outer loop", i);
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      console.log("The Index Value of the inner loop", j);
      subtotal += array[j];
    } 
    subtotalArray[i] = subtotal;
  }

  return subtotalArray;
}

console.log("==============================");
subtotals([]);
console.log("==============================");
subtotals(["a"]);
console.log("==============================");
subtotals(["a", "b"]);
console.log("==============================");
subtotals(["a", "b", "c"]);
console.log("==============================");