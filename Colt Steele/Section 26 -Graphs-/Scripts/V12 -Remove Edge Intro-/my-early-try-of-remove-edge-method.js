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

  removeEdge(vertexOne, vertexTwo){
    /*
      Is better to check if:
        vertexOne and vertexTwo are exist.
        vertexOne is already in the vertexTwo.
        vertexTwo is already in the vertexOne.
    */

    this.adjacencyList[vertexOne] = 
      this.adjacencyList[vertexOne].filter(val => val !== vertexTwo);
    this.adjacencyList[vertexTwo] = 
      this.adjacencyList[vertexTwo].filter(val => val !== vertexOne);
  }

}

const graph = new Graph();
graph.addVertex("Tetouan");
graph.addVertex("Tangier");
graph.addVertex("Rabat");
graph.addEdge("Tetouan", "Tangier");
graph.addEdge("Rabat", "Tetouan");
console.log(graph);

graph.removeEdge("Tangier", "Tetouan");
console.log(graph);