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

}

const maxBinaryHeap = new MaxBinaryHeap();

console.log(maxBinaryHeap.insert(50));
console.log(maxBinaryHeap.insert(1));
console.log(maxBinaryHeap.insert(100));
console.log(maxBinaryHeap.insert(10));
console.log(maxBinaryHeap.insert(80));
console.log(maxBinaryHeap.insert(25));
console.log(maxBinaryHeap.insert(75));
console.log(maxBinaryHeap.insert(90));
console.log(maxBinaryHeap.insert(45));
console.log(maxBinaryHeap.insert(1000));
console.log(maxBinaryHeap.insert(500));
console.log(maxBinaryHeap.insert(600));









