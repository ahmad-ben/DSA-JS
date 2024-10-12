class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertexName){
    if(this.adjacencyList[vertexName]) 
      throw new Error(`${vertexName} is already exist!!`); 
    this.adjacencyList[vertexName] = [];
  }
}

const graph = new Graph();
graph.addVertex("Vertex One");
console.log(graph);

graph.addVertex("Vertex Two");
//! graph.addVertex("Vertex One"); => Throw Error Test.
console.log(graph);
