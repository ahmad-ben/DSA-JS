class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    const newNode = new Node(val);

    if(!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.updateTail(newNode);
    }

    this.incrementLength();

    return this;
  }

  updateHead(node){
    this.head = node;
  }

  updateTail(node){
    this.tail = node;
  }

  incrementLength(){
    this.length++; 
  }
}

const doublyLinkedList = new DoublyLinkedList();

// console.log(doublyLinkedList);

doublyLinkedList.push(1);
// console.log(doublyLinkedList);

doublyLinkedList.push(2);
// console.log(doublyLinkedList);

doublyLinkedList.push(3);
console.log(doublyLinkedList);