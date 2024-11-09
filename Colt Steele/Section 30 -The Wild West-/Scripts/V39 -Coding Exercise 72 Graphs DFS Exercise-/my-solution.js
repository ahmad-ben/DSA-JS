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

  depthFirstSearchIteratively(startVertex){
    if(!this.adjacencyList[startVertex]) return undefined;

    let stackOfFollowingNodes = [startVertex];
    let alreadyVisitedNodes = [];

    while(stackOfFollowingNodes.length !== 0){
      const currentNode = stackOfFollowingNodes.pop();
      this.adjacencyList[currentNode].forEach(neighbor => {
        if(!alreadyVisitedNodes.includes(neighbor))
          stackOfFollowingNodes.push(neighbor)
      });
      if(!alreadyVisitedNodes.includes(currentNode)) 
        alreadyVisitedNodes.push(currentNode);
    };

    return alreadyVisitedNodes;
  }

  depthFirstSearchRecursively(startVertex){
    if(!this.adjacencyList[startVertex]) return undefined;
    let alreadyVisitedNodes = [];
  
    const visitNode = node => {
      alreadyVisitedNodes.push(node);
      for (const neighbor of this.adjacencyList[node]) 
        if (!alreadyVisitedNodes.includes(neighbor)) visitNode(neighbor);
    }
    
    visitNode(startVertex);
    return alreadyVisitedNodes;
  }

  

};

const graph = new Graph();
 
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
 
 
graph.addEdge('S','P');
graph.addEdge('S','U');
 
graph.addEdge('P','X');
graph.addEdge('U','X');
 
graph.addEdge('P','Q');
graph.addEdge('U','V');
 
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
 
graph.addEdge('Q','R');
graph.addEdge('Y','R');
 
graph.addEdge('Y','W');
graph.addEdge('V','W');
 
graph.addEdge('R','T');
graph.addEdge('W','T');

console.log(graph.adjacencyList);


 
console.log(graph.depthFirstSearchIteratively('S'));
console.log(graph.depthFirstSearchRecursively('S'));
 
/*
  results:

  ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version

  ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version. Wrong ❌.
  ["S", "U", "V", "W", "T", "R", "Y", "X", "Q", "P"] // Correct Result -I Believe-

*/

/*
  The AdjacencyList List:
    {
      S: [ 'P', 'U' ], 
      P: [ 'S', 'X', 'Q' ],
      U: [ 'S', 'X', 'V' ],
      X: [ 'P', 'U', 'Q', 'Y', 'V' ],
      Q: [ 'P', 'X', 'R' ],
      Y: [ 'X', 'R', 'W' ],
      V: [ 'U', 'X', 'W' ],
      R: [ 'Q', 'Y', 'T' ],
      W: [ 'Y', 'V', 'T' ],
      T: [ 'R', 'W' ]
    }
  Step By Step Process:

    VISITED START POINT "S"     => [S]                            ||| [ 'P', 'U']      
    VISITED FOLLOWING POINT "U" => [S, U]                         ||| [ 'P', 'X', 'V']
    VISITED FOLLOWING POINT "V" => [S, U, V]                      ||| [ 'P', 'X', 'X', 'W']
    VISITED FOLLOWING POINT "W" => [S, U, V, W]                   ||| [ 'P', 'X', 'X', 'Y', 'T']
    VISITED FOLLOWING POINT "T" => [S, U, V, W, T]                ||| [ 'P', 'X', 'X', 'Y', 'R']
    VISITED FOLLOWING POINT "R" => [S, U, V, W, T, R]             ||| [ 'P', 'X', 'X', 'Y', 'Q', 'Y']
    VISITED FOLLOWING POINT "Y" => [S, U, V, W, T, R, Y]          ||| [ 'P', 'X', 'X', 'Y', 'Q', 'X']
    VISITED FOLLOWING POINT "X" => [S, U, V, W, T, R, Y, X]       ||| [ 'P', 'X', 'X', 'Y', 'Q', 'P', 'Q']
    VISITED FOLLOWING POINT "Q" => [S, U, V, W, T, R, Y, X, Q]    ||| [ 'P', 'X', 'X', 'Y', 'Q', 'P', 'P']
    VISITED FOLLOWING POINT "Q" => [S, U, V, W, T, R, Y, X, Q, P] ||| [ 'P', 'X', 'X', 'Y', 'Q', 'P'] 

*/