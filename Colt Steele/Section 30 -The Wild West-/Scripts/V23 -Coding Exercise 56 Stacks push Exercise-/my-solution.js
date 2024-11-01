class Node{
  constructor(val){
    this.val = val;
    this.next = null; // points to the previous node
  }
}

class Stack{
  constructor(){      
    this.top = null;
    this.bottom = null;  
    this.size = 0;
  };

  push(val){
    const newTop = new Node(val);
    if(this.top) newTop.next = this.top;
    else this.bottom = newTop;
    this.top = newTop;
    return ++this.size; 
  };
}

const firstStack = new Stack();
 
console.log(firstStack.push(10))         // 1
console.log(firstStack.top.val)          // 10
console.log(firstStack.bottom.val)       // 10
firstStack.push(100);
console.log(firstStack.top.val)          // 100
console.log(firstStack.bottom.val)       // 10
firstStack.push(1000);
console.log(firstStack.top.val)          // 1000
console.log(firstStack.bottom.val)       // 10
 
const secondStack = new Stack();
 
console.log(secondStack.push(10))         // 1
console.log(secondStack.size)             // 1
console.log(secondStack.push(100))        // 2
console.log(secondStack.size)             // 2
console.log(secondStack.push(1000))       // 3
console.log(secondStack.size)             // 3