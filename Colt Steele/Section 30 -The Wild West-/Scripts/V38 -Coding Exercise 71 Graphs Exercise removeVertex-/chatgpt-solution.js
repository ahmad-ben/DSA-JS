removeVertex(vertex) {
  if (!(vertex in this.adjacencyList)) return; // Ensure vertex exists in the graph

  // Remove vertex from all its neighbors' adjacency lists
  this.adjacencyList[vertex].forEach(neighbor => 
    this.adjacencyList[neighbor].delete(vertex) // Using Set to remove the vertex
  );

  // Remove the vertex from the adjacency list
  delete this.adjacencyList[vertex];
}
