class MaxBinaryHeap {
  constructor(){
    this.values = [100, 90, 30, 10, 60, 20, 5, 9, 1, 40, 3, 7, 12, 2, 4];
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
    if(!this.values.length) return undefined; 

    let emptyIdx = 0;
    this.values[emptyIdx] = undefined;
    let firstChildOfEmptyIdx = (emptyIdx * 2) + 1;
    let secondChildOfEmptyIdx = firstChildOfEmptyIdx + 1;

    while(firstChildOfEmptyIdx < this.values.length - 1){
      if(
        this.values[firstChildOfEmptyIdx] >= this.values[secondChildOfEmptyIdx] ||
        this.values[secondChildOfEmptyIdx] === undefined
      ){
        this.values[emptyIdx] = this.values[firstChildOfEmptyIdx];
        this.values[firstChildOfEmptyIdx] = undefined;
        emptyIdx = firstChildOfEmptyIdx;
      }else{
        this.values[emptyIdx] = this.values[secondChildOfEmptyIdx];
        this.values[secondChildOfEmptyIdx] = undefined;
        emptyIdx = secondChildOfEmptyIdx;
      }

      firstChildOfEmptyIdx = (emptyIdx * 2) + 1;
      secondChildOfEmptyIdx = firstChildOfEmptyIdx + 1;
    }

    return this.values;
  }

}

const maxBinaryHeap = new MaxBinaryHeap();


// console.log(maxBinaryHeap.insert(90));
// console.log(maxBinaryHeap.insert(40));
// console.log(maxBinaryHeap.insert(100));
// console.log(maxBinaryHeap.insert(10));
// console.log(maxBinaryHeap.insert(0));
// console.log(maxBinaryHeap.insert(50));
// console.log(maxBinaryHeap.insert(99));

console.log(maxBinaryHeap.extractMax());


/*
        100
    40        99
  10    0   50    90

*/







/*


        99
    40        90
  10    0   50    



*/

