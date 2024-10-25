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
};

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);
console.log(singlyLinkedList);

console.log(singlyLinkedList.insert());       // false
console.log(singlyLinkedList.insert(4));      // false

console.log(singlyLinkedList.insert(0, 0));   //true
console.log(singlyLinkedList.insert(4, 40));  //true
console.log(singlyLinkedList.insert(1, 5));   //true
console.log(singlyLinkedList.insert(6, 100)); //true
console.log(singlyLinkedList.insert(6, 90));  //true
console.log(singlyLinkedList);