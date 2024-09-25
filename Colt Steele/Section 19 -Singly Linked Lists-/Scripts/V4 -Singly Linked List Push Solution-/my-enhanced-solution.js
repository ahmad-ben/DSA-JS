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

  updateHead(newNode){
    this.head = newNode;
  }

  updateTail(newNode){
    this.tail = newNode;
  }

  incrementLength(){
    this.length++; 
  }

}

const singlyLinkedListObj = new SinglyLinkedList();
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(1);
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(2);
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(3);
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(4);
console.log(singlyLinkedListObj);

singlyLinkedListObj.push(5);
console.log(singlyLinkedListObj);