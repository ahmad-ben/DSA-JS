class Node{
  constructor(val){
    this.val = val;
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
    const newNode = new Node(val); 
    
    if(this.head) this.tail.next = newNode;
    else this.updateHead(newNode);

    this.updateTail(newNode);
    this.incrementLength();

    return this;
  }

  pop(){
    if(this.length === 0) return this;

    if(this.length === 1){
      this.updateHead(null);
      this.updateTail(null);
      this.decrementLength();
      return this;
    }

    let preLastNode = this.head; 
    for (let i = 1; i < this.length - 1; i++) preLastNode = preLastNode.next;

    preLastNode.next = null;
    this.updateTail(preLastNode);
    this.decrementLength();
    return this;
  }

  updateHead(newNode){
    this.head = newNode;
  }

  updateTail(newNode){
    this.tail = newNode;
  }

  incrementLength(){
    this.length++; 
  }

  decrementLength(){
    this.length--;
  }

}

const singlyLinkedListObj = new SinglyLinkedList();

singlyLinkedListObj.push(1);
singlyLinkedListObj.push(2);
singlyLinkedListObj.push(3);
console.log(singlyLinkedListObj);

singlyLinkedListObj.pop();
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(10);
singlyLinkedListObj.push(20);
console.log(singlyLinkedListObj);

singlyLinkedListObj.pop();
console.log(singlyLinkedListObj);

// singlyLinkedListObj.pop();
// console.log(singlyLinkedListObj);

// singlyLinkedListObj.pop();
// console.log(singlyLinkedListObj);

// singlyLinkedListObj.pop();
// console.log(singlyLinkedListObj);