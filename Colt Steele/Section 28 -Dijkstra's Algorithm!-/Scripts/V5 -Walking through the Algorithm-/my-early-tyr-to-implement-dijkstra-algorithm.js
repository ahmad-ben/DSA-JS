/*

  Notes may help -I believe-:
    The priority queue used for organize who the next node to start from.
      Min priority queue since we want the smallest distance weight node.
    It may help to use the bfs, with a min priority queue.
      The bfs with the min heap priority queue give us the ability to take the smallest always.
    Right now we may have the ability to do the following:
      Visit all nodes by bts.
      Prioritize the smallest duo priority queue.
      It can be initially like:
        [{startNode: 0, otherNodes: +∞}}]
      And then start visiting normally.
    So the overview of the process may be like:
      Create the previous pq.
      dequeue the start point.
      visit its neighbors and add -enqueue- the to the qp -that always prioritize the smallest-.
      to save the last node we were in before we achieve the noe we can add additional property. 
        with a name like previous.
      Each time we achieve a node from other check if the distance value: 
        If the new one bigger, ignore and complete.
        Since we care about the smallest one.
        If the new one is less.
          remove -dequeue- the previous node.
          add -enqueue- the previous node but with the new value to take its proper position there.
      the pq shouldn't store the data that we want to stay with as like:
        for each node the previous node and the value of the smallest distance.
      When you finish a node neighbors visit, add it to an object for the visited nodes.
      Also we need an object to store the already visited node and the value of the current distance of them.


*/

// ===== PRIORITY QUEUE =====
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


// ===== GRAPH =====
class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertexName){
    if(this.adjacencyList[vertexName]) 
      throw new Error(`${vertexName} is already exist!!`); 
    this.adjacencyList[vertexName] = [];
  }

  addEdge(vertexOne, vertexTwo, weight){
    this.adjacencyList[vertexOne].push({node: vertexTwo, weight});
    this.adjacencyList[vertexTwo].push({node: vertexOne, weight});
  }

  bftIteratively(startVertex){
    let visitedVertices = {};
    let visitedVerticesArr = [];
    visitedVertices[startVertex] = true;
    let queueOfNextVertices = [startVertex];

    while(queueOfNextVertices.length){
      const firstVertex = queueOfNextVertices.shift();
      visitedVerticesArr.push(firstVertex);

      this.adjacencyList[firstVertex].forEach(edge => {
        if(!visitedVertices[edge]){
          visitedVertices[edge] = true;
          queueOfNextVertices.push(edge);
        }
      })
    }

    return visitedVerticesArr;
  }

  dijkstraAlgorithm(startVertex){
    // To save the next vertices that we need to visit them
    let nextVerticesPriorityQueue = new MinBinaryHeap();
    // To save the next vertices we already visited, so we don't do again.
    let alreadyVisitedNodes = {};
    // To save the value of the smallest distance for each vertex.
    let nodesSmallestPathValue = {};
    // To save the value of the smallest distance for each vertex.
    let nodesPrevNode = {};
    
    nextVerticesPriorityQueue.Enqueue(startVertex, 0);
    nodesSmallestPathValue[startVertex] = 0;
    nodesPrevNode[startVertex] = null;
    alreadyVisitedNodes[startVertex] = true;

    let queueArr = nextVerticesPriorityQueue.values;

    while(queueArr.length > 0){
      const currentVertex = nextVerticesPriorityQueue.Dequeue();
      const vertexEdges = this.adjacencyList[currentVertex.val];

      for (const {node, weight} of vertexEdges) {
        if(alreadyVisitedNodes[node]) continue;
        const currentPathVal = nodesSmallestPathValue[currentVertex.val] + weight;
        if(nodesSmallestPathValue[node]){
          if(currentPathVal > nodesSmallestPathValue[node]) continue;

          let currentNodeIdx;
          queueArr.forEach((queueNode, queueNodeIdx) => {
            if(queueNode.val === node) currentNodeIdx = queueNodeIdx;
          });
          
          nextVerticesPriorityQueue.removeFromIdx(currentNodeIdx);
        }

        nodesSmallestPathValue[node] = currentPathVal;
        nodesPrevNode[node] = currentVertex.val;
        nextVerticesPriorityQueue.Enqueue(node, currentPathVal);
        
      }

      alreadyVisitedNodes[currentVertex.val] = true;
    }
    
    return nodesSmallestPathValue, nodesPrevNode;
  }
}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

/*
  
  {
    A: [ {n:'B',w:4}, {n:'C',w:2} ],
    B: [ {n:'A',w:4}, {n:'E',w:3} ],
    C: [ {n:'A',w:2}, {n:'D',w:2}, {n:'F',w:4} ],
    D: [ {n:'C',w:2}, {n:'E',w:3}, {n:'F',w:1} ],
    E: [ {n:'B',w:3}, {n:'D',w:3}, {n:'F',w:1} ],
    F: [ {n:'C',w:4}, {n:'D',w:1}, {n:'E',w:1} ]
  }

  {null, a, a, c, f, d}

*/

console.log(graph.dijkstraAlgorithm("A"));