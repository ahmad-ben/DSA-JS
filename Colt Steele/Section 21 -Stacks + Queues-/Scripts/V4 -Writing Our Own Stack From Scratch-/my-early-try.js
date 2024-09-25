class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.last = null;
    this.size = 0;
  }

  push(val){
    const newNode = new Node(val);
    
    if(this.last) newNode.next = this.last;

    this.last = newNode;
    return ++this.size;
  }

  pop(){
    if(!this.last) return null;

    const oldHead = this.last;
    const newHead = oldHead.next;
    oldHead.next = null;

    this.last = newHead;
    this.size--;

    return oldHead.val;
  }
}

const stack = new Stack();
