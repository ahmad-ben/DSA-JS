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
}

const firstBinarySearchTree = new BinarySearchTree();

firstBinarySearchTree.insert(15);
firstBinarySearchTree.insert(20);
firstBinarySearchTree.insert(10);
firstBinarySearchTree.insert(12);
console.log(firstBinarySearchTree.root.value) // 15
console.log(firstBinarySearchTree.root.right.value) // 20
console.log(firstBinarySearchTree.root.left.right.value) // 12
 
var secondBinarySearchTree = new BinarySearchTree();
secondBinarySearchTree.insert(15).insert(20).insert(10).insert(12);
console.log(secondBinarySearchTree.root.value) // 15
console.log(secondBinarySearchTree.root.right.value) // 20
console.log(secondBinarySearchTree.root.left.right.value) // 12