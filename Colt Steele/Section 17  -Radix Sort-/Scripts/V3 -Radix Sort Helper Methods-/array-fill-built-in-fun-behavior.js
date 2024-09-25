const arrayFillFunBehavior = () => {
  //=> Fills the array with the same reference to an empty array.
  const bigArray = new Array(10).fill([]);

  console.log(bigArray);

  bigArray[0].push(3);

  console.log(bigArray);

  /*

    [
      [ 3 ], [ 3 ], [ 3 ],
      [ 3 ], [ 3 ], [ 3 ],
      [ 3 ], [ 3 ], [ 3 ],
      [ 3 ]
    ]

  */

};

arrayFillFunBehavior();

/*
  `Array.prototype.fill()` method works when filling an array with objects -array this case-. 
  When you use `.fill([])`, it fills the entire array with references to the same single array. 
    

### Step-by-Step Explanation

#### Code Example:
```javascript
const arrayFillFunBehavior = () => {
  const bigArray = new Array(10).fill([]); // Fills the array with the same reference to an empty array
  console.log(bigArray); // Logs the array, which appears as 10 empty arrays
  bigArray[0].push(3); // Adds '3' to the first array
  console.log(bigArray); // Logs the array after modification
};

arrayFillFunBehavior();
```

#### Detailed Breakdown:

1. **Creating the Array with `.fill([])`**:
   - `new Array(10)` creates an array with 10 empty slots.
   - `.fill([])` fills all 10 slots with the **same** empty array `[]`. 
   All 10 slots now hold a reference to the **same** array in memory.
   
   ```javascript
   const bigArray = new Array(10).fill([]);
   ```
   At this point, `bigArray` looks like this:
   ```javascript
   [[], [], [], [], [], [], [], [], [], []]
   ```
  But importantly, all these arrays are just references to the **same** array. 
      So, any change to one will reflect in all of them.

2. **Pushing `3` into `bigArray[0]`**:
  When you execute `bigArray[0].push(3);`, 
    you're pushing the value `3` into the first array. 
    But since all elements of `bigArray` are references to the same array.
      All the other elements also reflect this change.


### Why This Happens:
- **Object References**: 
  In JavaScript, arrays and objects are reference types. 
  When you fill an array with an object (like `[]`).
    You're filling each slot with a reference to the same object, not a new object each time.
- **Shared Reference**: Because `bigArray` elements are all references to the same array. 
  Any modification to one element affects all the others.

### How to Avoid This:
If you want each slot in `bigArray` to hold a separate array.
  You can use `Array.from()` or a `for` loop to generate a new array for each element:

1. **Using `Array.from()`**:
   ```javascript
   const bigArray = Array.from({ length: 10 }, () => []);
   ```
   This creates a new empty array for each slot in `bigArray`.

2. **Using a `for` loop**:
   ```javascript
   const bigArray = [];
   for (let i = 0; i < 10; i++) {
     bigArray.push([]);
   }
   ```
   This also ensures that each element of `bigArray` is a unique array.

With either of these methods, when you push `3` into `bigArray[0]`. 
  Only the first element will be affected, and the rest will remain empty arrays.


*/