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

  remove(value) {
    this.root = removeNode(this.root, value);
  
    function removeNode(node, value) {
      if (!node) return null;
  
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // Node with no children
        if (!node.left && !node.right) return null;
  
        // Node with one child
        if (!node.left) return node.right;
        if (!node.right) return node.left;
  
        // Node with two children
        let successor = findMin(node.right);
        node.value = successor.value;
        node.right = removeNode(node.right, successor.value);
        return node;
      }
    }
  
    function findMin(node) {
      while (node.left) node = node.left;
      return node;
    }
  }

};




const binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)


/* 

  22
    \
     49
       \
       85
       /  \ 
     66   95
         /  \
        90  100 
       /  \
      88  93
        \
         89

*/


console.log(binarySearchTree.remove(85));
console.log(binarySearchTree.root.right.right.value) // 88
console.log(binarySearchTree.root.right.right.right.left.left.value) // 89