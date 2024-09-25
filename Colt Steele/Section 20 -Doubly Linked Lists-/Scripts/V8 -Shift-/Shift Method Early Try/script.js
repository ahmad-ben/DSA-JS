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

  pop(){
    if(!this.head) return undefined;

    const removedTail = this.tail;

    if(this.length === 1) this.head = this.tail = null;
    else {
      const newTail = removedTail.prev;
      removedTail.prev = newTail.next = null;
      this.updateTail(newTail);
    }

    this.decrementLength();
    return removedTail;
  }

  shift(){
    if(!this.head) return undefined;

    const removedHead = this.head;
    if(this.length === 1) this.head = this.tail = null;
    else{
      this.updateHead(removedHead.next);
      removedHead.next = this.head.prev = null;
    }

    this.decrementLength();
    return removedHead;
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

  decrementLength(){
    this.length--;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
console.log(doublyLinkedList);

doublyLinkedList.shift();
console.log(doublyLinkedList);

doublyLinkedList.shift();
console.log(doublyLinkedList);