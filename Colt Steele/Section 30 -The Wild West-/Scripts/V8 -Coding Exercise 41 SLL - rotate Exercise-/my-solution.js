/*
  Rotate Method:
    If: 
      We have 
        1 -> 2 -> 3 -> 4 -> 5 -> 6
      And choose 2 as a value, the result should be:
        3 -> 4 -> 5 -> 6 -> 1 -> 2
      And choose 5 as a value, the result should be:
        6 -> 1 -> 2 -> 3 -> 4 -> 5 
  Some thoughts:
    The node with the wanted val become the tail.
    The node after the wanted node become the head.
      Problem here! what about choosing the last node, there is no next!!
        I believe the SLL stays the same. 
  Process:
    Get the wanted node.
    Get the after wanted node by next.
    Make the wanted node's next null -because it's the new tail-.
    Make the current tail linked with the current head.
    Make the wanted node the new tail.
    Make the after wanted node the new head.
      Let's say we want the value 2, let's try:
        1 -> 2 -> 3 -> 4 -> 5 -> 6 
          Wanted Node "2", Next Wanted Node "3".
        1 -> 2  3 -> 4 -> 5 -> 6
          Make Wanted Node's Next Null.
        3 -> 4 -> 5 -> 6 -> 1 -> 2
          Current Tail Linked With The Current Head.

*/


class Node{
  constructor(val){
    this.val = val
    this.next = null;      
  }
}

class SinglyLinkedList{
  
  constructor(){
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

  get(idx){
    if(!(idx >= 0 && idx < this.length)) return null;
    let wantedNode = this.head;
    for (let i = 0; i < idx; i++) wantedNode = wantedNode.next;
    return wantedNode;
  }

  set(idx, val){
    const wantedNode = this.get(idx);
    if(!wantedNode) return false;
    wantedNode.val = val;
    return true;
  }

  insert(idx, val){
    if(!(idx >= 0 && idx <= this.length)) return false;
    if(idx === this.length) return !!this.push(val);

    const insertedNode = new Node(val); 
    if(idx === 0){
      insertedNode.next = this.head;
      this.head = insertedNode;
    }else{
      const beforeIdx = this.get(idx - 1);
      const afterIdx = beforeIdx.next;
      beforeIdx.next = insertedNode;
      insertedNode.next = afterIdx;      
    }

    this.length++;
    return true;
  }

  remove(idx){
    const removedNode = this.get(idx);

    if(!removedNode) return undefined;
    if(idx === this.length - 1) return this.pop();

    if(idx === 0) this.head = this.head.next;
    else{
      const preRemoveNode = this.get(idx);
      preRemoveNode.next = removedNode.next;
    }

    this.length--;
    removedNode.next = null;
    return removedNode;
  }

  rotate(idx){
    if(this.length < 2 || idx === 0) return this;
    if(idx < 0) idx = this.length + idx;

    let beforeWantedNode = this.get(idx - 1);
    if(!beforeWantedNode) return this;

    const wantedNode = beforeWantedNode.next;

    beforeWantedNode.next = null;
    this.tail.next = this.head;
    this.tail = beforeWantedNode;
    this.head = wantedNode;

    return this;
  }

  showSllAsArray(){
    let sll;
    let currentNode = this.head;

    while (currentNode) {
      sll = sll ? `${sll} -> ${currentNode.val}` : currentNode.val;
      currentNode = currentNode.next;
    }

    console.log(sll);
  }

};


console.log("=====     Declare the list     =====");

const singlyLinkedListFirst = new SinglyLinkedList;
singlyLinkedListFirst.push(5).push(10).push(15).push(20).push(25);
singlyLinkedListFirst.showSllAsArray();

console.log(singlyLinkedListFirst.head.val); // 5
console.log(singlyLinkedListFirst.tail.val); // 25;

console.log("=====     Test 1     =====");
 
singlyLinkedListFirst.rotate(3);
console.log(singlyLinkedListFirst.head.val); // 20
console.log(singlyLinkedListFirst.head.next.val); // 25
console.log(singlyLinkedListFirst.head.next.next.val); // 5
console.log(singlyLinkedListFirst.head.next.next.next.val); // 10
console.log(singlyLinkedListFirst.head.next.next.next.next.val); // 15
console.log(singlyLinkedListFirst.tail.val); // 15
console.log(singlyLinkedListFirst.tail.next); // null

console.log("=====     Declare the list     =====");

const singlyLinkedListSecond = new SinglyLinkedList;
singlyLinkedListSecond.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedListSecond.head.val); // 5
console.log(singlyLinkedListSecond.tail.val); // 25;

console.log("=====     Test 2     =====");

singlyLinkedListSecond.rotate(-1); 
console.log(singlyLinkedListSecond.head.val); // 25
console.log(singlyLinkedListSecond.head.next.val); // 5
console.log(singlyLinkedListSecond.head.next.next.val); // 10
console.log(singlyLinkedListSecond.head.next.next.next.val); // 15
console.log(singlyLinkedListSecond.head.next.next.next.next.val); // 20
console.log(singlyLinkedListSecond.tail.val); // 20
console.log(singlyLinkedListSecond.tail.next) // null

console.log("=====     Declare the list     =====");

const singlyLinkedListThird = new SinglyLinkedList;
singlyLinkedListThird.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedListThird.head.val); // 5
console.log(singlyLinkedListThird.tail.val); // 25;

console.log("=====     Test 3     =====");

singlyLinkedListThird.rotate(1000);
console.log(singlyLinkedListThird.head.val); // 5
console.log(singlyLinkedListThird.head.next.val); // 10
console.log(singlyLinkedListThird.head.next.next.val); // 15
console.log(singlyLinkedListThird.head.next.next.next.val); // 20
console.log(singlyLinkedListThird.head.next.next.next.next.val); // 25
console.log(singlyLinkedListThird.tail.val); // 25
console.log(singlyLinkedListThird.tail.next); // null