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


class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let myDog = new Dog('Rex');
myDog.speak(); // Output: Rex barks.
