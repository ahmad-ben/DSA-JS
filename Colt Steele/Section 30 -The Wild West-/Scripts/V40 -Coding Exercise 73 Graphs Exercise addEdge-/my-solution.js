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
};


var graph = new Graph();
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
 
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
 
console.log(graph.adjacencyList['A']); // contains both ('B', 'C')
console.log(graph.adjacencyList['B']); // contains both ('A', 'D')
console.log(graph.adjacencyList['C']); // contains both ('A', 'D')
console.log(graph.adjacencyList['D']); // contains both ('C', 'B')