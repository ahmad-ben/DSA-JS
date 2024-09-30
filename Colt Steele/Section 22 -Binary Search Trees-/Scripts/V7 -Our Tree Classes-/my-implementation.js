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
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.root = new Node(10);
binarySearchTree.root.right = new Node(20);
binarySearchTree.root.left = new Node(5);
binarySearchTree.root.right.left = new Node(15);

console.log(binarySearchTree);

