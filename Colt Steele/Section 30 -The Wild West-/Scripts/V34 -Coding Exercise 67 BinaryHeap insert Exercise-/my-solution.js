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

  swap(fI, sI){
    [this.values[fI], this.values[sI]] = [this.values[sI], this.values[fI]];
  }
};

const maxBinaryHeap = new MaxBinaryHeap();
console.log(maxBinaryHeap);
console.log(maxBinaryHeap.insert(10));
console.log(maxBinaryHeap.insert(100));
console.log(maxBinaryHeap.insert(50));
console.log(maxBinaryHeap.insert(20));
console.log(maxBinaryHeap.insert(25));
