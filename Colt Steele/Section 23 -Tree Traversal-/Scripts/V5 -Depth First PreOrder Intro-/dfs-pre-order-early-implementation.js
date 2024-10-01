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
    let currentNode = this.root;
    while(currentNode){
      if(val === currentNode.val) return currentNode;
      if(val > currentNode.val) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    return undefined;
  }

  bfs() {
    if(!this.root) return [];
  
    let queue = [this.root];
    let treeBfsVal = [];
  
    while(queue.length){
      let oldestNode = queue.pop();
  
      treeBfsVal.push(oldestNode.val);
      if(oldestNode.left) queue.unshift(oldestNode.left);
      if(oldestNode.right) queue.unshift(oldestNode.right);
    };
  
    return treeBfsVal;
  }

  dfsPreOrder(){
    if(!this.root) return [];

    const treeDFSPreOrderNodes = [];
    const traverseNode = (node) => {
      treeDFSPreOrderNodes.push(node.val);
      if(node.left) traverseNode(node.left);
      if(node.right) traverseNode(node.right);
    }

    traverseNode(this.root);
    return treeDFSPreOrderNodes;
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
/* 

          10
    5           20
  2   7      15     22
        9       17

*/

console.log(binarySearchTree.bfs());
console.log(binarySearchTree.dfsPreOrder());

