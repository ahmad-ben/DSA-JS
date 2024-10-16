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
    let visitedVertices = {};
    let visitedVerticesArr = [];

    const visitAVertex = (vertexName) => {
      if(!this.adjacencyList[vertexName]) return;

      visitedVertices[vertexName] = true;
      visitedVerticesArr.push(vertexName);

      for (const edge of this.adjacencyList[vertexName])
        if(!visitedVertices[edge]) visitAVertex(edge);              
    }

    visitAVertex(Object.keys(this.adjacencyList)[0]);

    return visitedVerticesArr;
  }

  dftIteratively(startVertex){
    let visitedVertices = {};
    let visitedVerticesArr = [];
    let nextVerticesStack = [startVertex];

    while(nextVerticesStack.length !== 0){
      const lastAddedVertex = nextVerticesStack.pop();

      if(!visitedVertices[lastAddedVertex]){
        visitedVertices[lastAddedVertex] = true;
        visitedVerticesArr.push(lastAddedVertex);        
      }

      this.adjacencyList[lastAddedVertex].forEach(edge => 
        (!visitedVertices[edge]) && nextVerticesStack.push(edge) 
      );
    }

    return visitedVerticesArr;
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

      A
     / \
    B   C 
    |   |
    D---E
     \ /
      F

  A, B, D, E, F, C
  A, B, D, E, C, F

  A, B, D, F, E, C

  A, C, E, D, B, F
  A, C, E, D, F, B

  A, C, E, F, D, B
*/

console.log(graph.dftIteratively("A"));
