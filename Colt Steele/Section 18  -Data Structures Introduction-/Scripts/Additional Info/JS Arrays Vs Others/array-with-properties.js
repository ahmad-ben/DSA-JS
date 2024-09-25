let arr = [10, 20, 30];

console.log(arr[0]); // Output: 10

// Adding a non-numeric property to the array
arr.customProperty = "Hello, I'm a custom property!";

console.log(arr.customProperty); // Output: Hello, I'm a custom property!

console.log(arr.length); // Output: 3

// Iterating over the array elements
for (let i = 0; i < arr.length; i++) console.log(arr[i]); // Outputs: 10, 20, 30

// Checking if the custom property is included in the iteration
for (let key in arr) console.log(key); // Outputs: 0, 1, 2, customProperty

// TO SHARE IN LINKED IN