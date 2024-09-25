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

  set(idx, val){
    const wantedNode = this.get(idx);

    if(!wantedNode) return undefined;

    wantedNode.val = val;
    return wantedNode;
  }

  insert(idx, val) {
    if(idx === 0) return !!this.unshift(val);
    if(idx === this.length) return !!this.push(val);

    const nextNode = this.get(idx);
    if(!nextNode) return false;

    const prevNode = nextNode.prev;
    const insertedNode = new Node(val);

    prevNode.next = nextNode.prev = insertedNode;
    insertedNode.next = nextNode;
    insertedNode.prev = prevNode;

    this.incrementLength();
    return true;
  }

  remove(idx){
    if(idx === 0) return !!this.shift();
    if(idx === this.length - 1) return !!this.pop();

    const deletedNode = this.get(idx);
    if(!deletedNode) return false;

    const prevNode = deletedNode.prev;
    const nextNode = deletedNode.next;

    deletedNode.prev = deletedNode.next = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.decrementLength();
    return deletedNode;
  }

  reverse(){
    let currentNode = this.head;
    while(currentNode !== null){
      const oldNext = currentNode.next; 
      const oldPrev = currentNode.prev;
      
      currentNode.next = oldPrev;
      currentNode.prev = oldNext;

      currentNode = oldNext;
    }

    const oldHead = this.head;
    this.updateHead(this.tail);
    this.updateTail(oldHead);

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

  decrementLength(){
    this.length--;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push("A");
doublyLinkedList.push("B");
doublyLinkedList.push("C");
doublyLinkedList.push("D");
doublyLinkedList.push("E");
