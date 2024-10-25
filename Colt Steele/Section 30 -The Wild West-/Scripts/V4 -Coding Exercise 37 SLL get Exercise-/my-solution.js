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
};

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);

console.log(singlyLinkedList);

console.log(singlyLinkedList.get("test"));  // Undefined
console.log(singlyLinkedList.get(3));       // Undefined
console.log(singlyLinkedList.get(1));

singlyLinkedList.pop();

console.log(singlyLinkedList.get(2));       // Undefined
console.log(singlyLinkedList.get(0)); 

 


