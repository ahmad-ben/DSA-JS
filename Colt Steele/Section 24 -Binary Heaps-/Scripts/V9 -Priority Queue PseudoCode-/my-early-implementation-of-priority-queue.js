class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class MinBinaryHeap{
  constructor(){
    this.values = [];
  }

  Enqueue(val, priority){
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    let childIdx = this.values.length - 1;
    while(childIdx !== 0){
      let childElementPriority = this.values[childIdx].priority;
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parentElementPriority = this.values[parentIdx].priority;
      
      if(childElementPriority >= parentElementPriority) break;
      this.swap(parentIdx, childIdx);
      childIdx = parentIdx;
    }

    return this.values;
  }

  Dequeue(){
    if(this.values.length === 0) return undefined;

    if(this.values.length > 1) this.swap(0, this.values.length - 1);
    const deletedNode = this.values.pop();

    let parentPosition = 0;
    while(true){
      let leftElePosition = (parentPosition * 2) + 1;
      let leftElePriority = this.values[leftElePosition]?.priority;
      let rightElePosition = (parentPosition * 2) + 2;
      let rightElePriority = this.values[rightElePosition]?.priority;
      let parentPriority = this.values[parentPosition]?.priority;      

      if(parentPriority > leftElePriority){
        if(parentPriority > rightElePriority && leftElePriority > rightElePriority){
          this.swap(parentPosition, rightElePosition);
          parentPosition = rightElePosition;
        }else{
          this.swap(parentPosition, leftElePosition);
          parentPosition = leftElePosition;
        }
      }else if(parentPriority > rightElePriority){
        this.swap(parentPosition, rightElePosition);
        parentPosition = rightElePosition;
      }else return deletedNode;
    }
  }

  swap(FI, SI){
    [this.values[FI], this.values[SI]] = [this.values[SI], this.values[FI]];
  }
}

const firstMinBinaryHeap = new MinBinaryHeap();

firstMinBinaryHeap.Enqueue("Eat my breakfast.", 10);
firstMinBinaryHeap.Enqueue("Say alhmadolilah.",  1);
firstMinBinaryHeap.Enqueue("Wake up early.",   0);
firstMinBinaryHeap.Enqueue("See my parents.",   5);
firstMinBinaryHeap.Enqueue("Think positive.",   3);
firstMinBinaryHeap.Enqueue("Smile.",  2);
console.log(firstMinBinaryHeap);

/*

  Enqueue Simulation
  [10] => 10
  [1, 10] => 1
  [0, 10, 1] => 0
  [0, 5, 1, 10] => 5
  [0, 3, 1, 10, 5] => 3
  [0, 3, 1, 10, 5, 2] => 2

*/

firstMinBinaryHeap.Dequeue();
console.log(firstMinBinaryHeap);

firstMinBinaryHeap.Dequeue();
console.log(firstMinBinaryHeap);


/*

  Dequeue Simulation
  [0, 3, 1, 10, 5, 2]
  [2, 3, 1, 10, 5, 0]
  [2, 3, 1, 10, 5]
  [1, 3, 2, 10, 5]

  [1, 3, 2, 10, 5]
  [5, 3, 2, 10, 1]
  [5, 3, 2, 10]
  [2, 3, 5, 10]

*/