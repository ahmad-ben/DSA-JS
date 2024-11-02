class Node{
  constructor(value){
    this.value = value;
    this.next = null;      
  }
}

class Queue {
  constructor(){
    this.first = null; 
    this.last = null;
    this.size = 0;
  };

  enqueue(value){
    let newLast = new Node(value);
    if(!this.first) this.first = this.last = newLast;
    else{
      this.last.next = newLast;
      this.last = newLast;
    }
    return ++this.size;
  };

  dequeue(){
    if(this.size === 0) return null;

    let removedTopVal = this.first.value;
    if(this.size === 1) this.first = this.last = null;
    else{
      const newFirst = this.first.next;
      this.first.next = null;
      this.first = newFirst;
    }

    this.size--;
    return removedTopVal;
  };
};

const queue = new Queue();
console.log(queue.enqueue(10)) // 1
console.log(queue.size) // 1
console.log(queue.enqueue(100)) // 2
console.log(queue.size) // 2
console.log(queue.enqueue(1000)) // 3
console.log(queue.size) // 3
console.log(queue); // 10 -> 100 -> 1000
console.log(queue.dequeue()); // 10
console.log(queue);
console.log(queue.dequeue()); // 100
console.log(queue);
console.log(queue.dequeue()); // 1000
console.log(queue);
console.log(queue.dequeue()); // null
console.log(queue);

