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
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }

  removeEdge(vertexOne, vertexTwo){
    this.adjacencyList[vertexOne] = 
      this.adjacencyList[vertexOne].filter(val => val !== vertexTwo);
    this.adjacencyList[vertexTwo] = 
      this.adjacencyList[vertexTwo].filter(val => val !== vertexOne);
  }

  removeVertex(vertexName){
    for (let vertex in this.adjacencyList) this.removeEdge(vertex, vertexName);
    delete this.adjacencyList[vertexName];      
  }

  dftRecursively(){
    let isVertexVisited = {};

    const visitAVertex = (vertexName) => {
      isVertexVisited[vertexName] = true;
      for (const edge of this.adjacencyList[vertexName]) 
        if(!isVertexVisited[edge]) visitAVertex(edge);
    }

    visitAVertex(Object.keys(this.adjacencyList)[0]);

    return isVertexVisited;
  }

}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");

/*
  {
    "A":["B", "C"],
    "B":["A", "D"],
    "C":["A", "E"],
    "D":["B", "E", "F"],
    "E":["C", "D", "F"],
    "F":["D", "E"]
  }
*/

console.log(graph.dftRecursively());
