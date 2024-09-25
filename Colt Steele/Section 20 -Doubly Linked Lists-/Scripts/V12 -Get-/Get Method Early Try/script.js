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

  unshift(val){
    const newNode = new Node(val);

    if(!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.updateHead(newNode);
    };
    
    this.incrementLength();
    return this;
  }







  get(idx){
    if(idx < 0 || idx >= this.length || typeof idx !== "number") 
      return undefined;

    let wantedNode;
    let objMiddlePoint = this.length / 2;

    if(idx < objMiddlePoint)
      for (let startPoint = 0; startPoint <= idx; startPoint++) 
        wantedNode = wantedNode ? wantedNode.next : this.head;
    else
      for (let startPoint = 0; startPoint <this.length - idx; startPoint++) 
        wantedNode = wantedNode ? wantedNode.prev : this.tail;

    return wantedNode;
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

doublyLinkedList.unshift(12345);
doublyLinkedList.unshift(1234);
doublyLinkedList.unshift(123);
doublyLinkedList.unshift(12);
doublyLinkedList.unshift(1);

console.log(doublyLinkedList.get(0));
console.log(doublyLinkedList.get(1));
console.log(doublyLinkedList.get(2));
console.log(doublyLinkedList.get(3));
console.log(doublyLinkedList.get(4));

/*

  get(idx){
    if(idx < 0 || idx >= this.length || typeof idx !== "number") 
      return undefined;

    let wantedNode;
    let objMiddlePoint = this.length / 2;
    let startPoint = 0;

    if(idx < objMiddlePoint){
      while(startPoint <= idx){
        wantedNode = wantedNode ? wantedNode.next : this.head;
        startPoint++; 
      }
    }else{
      while(startPoint < this.length - idx){
        wantedNode = wantedNode ? wantedNode.prev : this.tail;
        startPoint++; 
      }

    }

    return wantedNode;
  }







  get(idx){
    if(idx < 0 || idx >= this.length || typeof idx !== "number") 
      return undefined;

    let wantedNode;
    let objMiddlePoint = this.length / 2;

    if(idx < objMiddlePoint){
      wantedNode = this.head;
      for (let startPoint = 0; startPoint != idx; startPoint++) 
        wantedNode = wantedNode.next;
    }
    else{
        wantedNode = this.tail;
        for (let startPoint = this.length - 1; startPoint != idx; startPoint--)
          wantedNode = wantedNode.prev;
    }

    return wantedNode;
  }

*/