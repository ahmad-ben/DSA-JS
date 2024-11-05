/*

If the node to remove has no children, simply remove the node.
If the node has only one child:
  Remove the node.
  Link its child directly to the parent of the removed node.
If the node has two children:
  Choose one of the following:
    One:
      Go to the right subtree. 
      Find the smallest node there.
      Use it to replace the removed node.
    Two:
      Go to the left subtree.
      Find the largest node there.
      Use it to replace the removed node.
  Link the parent of the chosen replacement node to its child. 
  Adjusting any necessary links after moving the replacement.

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

  remove(value){
    let parentOfFoundNode;
    let foundNodePosition;
    let foundNode = this.root;

    while(foundNode){
      if(foundNode.value === value) break;
      parentOfFoundNode = foundNode;
      if(foundNode.value < value) {
        foundNode = foundNode.right
        foundNodePosition = "right";
      }else {
        foundNode = foundNode.left;
        foundNodePosition = "left";
      }
    };

    if(!foundNode) return undefined;

    if(!foundNode.right && !foundNode.left) parentOfFoundNode[foundNodePosition] = null;
    else if(!foundNode.right){
      parentOfFoundNode[foundNodePosition] = foundNode.left;
      foundNode.left = null;
    }else if(!foundNode.left){
      parentOfFoundNode[foundNodePosition] = foundNode.right;
      foundNode.right = null;
    }else{
      let smallestValueInRightParent = foundNode; 
      let smallestValueInRight = foundNode.right; 
      let leftPartitionEntered = false; 
      while(smallestValueInRight.left){
        leftPartitionEntered = true;
        smallestValueInRightParent = smallestValueInRight;
        smallestValueInRight = smallestValueInRight.left;
      };

      if(!leftPartitionEntered) foundNode.right = null;
      else{
        smallestValueInRightParent.left = smallestValueInRight.right;
        smallestValueInRight.right = foundNode.right;
      }

      smallestValueInRight.left = foundNode.left;
      parentOfFoundNode[foundNodePosition] = smallestValueInRight;
      foundNode.left = foundNode.right = null;
    };

    return foundNode;
  }

};

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// console.log(binarySearchTree.remove(50));
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.right.right) // null
// console.log(binarySearchTree);

// console.log(binarySearchTree.remove(5));
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right) // null
// console.log(binarySearchTree.root.left);

/* 

      15
     /  \
    10  20
   /  \    \
  1   12   50
   \      
    5   

*/

// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

/* 

      15
     /  \
    10   20
   /  \    \
  1   12   50
   \      
    5     

*/
   
// console.log(binarySearchTree.root.left);
// console.log(binarySearchTree.remove(1));
// console.log(binarySearchTree.root.left.left.value) // 5
// console.log(binarySearchTree.root.left.left.left) // null
// console.log(binarySearchTree.root.left.left.right) // null
// console.log(binarySearchTree.root.left);

// console.log("==================================================");
 
// console.log(binarySearchTree.root);
// console.log(binarySearchTree.remove(20));
// console.log(binarySearchTree.root.right.value) // 50
// console.log(binarySearchTree.root.right.right) // null
// console.log(binarySearchTree.root.right.left) // null
// console.log(binarySearchTree.root);
 
// const binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50)
//     .insert(60)
//     .insert(30)
//     .insert(25)
//     .insert(23)
//     .insert(24)
//     .insert(70);



/* 

       15
     /    \
    10    20
   /  \     \
  1   12    50
   \       /   \ 
    5     30   60
          /      \
         25      70 
        / 
       23
       /
      24

*/

// console.log(binarySearchTree.remove(10));
// console.log(binarySearchTree.root.left.value) // 12
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right.value) // 5
 
// console.log(binarySearchTree.remove(50));
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.right.right.value) // 60
// console.log(binarySearchTree.root.right.right.left.value) // 30
 
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
       /       \
      88        93
        \
         89

*/


console.log(binarySearchTree.remove(85));
console.log(binarySearchTree.root.right.right.value) // 88
console.log(binarySearchTree.root.right.right.right.left.left.value) // 89