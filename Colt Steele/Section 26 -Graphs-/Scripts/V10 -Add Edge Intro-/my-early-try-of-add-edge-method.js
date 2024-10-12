class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertexName){
    if(this.adjacencyList[vertexName]) 
      throw new Error(`${vertexName} is already exist!!`); 
    this.adjacencyList[vertexName] = [];
  }

  addEdge(vertexOne, vertexTwo){
    /*
      Is better to check if:
        vertexOne and vertexTwo are exist.
        vertexOne isn't already in the vertexTwo.
        vertexTwo isn't already in the vertexOne.
    */

    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }
}

const graph = new Graph();
graph.addVertex("Tetouan");
graph.addVertex("Tangier");
graph.addVertex("Rabat");
console.log(graph);

graph.addEdge("Tetouan", "Tangier");
graph.addEdge("Rabat", "Tetouan");
console.log(graph);
