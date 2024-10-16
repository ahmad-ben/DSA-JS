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
    let adjacencyListCopy = {...this.adjacencyList};
    
    const traverseNode = (vertexName) => {      
      adjacencyListCopy[vertexName].forEach(edgeArr => 
        adjacencyListCopy[edgeArr] = 
          adjacencyListCopy[edgeArr].filter(vertex => vertex !== vertexName)
      );

      while(adjacencyListCopy[vertexName].length !== 0){
        const nextNode = adjacencyListCopy[vertexName].shift();
        traverseNode(nextNode);
      }
    }

    traverseNode(Object.keys(adjacencyListCopy)[0]);

    return adjacencyListCopy;
  }


}

const graph = new Graph();
graph.addVertex("Tetouan");
graph.addVertex("Tangier");
graph.addVertex("Rabat");

graph.addEdge("Tetouan", "Tangier");
graph.addEdge("Rabat", "Tetouan");
console.log(graph);

console.log(graph.dftRecursively());

/*

  Tetouan: [ 'Tangier', 'Rabat' ],
  Tangier: [ 'Tetouan' ],
  Rabat: [ 'Tetouan' ]

  0: [1, 4, 5]
  1: [4, 5]
  4: [1, 5, 7]
  5: [4]
  7: [1]
*/
