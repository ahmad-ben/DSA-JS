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
    if(!this.head) return undefined;
  
    let currentLastNode = this.head;
    let nodeBeforeLast = null;
    while(currentLastNode.next){
      nodeBeforeLast = currentLastNode;
      currentLastNode = currentLastNode.next;
    }

    if(!nodeBeforeLast) this.updateHead(null);
    else nodeBeforeLast.next =  null;

    this.updateTail(nodeBeforeLast);
    this.decrementLength();
    return nodeBeforeLast ? nodeBeforeLast.val : undefined;
  }

  shift(){
    if(!this.head) return undefined;

    if(!this.head.next) this.updateTail(null);

    const oldHead = this.head;
    let newHead = oldHead.next;

    this.updateHead(newHead);
    this.decrementLength();
    return oldHead.val;
  }

  unshift(val){
    const newHead = new Node(val);
    newHead.next = this.head;

    if(!this.head) this.updateTail(newHead);

    this.updateHead(newHead);
    this.incrementLength();

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

const singlyLinkedListObj = new SinglyLinkedList();

singlyLinkedListObj.push(1);
singlyLinkedListObj.push(2);
singlyLinkedListObj.push(3);
console.log(singlyLinkedListObj);

singlyLinkedListObj.unshift(0);
console.log(singlyLinkedListObj);

const singlyLinkedListObjTwo = new SinglyLinkedList();

singlyLinkedListObjTwo.unshift(0);
console.log(singlyLinkedListObjTwo);

singlyLinkedListObjTwo.unshift(-1);
singlyLinkedListObjTwo.unshift(-2);
console.log(singlyLinkedListObjTwo);