class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertexName){
    if(this.adjacencyList[vertexName]) 
      throw new Error(`${vertexName} is already exist!!`); 
    this.adjacencyList[vertexName] = [];
  }

  addEdge(vertexOne, vertexTwo, weight){
    this.adjacencyList[vertexOne].push({node: vertexTwo, weight});
    this.adjacencyList[vertexTwo].push({node: vertexOne, weight});
  }
}


const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 1);
graph.addEdge("A","C", 2);
graph.addEdge("B","D", 3);
graph.addEdge("C","E", 4);
graph.addEdge("D","E", 5);
graph.addEdge("D","F", 6);
graph.addEdge("E","F", 7);

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
   1 / \ 2
    B   C 
  3 | 5 | 4
    D---E
   6 \ / 7
      F

  A, B, D, E, F, C
  A, B, D, E, C, F

  A, B, D, F, E, C

  A, C, E, D, B, F
  A, C, E, D, F, B

  A, C, E, F, D, B
*/

console.log(graph.adjacencyList);
