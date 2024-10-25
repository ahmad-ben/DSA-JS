class Node{
  constructor(val){
    this.val = val
    this.next = null;      
  }
}

class SinglyLinkedList{
  
  constructor(val){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val){
    const newTail = new Node(val);  
    if(!this.head) this.head = newTail;
    else this.tail.next = newTail;

    this.tail = newTail;
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    
    const prevTailVal = this.tail;
    if(this.length === 1) this.tail = this.head = null; 
    else{
      let newTail = this.head;
      while(newTail.next.next) newTail = newTail.next;
      newTail.next = null;
      this.tail = newTail;
    }

    this.length--;
    return prevTailVal;
  }
};

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5); 
singlyLinkedList.push(10); 
singlyLinkedList.push(15); 

console.log(singlyLinkedList.pop().val);  // 15
console.log(singlyLinkedList.tail.val);   // 10
console.log(singlyLinkedList.length);     // 2
console.log(singlyLinkedList.pop().val);  // 10
console.log(singlyLinkedList.length);     // 1
console.log(singlyLinkedList.pop().val);  // 5
console.log(singlyLinkedList.length);     // 0
console.log(singlyLinkedList.pop());      // undefined
console.log(singlyLinkedList.length);     // 0