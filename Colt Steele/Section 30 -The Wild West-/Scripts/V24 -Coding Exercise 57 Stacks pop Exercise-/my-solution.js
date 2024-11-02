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

  pop(){
    if(this.size === 0) return undefined;
    let removedTop = this.top;

    if(this.size === 1){
      this.top = this.bottom = null;
    }else{
      this.top = removedTop.next;
      removedTop.next = null;
    }

    this.size--;
    return removedTop.val;
  };
}

const stack = new Stack();
 
stack.push(10);
stack.push(100);
stack.push(1000);
const removed = stack.pop();
console.log(removed) // 1000
console.log(stack.size) // 2
console.log(stack.pop());
stack.pop();
console.log(stack.size) // 0