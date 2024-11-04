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

  DFSPreOrder(){
    let nodesArr = [];

    const visitNode = (currentNode) => {
      nodesArr.push(currentNode.value);
      if(currentNode.left) visitNode(currentNode.left);
      if(currentNode.right) visitNode(currentNode.right);
    };

    visitNode(this.root);
    return nodesArr;
  };

  DFSInOrder(){
    let nodesArr = [];

    const visitNode = (currentNode) => {
      if(currentNode.left) visitNode(currentNode.left);
      nodesArr.push(currentNode.value);
      if(currentNode.right) visitNode(currentNode.right);
    };

    visitNode(this.root);
    return nodesArr;
  };

  DFSPostOrder(){
    let nodesArr = [];

    const visitNode = (currentNode) => {
      if(currentNode.left) visitNode(currentNode.left);
      if(currentNode.right) visitNode(currentNode.right);
      nodesArr.push(currentNode.value);
    };

    visitNode(this.root);
    return nodesArr;
  };
};

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

console.log(binarySearchTree.DFSPreOrder());     // [15, 10, 1, 5, 12, 20, 50]
console.log(binarySearchTree.DFSInOrder());      // [1, 5, 10, 12, 15, 20, 50]
console.log(binarySearchTree.DFSPostOrder());    // [5, 1, 12, 10, 50, 20, 15]