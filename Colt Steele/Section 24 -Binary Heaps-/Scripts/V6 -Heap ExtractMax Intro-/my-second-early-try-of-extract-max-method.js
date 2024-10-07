class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(val){
    this.values.push(val);
    let childIdx = this.values.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while(this.values[childIdx] > this.values[parentIdx] && childIdx){
      const parentPrevValue = this.values[parentIdx];
      this.values[parentIdx] = this.values[childIdx];
      this.values[childIdx] = parentPrevValue;
      
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return this.values;
  }

  extractMax(){
    if(this.values.length <= 1) {
      this.values = [];
      return this.values;
    }; 

    this.swap(0, this.values.length - 1);
    this.values.pop();

    let parentPosition = 0;
    while(true){
      let leftChildPosition = (parentPosition * 2) + 1;
      let leftChild = this.values[leftChildPosition];
      let rightChildPosition = (parentPosition * 2) + 2;
      let rightChild = this.values[rightChildPosition];
      let parent = this.values[parentPosition];      
      
      if(parent < leftChild){
        if(parent < rightChild && leftChild < rightChild){
          this.swap(parentPosition, rightChildPosition);
          parentPosition = rightChildPosition;
        }else{
          this.swap(parentPosition, leftChildPosition);
          parentPosition = leftChildPosition;
        }
      }else if(parent < rightChild){
        this.swap(parentPosition, rightChildPosition);
        parentPosition = rightChildPosition;
      }else return this.values;

    }
  }

  swap(idxOne, idxTwo){
    let firstItem = this.values[idxOne];
    this.values[idxOne] = this.values[idxTwo];
    this.values[idxTwo] = firstItem;
  }

}

const firstMaxBinaryHeap = new MaxBinaryHeap();

firstMaxBinaryHeap.insert(90);
firstMaxBinaryHeap.insert(40);
firstMaxBinaryHeap.insert(100);
firstMaxBinaryHeap.insert(10);
firstMaxBinaryHeap.insert(0);
firstMaxBinaryHeap.insert(50);
firstMaxBinaryHeap.insert(99);

console.log(firstMaxBinaryHeap.values);
console.log(firstMaxBinaryHeap.extractMax());

/*
  [100, 40, 99, 10, 0, 50, 90]
        100
    40        99
  10    0   50    90
*************************************************
  [ 99, 40, 90, 10, 0, 50 ]
        99
    40        90
  10    0   50    
*/

//=================================================================================================

const secondMaxBinaryHeap = new MaxBinaryHeap();

secondMaxBinaryHeap.insert(2);
secondMaxBinaryHeap.insert(8);
secondMaxBinaryHeap.insert(10);
secondMaxBinaryHeap.insert(14);
secondMaxBinaryHeap.insert(24);
secondMaxBinaryHeap.insert(34);
secondMaxBinaryHeap.insert(28);
secondMaxBinaryHeap.insert(16);

console.log(secondMaxBinaryHeap.values);
console.log(secondMaxBinaryHeap.extractMax());

/*

  [34, 16, 28, 14, 10, 8, 24, 2]
          34
      16     28
    14  10  8  24
  2
*************************************************
  [28, 16, 24, 14, 10, 8, 2]
          28
      16     24
    14  10  8  2

*/


/*

  if(parent < leftChild && parent < rightChild){
    if(leftChild > rightChild){
      this.swap(parentPosition, leftChildPosition);
      parentPosition = leftChildPosition;
    }else{
      this.swap(parentPosition, rightChildPosition);
      parentPosition = rightChildPosition;
    }
  }else if(parent < leftChild){
    this.swap(parentPosition, leftChildPosition);
    parentPosition = leftChildPosition;
  }else if(parent < rightChild){
    this.swap(parentPosition, rightChildPosition);
    parentPosition = rightChildPosition;
  } else return this.values;

*/