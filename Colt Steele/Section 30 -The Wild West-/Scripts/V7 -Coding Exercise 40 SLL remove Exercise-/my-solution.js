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
      const preRemoveNode = this.get(idx - 1);
      preRemoveNode.next = removedNode.next;
    }

    this.length--;
    removedNode.next = null;
    return removedNode;
  }

};

/*
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);
singlyLinkedList.push(40);
singlyLinkedList.push(50);
singlyLinkedList.push(60);
console.log(singlyLinkedList);

console.log("=====     Test Method     =====");

console.log(singlyLinkedList.remove("Invalid index"));  // Undefined
console.log(singlyLinkedList.remove(6));                // Undefined
console.log(singlyLinkedList.remove());                 // Undefined

console.log(singlyLinkedList.remove(5), singlyLinkedList.length); // 60, 5
console.log(singlyLinkedList.remove(0));                          // 10
console.log(singlyLinkedList.remove(2));                          // 40 
console.log(singlyLinkedList);                                    // 20 -> 30 -> 50 
*/

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20); //5 -> 10 -> 15 -> 20
console.log(singlyLinkedList.remove(2).val); // 15 "5 -> 10 -> 20"
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length) // 3
console.log(singlyLinkedList.head.val) // 5
console.log(singlyLinkedList.head.next.val) // 10
console.log(singlyLinkedList.head.next.next.val) // 20