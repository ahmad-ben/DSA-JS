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

}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.root = new Node(10);
binarySearchTree.root.right = new Node(20);
binarySearchTree.root.left = new Node(5);
binarySearchTree.root.right.left = new Node(15);

console.log(binarySearchTree);


