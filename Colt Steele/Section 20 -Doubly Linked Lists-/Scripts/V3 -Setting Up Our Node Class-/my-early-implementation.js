class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

let nodeOne = new Node(5);
console.log(nodeOne);

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let DLLOne = new DoublyLinkedList();
console.log(DLLOne);

nodeOne.next = new Node(55);
console.log(nodeOne);

nodeOne.next.prev = nodeOne;
console.log(nodeOne);