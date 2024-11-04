class Node{
  constructor(value){
    this.value = value;
    this.right = this.left = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    };

    let nextNode = this.root;
    while(true){
      if(newNode.value < nextNode.value){
        if(nextNode.left) nextNode = nextNode.left;
        else{            
          nextNode.left = newNode
          break;
        }
      }else{
        if(nextNode.right) nextNode = nextNode.right;
        else{            
          nextNode.right = newNode;
          break;
        }
      }
    }
    return this;
  }

  findIteratively(value){
    let currentNode = this.root;

    while(currentNode){
      if(currentNode.value === value) return currentNode;

      if(currentNode.value < value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
  }

  findRecursively(value, currentNode){
    if(!currentNode) return undefined;
    if(currentNode.value === value) return currentNode;
    if(currentNode.value < value) return this.findRecursively(value, currentNode.right);
    return this.findRecursively(value, currentNode.left);
  }
}

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
const firstFoundNode = firstBinarySearchTree.findRecursively(20, firstBinarySearchTree.root);
console.log(firstFoundNode.value) // 20
console.log(firstFoundNode.left) // null
console.log(firstFoundNode.right) // null
 
const secondBinarySearchTree = new BinarySearchTree();
 
secondBinarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
const secondFoundNode = secondBinarySearchTree.findRecursively(120, secondBinarySearchTree.root);
console.log(secondFoundNode) // undefined