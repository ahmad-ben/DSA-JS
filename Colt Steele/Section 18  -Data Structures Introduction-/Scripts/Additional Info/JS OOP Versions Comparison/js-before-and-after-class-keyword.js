/*
  => ES2015:

    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(`${this.name} makes a noise.`);
      }
    }

    let dog = new Animal('Dog');
    dog.speak(); // Output: Dog makes a noise.
*/


// => Oldest Versions:

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

let dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.
