class MaxBinaryHeap {
  constructor(){
    this.value = [];
  }

  insert(val){
    if(this.value.length === 0) {this.value.push(val); return this.value;}
    
    this.value.push(val);
    let childIdx = this.value.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while(this.value[childIdx] > this.value[parentIdx] && childIdx !== 0){
      const parentIdxValue = this.value[parentIdx];
      this.value[parentIdx] = this.value[childIdx];
      this.value[childIdx] = parentIdxValue;
      
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return this.value;

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









