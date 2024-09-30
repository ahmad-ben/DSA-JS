class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);
    if(!this.root) { this.root = newNode; return this };

    let currentNode = this.root;
    while(
      currentNode.val > val && currentNode.left || 
      currentNode.val < val && currentNode.right 
    ){
      if(currentNode.val > val) currentNode = currentNode.left;
      else if(currentNode.val < val) currentNode = currentNode.right;
    }

    if(currentNode.val > val) currentNode.left = newNode;
    else if(currentNode.val < val) currentNode.right = newNode;

    return this;
  }

  find(val){
    if(!this.root) return undefined;

    let currentNode = this.root;
    while(
      val > currentNode.val && currentNode.right ||
      val < currentNode.val && currentNode.left 
    ){
      if(val > currentNode.val) currentNode = currentNode.right;
      else if(val < currentNode.val) currentNode = currentNode.left;
    }

    if(val === currentNode.val) return currentNode;
    return undefined;
  }

}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(20);
binarySearchTree.insert(2);
binarySearchTree.insert(7);
binarySearchTree.insert(15);
binarySearchTree.insert(22);
binarySearchTree.insert(9);
binarySearchTree.insert(17);

console.log(binarySearchTree);

/* 

          10
    5           20
  2   7      15     22
        9       17

*/


