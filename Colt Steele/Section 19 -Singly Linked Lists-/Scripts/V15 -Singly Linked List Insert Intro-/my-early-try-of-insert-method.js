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

  insert(index, val){
    if(index === 0) return this.unshift(val) ? true : false;
    if(index === this.length) return this.push(val) ? true : false;

    const nodeBeforeWantedIdx = this.get(index - 1);
    if(!nodeBeforeWantedIdx) return false;

    const currentNodeOfWantedIdx = nodeBeforeWantedIdx.next;
    const newInsertedNode = new Node(val);
    newInsertedNode.next = currentNodeOfWantedIdx;
    nodeBeforeWantedIdx.next = newInsertedNode;
    this.incrementLength();

    return true;
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


console.log(singlyLinkedListObj.insert(3, 0));
console.log(singlyLinkedListObj);

console.log("==============================");

console.log(singlyLinkedListObj.insert(0, 0));
console.log(singlyLinkedListObj);

console.log("==============================");

console.log(singlyLinkedListObj.insert(1, 1)); //{ head: { 0, { 1, null} } }
console.log(singlyLinkedListObj);

console.log("==============================");

console.log(singlyLinkedListObj.insert(1, 0.5)); //{ head: { 0, { 1, null} } }
console.log(singlyLinkedListObj);
