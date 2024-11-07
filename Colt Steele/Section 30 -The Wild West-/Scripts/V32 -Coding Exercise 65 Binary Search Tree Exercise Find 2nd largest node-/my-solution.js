/*
  - If the tree has no nodes, return `undefined`.
  - If the tree has only one node, return `undefined`.
  - If the tree has only a left subtree and no right subtree:
    - Traverse to the rightmost node in the left subtree and return it as the second largest node.
  - Otherwise, if the tree has a right subtree:
    - Traverse down the right subtree to find the largest node.
    - If the largest node has a left child:
      - Traverse to the rightmost node in its left subtree.
      - Return it as the second largest node.
    - If the largest node does not have a left child:
      - Return the parent of the largest node as the second largest node.

*/

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

  findSecondLargest(){
    if(!this.root || !this.root.right && !this.root.left) return undefined;
    let largestNodeParent = this.root; 
    let secondLargestNode, largestNode;

    if(this.root.right){
      largestNode = this.root.right;
      secondLargestNode = this.root;

      while(largestNode.right){
        largestNodeParent = largestNode;
        largestNode = largestNode.right;
      };

      if(!largestNode.left) secondLargestNode = largestNodeParent;
      else{
        secondLargestNode = largestNode.left;
        while(secondLargestNode.right) secondLargestNode = secondLargestNode.right;
      }
    }else{
      largestNode = this.root;
      secondLargestNode = this.root.left;
      while(secondLargestNode.right) secondLargestNode = secondLargestNode.right;
    };

    return secondLargestNode.value;
  } 

};

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree.insert(15);
firstBinarySearchTree.insert(20);
firstBinarySearchTree.insert(10);
firstBinarySearchTree.insert(12);
console.log(firstBinarySearchTree.findSecondLargest()); // returns 15

/*

   15
  /  \  
 10  20
   \
   12
*/

console.log("==================================================");

const secondBinarySearchTree = new BinarySearchTree();
console.log(secondBinarySearchTree.findSecondLargest()); // returns undefined  
secondBinarySearchTree.insert(10);
console.log(secondBinarySearchTree.findSecondLargest()); // returns undefined  

console.log("==================================================");

const thirdBinarySearchTree = new BinarySearchTree();
thirdBinarySearchTree
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
    .insert(97)
    .insert(99)


/* 

  22
    \
     49
       \
       85
       /  \ 
     66    95
         /    \
        90    100 
       /  \   / 
      88  93 97
        \      \
         89     99

*/

console.log(thirdBinarySearchTree.findSecondLargest()); // returns 99  

console.log("==================================================");

const forthBinarySearchTree = new BinarySearchTree();
forthBinarySearchTree
    .insert(15)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(11)
    .insert(13)
    .insert(14);

/* 

      15
      /  
     10    
   /    \    
  1     12    
   \   /  \      
    5 11   13 
             \
             14  

*/

console.log(forthBinarySearchTree.findSecondLargest()); // returns 14  