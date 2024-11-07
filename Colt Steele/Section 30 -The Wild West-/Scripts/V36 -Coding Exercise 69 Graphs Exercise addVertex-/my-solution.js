class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    this.adjacencyList[vertex] = [];
  }
}
var graph = new Graph;
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log(graph.adjacencyList['A']); // []
console.log(graph.adjacencyList['B']); // []
console.log(graph.adjacencyList['C']); // []

console.log(graph.adjacencyList); // []