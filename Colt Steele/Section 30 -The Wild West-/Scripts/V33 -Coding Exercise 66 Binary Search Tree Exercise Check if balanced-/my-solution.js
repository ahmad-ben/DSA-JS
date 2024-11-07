/*

  When we finished the visiting of each node children we should:
    Compare between the deepest depth in both of its sides.
  I believe we should start from the edge node and then compare toward the beginning. 
  We after find the left part of the node and visit it we should add 1 to left.
    The same for right.
  After finishing the visiting of both we should compare.
    If the value between them less than 2:
      Keep the greatest of them as the current node depth, to compare it latter on.


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

  isBalanced(){
    if(!this.root) return true;
    let isBalanced = true;

    const visitNode = (currentNode) => {
      let leftMax = 0, rightMax = 0;

      if(currentNode.left && isBalanced) {
        leftMax = visitNode(currentNode.left);
        leftMax++;
      };
      if(currentNode.right && isBalanced) {
        rightMax = visitNode(currentNode.right);
        rightMax++;
      }
      if(!isBalanced) return isBalanced; 
      if(Math.abs(leftMax - rightMax) > 1) isBalanced = false;
      return Math.max(leftMax, rightMax);
    };

    visitNode(this.root);
    return isBalanced;
  };


};

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree
    .insert(15)
    .insert(10)
    .insert(30)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(11)
    .insert(13)
    .insert(14)
    .insert(50);

/* 

        15
      /    \
     10    30
   /    \    \
  1     12   50
   \   /  \      
    5 11   13 
             \
             14  

*/

console.log(firstBinarySearchTree);
console.log(firstBinarySearchTree.isBalanced());

console.log("==================================================");

const secondBinarySearchTree = new BinarySearchTree();
secondBinarySearchTree
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
    .insert(15)
    .insert(10)
    .insert(20)
    .insert(5)
    .insert(14)
    .insert(18);


/* 

          22 
        /    \
      15     49
    /    \     \
   10     20    85
  /  \   /     /  \ 
 5   14 18    66   95
                 /    \
                90    100 
               /  \   / 
              88  93 97
               \      \
               89     99

*/

console.log(secondBinarySearchTree.isBalanced()); 

console.log("==================================================");

const thirdBinarySearchTree = new BinarySearchTree();
thirdBinarySearchTree
    .insert(20)
    .insert(40)
    .insert(10)
    .insert(15)
    .insert(30)
    .insert(35)
    .insert(7)
    .insert(50);


/* 

           20 
        /     \
      10      40
    /   \    /   \
   7    15  30   50
           /       
          35         

*/

console.log(thirdBinarySearchTree.isBalanced()); 

console.log("==================================================");

const forthBinarySearchTree = new BinarySearchTree();

/* 

           20 
        /     \
      10      40
    /   \    /   \
   7    15  30   50
           /       
          35         

*/

console.log(forthBinarySearchTree.isBalanced()); 
