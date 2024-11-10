function WeightedGraph() {
  Graph.call(this);
}

/*** 
   *** Use Graph as a constructor for WeightedGraph to inherit from! 
   ***
***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function() {
  let total = 0;

  Object.values(this.adjacencyList).forEach(list => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function(vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function(vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    v => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
  );
};

/*** 
   *** Use the following as a PriorityQueue (it's a min heap)! 
   ***
***/
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

WeightedGraph.prototype = Object.create(Graph.prototype); // Set the prototype chain
WeightedGraph.prototype.constructor = WeightedGraph;      // Reset the constructor to WeightedGraph

WeightedGraph.prototype.addEdge = function(vertex1, vertex2, weight) {
  this.adjacencyList[vertex1].push({vertex: vertex2, weight});
  this.adjacencyList[vertex2].push({vertex: vertex1, weight});
};

const weightedGraph = new WeightedGraph();

console.log(weightedGraph);

weightedGraph.addVertex('A');
weightedGraph.addVertex('Z');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('H');
weightedGraph.addVertex('Q');
weightedGraph.addVertex('G');

console.log(weightedGraph);

weightedGraph.addEdge('A', 'Z', 7);
weightedGraph.addEdge('A', 'C', 8);

weightedGraph.addEdge('Z', 'Q', 2);

weightedGraph.addEdge('C', 'G', 4);

weightedGraph.addEdge('D', 'Q', 8);

weightedGraph.addEdge('E', 'H', 1);

weightedGraph.addEdge('H', 'Q', 3);

weightedGraph.addEdge('Q', 'C', 6);

weightedGraph.addEdge('G', 'Q', 9);

console.log(weightedGraph);

/* 

A [ { vertex: 'Z', weight: 7 }, { vertex: 'C', weight: 8 } ]
Z [ { vertex: 'A', weight: 7 }, { vertex: 'Q', weight: 2 } ]
C [
  { vertex: 'A', weight: 8 },
  { vertex: 'G', weight: 4 },
  { vertex: 'Q', weight: 6 }
]
D [ { vertex: 'Q', weight: 8 } ]
E [ { vertex: 'H', weight: 1 } ]
H [ { vertex: 'E', weight: 1 }, { vertex: 'Q', weight: 3 } ]
Q [
  { vertex: 'Z', weight: 2 },
  { vertex: 'D', weight: 8 },
  { vertex: 'H', weight: 3 },
  { vertex: 'C', weight: 6 },
  { vertex: 'G', weight: 9 }
]
G [ { vertex: 'C', weight: 4 }, { vertex: 'Q', weight: 9 } ]

*/

WeightedGraph.prototype.Dijkstra = function(startNode, endNode){
  let nextNodesPQ = new PriorityQueue();
  nextNodesPQ.enqueue(startNode, 0);

  let alreadyVisitedNodes = new Set();
  let smallestPathVal = {[startNode]: 0};
  let smallestPathPrevNode = {[startNode]: null};

  while(nextNodesPQ.values.length !== 0){
    const currentNodeName = nextNodesPQ.dequeue().val;
    if(currentNodeName === endNode) break;

    for (const neighbor of this.adjacencyList[currentNodeName]) {
      let neighborName = neighbor.vertex, neighborValue = neighbor.weight;
      if(alreadyVisitedNodes.has(neighborName)) continue;
      
      const startToNeighborPathVal = smallestPathVal[currentNodeName] + neighborValue;
      if(smallestPathVal[neighborName] < startToNeighborPathVal) continue;

      nextNodesPQ.enqueue(neighborName, startToNeighborPathVal);
      smallestPathPrevNode[neighborName] = currentNodeName;
      smallestPathVal[neighborName] = startToNeighborPathVal;
    }

    alreadyVisitedNodes.add(currentNodeName);
  }

  let route = [];
  let currentNode = endNode;
  while(currentNode !== null){
    route.unshift(currentNode);
    currentNode = smallestPathPrevNode[currentNode];
  };

  return {route, value: smallestPathVal[endNode]};
}

console.log(weightedGraph.Dijkstra('A','E')); // ["A", "Z", "Q", "H", "E"], 13
console.log(weightedGraph.Dijkstra('A','Q')); // ["A", "Z", "Q"], 9
console.log(weightedGraph.Dijkstra('A','G')); // ["A", "C", "G"], 12
console.log(weightedGraph.Dijkstra('A','D')); // ["A", "Z", "Q", "D"], 17




/*

  Learn more and more about what happened
  What is the Set Exactly 
  More about the strings complex algorithm ???

*/