class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  enQueue(val){
    const newNode = new Node(val);

    if(!this.top) this.top = this.bottom = newNode;
    else{
      this.top.next = newNode;
      this.top = newNode;
    }

    return ++this.size;
  }

  deQueue(){
    if(!this.top) return null;
    
    let oldBottom = this.bottom;

    if(this.size === 1) this.top = this.bottom = null;
    else{
      const newBottom = oldBottom.next;
      oldBottom.next = null
      this.bottom = newBottom;
    }

    --this.size;
    return oldBottom;
  }
};

const queue = new Queue();
console.log(queue);

queue.enQueue(1);
console.log(queue);

queue.enQueue(2);
queue.enQueue(3);
console.log(queue);

