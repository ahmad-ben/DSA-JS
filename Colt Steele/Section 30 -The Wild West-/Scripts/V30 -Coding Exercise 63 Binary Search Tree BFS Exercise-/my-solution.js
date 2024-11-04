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

  breadthFirstSearch(){
    let nodesArr = [], nodesQueue = [];
    if(this.root) nodesQueue.push(this.root);

    while(nodesQueue.length !== 0){
      const currentNode = nodesQueue.shift();
      nodesArr.push(currentNode.value);
      if(currentNode.left) nodesQueue.push(currentNode.left);
      if(currentNode.right) nodesQueue.push(currentNode.right);
    };

    return nodesArr;
  }

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

console.log(binarySearchTree.breadthFirstSearch()) // [15, 10, 20, 1, 12, 50, 5];