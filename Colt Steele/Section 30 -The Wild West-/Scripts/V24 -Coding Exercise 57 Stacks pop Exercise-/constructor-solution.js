class Node{
  constructor(value){
    this.value = value;
    this.next = null; // points to the previous node
  }
}

class Stack{
  constructor(){      
    this.first = null;
    this.last = null;  
    this.size = 0;
  };

  push(value){
    const newFirst = new Node(value);
    if(this.first) newFirst.next = this.first;
    else this.last = newFirst;
    this.first = newFirst;
    return ++this.size; 
  };

  pop(){
    if(this.size === 0) return undefined;
    let removedFirst = this.first;

    if(this.size === 1){
      this.first = this.last = null;
    }else{
      this.first = removedFirst.next;
      removedFirst.next = null;
    }

    this.size--;
    return removedFirst.value;
  };
};