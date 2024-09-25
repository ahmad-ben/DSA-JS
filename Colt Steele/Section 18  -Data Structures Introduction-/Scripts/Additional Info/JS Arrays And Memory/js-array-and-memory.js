/*
  => dense array:
    In this case, the array is dense and behaves like a traditional array. 
    The JS engine might store this in a contiguous block of memory for efficiency.

*/
let denseArray = [10, 20, 30, 40, 50];
console.log(denseArray[2]); // Output: 30

// Adding a new element
denseArray.push(60);
console.log(denseArray); // Output: [10, 20, 30, 40, 50, 60]

/*
  => spare array:
    The index 50 is filled, with all other indices being empty. 
    The engine will likely store this array in a way that’s more similar to an object. 
      Where only the occupied indices are stored, rather than reserving memory for all 51 elements.

*/
let sparseArray = [];
sparseArray[50] = 100;
console.log(sparseArray.length); // Output: 51
console.log(sparseArray[0]); // Output: undefined
