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

  get(index){
    if(this.isIndexNotValid(index)) return undefined;
    
    let currentNode = this.head;
    for (let i = 0; i < index; i++) currentNode = currentNode.next;

    return currentNode;
  }
  
  set(index, val){
    const foundNode = this.get(index);

    if(!foundNode) return undefined;

    foundNode.val = val;
    return foundNode;
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

  isIndexNotValid(index){
    return typeof index !== "number" || index < 0 || index >= this.length ?
      true : false;
  }

}

const singlyLinkedListObj = new SinglyLinkedList();

singlyLinkedListObj.push(1);
singlyLinkedListObj.push(2);
singlyLinkedListObj.push(3);
console.log(singlyLinkedListObj); // head: {1, {2, { 3, null } } }

singlyLinkedListObj.set(0, 111);
console.log(singlyLinkedListObj); // head: {111, {2, { 3, null } } }

singlyLinkedListObj.set(1, 222);
singlyLinkedListObj.set(2, 333);
console.log(singlyLinkedListObj); // head: {111, {222, { 3333, null } } }

console.log(singlyLinkedListObj.set(1000, 1000));

console.log(singlyLinkedListObj.get(0));
console.log(singlyLinkedListObj.get(1));
console.log(singlyLinkedListObj.get(2));

console.log(singlyLinkedListObj.get("test"));
console.log(singlyLinkedListObj.get(-1));
console.log(singlyLinkedListObj.get(1000));


