/*

  let subtotalArray = Array(array.length); n 

*/

function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) subtotal += array[j];
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
