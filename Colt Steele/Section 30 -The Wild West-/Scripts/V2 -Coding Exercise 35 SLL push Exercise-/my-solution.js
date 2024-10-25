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
};

const singlyLinkedList = new SinglyLinkedList();
 
console.log(singlyLinkedList.push(5));              // singlyLinkedList
console.log(singlyLinkedList.length);               // 1
console.log(singlyLinkedList.head.val);             // 5
console.log(singlyLinkedList.tail.val);             // 5
 
console.log(singlyLinkedList.push(10));             // singlyLinkedList
console.log(singlyLinkedList.length);               // 2
console.log(singlyLinkedList.head.val);             // 5
console.log(singlyLinkedList.head.next.val);        // 10
console.log(singlyLinkedList.tail.val);             // 10
 
console.log(singlyLinkedList.push(15));             // singlyLinkedList
console.log(singlyLinkedList.length);               // 3
console.log(singlyLinkedList.head.val);             // 5
console.log(singlyLinkedList.head.next.val);        // 10
console.log(singlyLinkedList.head.next.next.val);   // 15
console.log(singlyLinkedList.tail.val);             // 15