class Graph{
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = 
      this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
    this.adjacencyList[vertex2] = 
      this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]) return undefined;
    this.adjacencyList[vertex].forEach( deletedVertexEdge => 
      this.adjacencyList[deletedVertexEdge] = 
        this.adjacencyList[deletedVertexEdge].filter( edge => edge !== vertex )
    );
    delete this.adjacencyList[vertex];
  }

};

const graph = new Graph();
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
 
/*
  A [B C]
  B [A D]
  C [A D]
  D [B C]
*/

graph.removeVertex('Z');
graph.removeVertex('C');
graph.removeVertex('B');
 
console.log(graph.adjacencyList['A']); // still exists
console.log(graph.adjacencyList['D']); // still exists