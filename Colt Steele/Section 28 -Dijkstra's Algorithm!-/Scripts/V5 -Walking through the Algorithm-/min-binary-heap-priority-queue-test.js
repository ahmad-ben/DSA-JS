/* 

  We should first check if the index is valid:
    If not return undefined.
    If yes check if it 0.
      If yes basically this is a normal dequeue.
      If no that when the play start.

  Switch between it and the last number and that for keep the filling order correct.
  Now remove it since it's in the end that's fine for ordering purposes.
    The heap should be filled from left to right.
  Return back to the previous last element to correct it's position now.
    Check if it larger than the parent && smallest than its children, if yes, we done.
    If no:
      If it smaller than its parent, we need to bubble it again and again. 
      If it larger than one or more than its children, we need to sink it down again and again. 

*/

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
    this.bubbleCurrent(childIdx);
    return this.values;
  }

  Dequeue(){
    if(this.values.length === 0) return undefined;

    if(this.values.length > 1) this.swap(0, this.values.length - 1);
    const deletedNode = this.values.pop();
    let parentPosition = 0;
    this.sinkCurrent(parentPosition);

    return deletedNode;
  }

  removeFromIdx(currentIdx){
    if(currentIdx < 0 && currentIdx >= this.values.length) return undefined;
    if(currentIdx === 0) return this.Dequeue();
    if(currentIdx === this.values.length - 1) return this.values.pop();

    this.swap(currentIdx, this.values.length - 1);
    const removedNode = this.values.pop();

    let parentIdx = Math.floor((currentIdx - 1) / 2);
    let leftEleIdx = (currentIdx * 2) + 1;
    let rightEleIdx = (currentIdx * 2) + 2;

    if(this.values[currentIdx].priority < this.values[parentIdx].priority) 
      this.bubbleCurrent(currentIdx);
    else if(
      this.values[currentIdx].priority > this.values[leftEleIdx]?.priority ||
      this.values[currentIdx].priority > this.values[rightEleIdx]?.priority
    ) this.sinkCurrent(currentIdx);

    return removedNode;
  }

  bubbleCurrent(childIdx){
    while(childIdx !== 0){
      let childElementPriority = this.values[childIdx].priority;
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parentElementPriority = this.values[parentIdx].priority;
      
      if(childElementPriority >= parentElementPriority) break;
      this.swap(parentIdx, childIdx);
      childIdx = parentIdx;
    }
  }
  
  sinkCurrent(parentPosition){
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
      }else break;
    }
  }

  showOnlyPrioritiesValues(){
    return this.values.map(node => node.priority);
  }

  swap(FI, SI){
    [this.values[FI], this.values[SI]] = [this.values[SI], this.values[FI]];
  }
}

const firstMinBinaryHeap = new MinBinaryHeap();

firstMinBinaryHeap.Enqueue("Zero",        0);
firstMinBinaryHeap.Enqueue("Three",       3);
firstMinBinaryHeap.Enqueue("Twenty",      20);
firstMinBinaryHeap.Enqueue("Six",         6);
firstMinBinaryHeap.Enqueue("Five",        5);
firstMinBinaryHeap.Enqueue("Ten",         10);
firstMinBinaryHeap.Enqueue("Forty four",  44);
firstMinBinaryHeap.Enqueue("One",         1);
firstMinBinaryHeap.Enqueue("Nine",        9);
console.log(firstMinBinaryHeap);

/* 

  Edge Cases:
    console.log(firstMinBinaryHeap.removeFromIdx(10));
    console.log(firstMinBinaryHeap.removeFromIdx("test"));
    console.log(firstMinBinaryHeap.removeFromIdx(-1));

    console.log(firstMinBinaryHeap.removeFromIdx(0));

    console.log(firstMinBinaryHeap.removeFromIdx(8));

*/



/* 
  Base Case:
    [0, 1, 10, 3, 5, 20, 44, 6, 9]
           0
        /     \
       1      10
      / \    /  \
     3   5  20  44
    / \
   6   9 

  Bubble Test
    Remove The Index 5.
    [0, 1, 10, 3, 5, 20, 44, 6, 9]
    [0, 1, 10, 3, 5, 9, 44, 6, 20]
    [0, 1, 10, 3, 5, 9, 44, 6]
    9 < 10 ✔️
    [0, 1, 9, 3, 5, 10, 44, 6]
    9 < 0 ✖️
    Stop and return.
    Result:
           0
        /     \
       1      9
      / \    /  \
     3   5  10  44
    / 
   6  
=================================================
  Sink Test
    Remove The Index 1.
    [0, 1, 10, 3, 5, 20, 44, 6, 9]
    [0, 9, 10, 3, 5, 20, 44, 6, 1]
    [0, 9, 10, 3, 5, 20, 44, 6]
    9 < 0 ✔️
    9 > 3 ✔️ 
    9 > 5 ✔️
    3 > 5 ✖️
    [0, 3, 10, 9, 5, 20, 44, 6]
    9 > 6 ✔️
    [0, 3, 10, 6, 5, 20, 44, 9]
    Result:
            0   
        /       \
       3        10
      /   \    /   \
     6     5  20   44
    /  
   9   

*/


// console.log(firstMinBinaryHeap.removeFromIdx(1));   //=> [0, 3, 10, 6, 5, 20, 44, 9]
// console.log(firstMinBinaryHeap.removeFromIdx(5));  //=> [0, 1, 9, 3, 5, 10, 44, 6]  
console.log(firstMinBinaryHeap.showOnlyPrioritiesValues());

