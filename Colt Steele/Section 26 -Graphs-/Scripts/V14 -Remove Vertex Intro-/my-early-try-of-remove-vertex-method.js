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

  removeVertex(vertexName){
    // Is better to check if the wanted vertex is exist.

    delete this.adjacencyList[vertexName];

    for (const vertex in this.adjacencyList) {
      const vertexEdge = this.adjacencyList[vertex];
      let wantedVertexIdx = vertexEdge.indexOf(vertexName);
      if(wantedVertexIdx !== -1) vertexEdge.splice(wantedVertexIdx, 1);
    }
  }

  removeVertexSecondApproach(vertexName){
    /*
      Is better to check if the wanted vertex is exist.
      It maybe a good idea to not do the removeEdge over the deleted vertex.
        Since we will delete the whole property any way.
    */

    for (let vertex in this.adjacencyList) this.removeEdge(vertex, vertexName);
    delete this.adjacencyList[vertexName];      
  }

}

const graph = new Graph();
graph.addVertex("Tetouan");
graph.addVertex("Tangier");
graph.addVertex("Rabat");
graph.addEdge("Tetouan", "Tangier");
graph.addEdge("Rabat", "Tetouan");
console.log(graph);

// graph.removeVertex("Tangier");
graph.removeVertexSecondApproach("Tangier");
console.log(graph);