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
};

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);

console.log(singlyLinkedList);
console.log(singlyLinkedList.set("wrong idx", 5));
console.log(singlyLinkedList.set(3, 5));

console.log(singlyLinkedList.set(0, 11));
console.log(singlyLinkedList.set(1, 22));
console.log(singlyLinkedList.set(2, 33));
console.log(singlyLinkedList);




