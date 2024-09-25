function FunctionName () {
  console.log(this);
  console.log(this.AbortControllers); //Why it's undefined.
  console.log(this === globalThis); //Why it's true.
  console.log("=====");
};

FunctionName(); //=> Global Object.

// const instanceObj = new FunctionName(); //=> The instanceObj Object.

const object = {
  fistProperty: this,
  firstFun: function () {
    console.log("The value of this keyword inside a normal function:", this);
  },
  arrowFun : () => {
    console.log("The value of this keyword inside an arrow function:", this);
  }
}

object.fistProperty;

if(object.fistProperty === globalThis){
  console.log("TRUE");
}else console.log("FALSE"); //Why it's false 

console.log(object.fistProperty);
object.firstFun();
object.arrowFun();






