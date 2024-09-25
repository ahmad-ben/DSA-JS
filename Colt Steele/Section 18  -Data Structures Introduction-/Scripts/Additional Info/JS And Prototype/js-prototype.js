class Animal {
  static staticProperty = "string";

  static staticMethod (){
    return "string";
  } 

  constructor(name) {
    this.normalProperty = "normal property value";
    this.name = name
  }

  instanceMethod(){

  }
}

console.log(Animal.prototype); // Outputs is {} empty??
console.log(Animal.prototype.instanceMethod); 
console.log(Animal.prototype.normalProperty); 
console.log(Animal.prototype.constructor); 
console.log(Animal.prototype.constructor.staticProperty); 

/*

  When you log Animal.prototype, it might seem empty. 
    Because the console output shows the structure of the object.
      Not always show all inherited or non-enumerable properties directly.
  Although Animal.prototype might look empty at first glance. 
    It does have properties. Specifically, it contains -instanceMethod-.
      Because you defined it as a method on the class.
  The prototype also has a constructor property, which points back to the Animal class.

*/

let dog = new Animal('Dog');

console.log(dog.__proto__ === Animal.prototype); // true

/* 

  When you create an instance of Animal, like -dog-. 
    The __proto__ property of dog points to -Animal.prototype-.
    This confirms that dog inherits properties and methods from -Animal.prototype-.
*/

dog.instanceMethod();

/* 

  When you call dog.normalMethod(). 
    JS first looks in dog itself, doesn’t find it, and then looks in dog.__proto__. 
      Which is -Animal.prototype-.

*/

console.log(dog.name);

/* 

Instance properties, such as -this.normalProperty- and -this.name-. 
  Properties that belong directly to the instance of the class rather than the prototype. 
  This means each instance of the class has its own copy of these properties. 
    Unlike methods defined on the prototype, which are shared among all instances.
  These are created within the constructor of the class.
  Each instance of the class has its own separate copy of these properties.
  They are not shared between instances and do not exist on the prototype.

*/
