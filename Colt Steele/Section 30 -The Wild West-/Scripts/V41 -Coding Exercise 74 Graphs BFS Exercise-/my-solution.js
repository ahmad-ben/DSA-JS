class Graph{
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if(
      !this.adjacencyList[vertex1] 
      || !this.adjacencyList[vertex2] 
      || vertex1 === vertex2
    ) return undefined;

    if(!this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1].push(vertex2);
    if(!this.adjacencyList[vertex2].includes(vertex1))
      this.adjacencyList[vertex2].push(vertex1);
    return true;
  }

  breadthFirstSearch(startVertex){
    if(!this.adjacencyList[startVertex]) return undefined;

    let alreadyVisitedNodes = new Set();
    let nextNodesQueue = [startVertex];

    while(nextNodesQueue.length !== 0){
      let currentNode = nextNodesQueue.pop();
      if(alreadyVisitedNodes.has(currentNode)) continue;
      this.adjacencyList[currentNode].forEach(neighbor => {
        if(!alreadyVisitedNodes.has(neighbor)) nextNodesQueue.unshift(neighbor);
      });
      alreadyVisitedNodes.add(currentNode);
    }

    return alreadyVisitedNodes;
  }

};

var graph = new Graph();
 
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
 
graph.addEdge('S','P');
graph.addEdge('S','U');
 
graph.addEdge('P','X');
graph.addEdge('U','X');
 
graph.addEdge('P','Q');
graph.addEdge('U','V');
 
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
 
graph.addEdge('Q','R');
graph.addEdge('Y','R');
 
graph.addEdge('Y','W');
graph.addEdge('V','W');
 
graph.addEdge('R','T');
graph.addEdge('W','T');
 
console.log(graph.breadthFirstSearch('S')); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]