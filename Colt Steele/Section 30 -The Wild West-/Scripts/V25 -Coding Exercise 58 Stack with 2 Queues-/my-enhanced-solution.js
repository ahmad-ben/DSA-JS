// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
};

class Stack {
  constructor() {
    this.firstQueue = new Queue();
    this.secondQueue = new Queue(); 
  };

  push(value) {
    this.secondQueue.enqueue(value);

    while(this.firstQueue.size) 
      this.secondQueue.enqueue(this.firstQueue.dequeue());

    this.firstQueue = this.secondQueue;
    this.secondQueue = new Queue();
    return this;
  };

  pop() { return this.firstQueue.dequeue(); }
}

const stack = new Stack();

stack.push(10).push(20).push(30);
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.pop()); // null
stack.push(30).push(40).push(50)
console.log(stack.pop()); // 50
stack.push(60)
console.log(stack.pop()); // 60




































