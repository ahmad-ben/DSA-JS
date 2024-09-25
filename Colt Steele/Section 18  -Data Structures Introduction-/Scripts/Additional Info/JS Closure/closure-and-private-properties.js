/*
  The Counter function creates a count variable that is private to the Counter function.
  The increment and decrement methods form a closure around this variable, allowing them to: 
    Access and modify count. 
      Even though count isn't accessible directly from outside the Counter function.
  This approach allows for encapsulation, where the internal state of an object is: 
    Hidden from the outside world. 
    Only specific methods are exposed to interact with that state.
*/

function Counter() {
  let count = 0; // Private variable

  this.increment = function() {
    count++;
    console.log(count);
  };

  this.decrement = function() {
    count--;
    console.log(count);
  };
}

let counter = new Counter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

console.log(counter.count); // Output: undefined (count is private)
