class MaxBinaryHeap{
  constructor(){
    this.values = [];    
  }

  insert(value){
    const arrLength = this.values.push(value);
    let newValIdx = arrLength - 1;

    while(newValIdx !== 0){
      let fatherOfValIdx = Math.floor((newValIdx - 1) / 2);
      if(this.values[newValIdx] <= this.values[fatherOfValIdx]) break;
      this.swap(newValIdx, fatherOfValIdx);
      newValIdx = fatherOfValIdx;
    };

    return this.values;
  };

  extractMax(){
    if(this.values.length === 0) return undefined;
    if(this.values.length === 1) return this.values = [];
    let unstableValIdx = 0;
    let unstableVal, rightChildIdx, rightChildVal, leftChildIdx, leftChildVal;

    this.swap(0, this.values.length - 1);
    this.values.pop(); //No need for delete from the beginning just switch to end and pop it.

    while(true){
      leftChildIdx = (unstableValIdx * 2) + 1;
      leftChildVal = this.values[leftChildIdx];
      rightChildIdx = leftChildIdx + 1;
      rightChildVal = this.values[rightChildIdx];
      unstableVal = this.values[unstableValIdx];

      if(leftChildVal > unstableVal){
        if(rightChildVal > unstableVal && rightChildVal > leftChildVal){
          this.swap(rightChildIdx, unstableValIdx);
          unstableValIdx = rightChildIdx;
        }else{
          this.swap(leftChildIdx, unstableValIdx);
          unstableValIdx = leftChildIdx;          
        }
      }else if(rightChildVal > unstableVal){
        this.swap(rightChildIdx, unstableValIdx);
        unstableValIdx = rightChildIdx;
      }else break;
    };
  };

  swap(fI, sI){
    [this.values[fI], this.values[sI]] = [this.values[sI], this.values[fI]];
  }
};

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(1)
maxBinaryHeap.insert(2)
maxBinaryHeap.insert(3)
maxBinaryHeap.insert(4)
maxBinaryHeap.insert(5)
maxBinaryHeap.insert(6)
maxBinaryHeap.extractMax();


console.log(maxBinaryHeap.values[0]) // 5

console.log(maxBinaryHeap.values) // [5,4,2,1,3])
 
maxBinaryHeap.extractMax()
console.log(maxBinaryHeap.values) // [4,3,2,1])
 
maxBinaryHeap.extractMax()
console.log(maxBinaryHeap.values) // [3,1,2])

/*
[6, 4, 5, 1, 3, 2]
[2, 4, 5, 1, 3, 6]
[2, 4, 5, 1, 3]
[5, 4, 2, 1, 3]

       6
     /   \
    4     5
   / \   /
  1   3 2
*/
