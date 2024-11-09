depthFirstSearchIteratively(startVertex) {
  if (!this.adjacencyList[startVertex]) return undefined;

  let stackOfFollowingNodes = [startVertex];
  let alreadyVisitedNodes = new Set(); // Use Set for O(1) lookups

  while (stackOfFollowingNodes.length !== 0) {
    const currentNode = stackOfFollowingNodes.pop();
    if (!alreadyVisitedNodes.has(currentNode)) {
      alreadyVisitedNodes.add(currentNode); // Mark the current node as visited

      // Traverse all neighbors of the current node
      this.adjacencyList[currentNode].forEach(neighbor => {
        if (!alreadyVisitedNodes.has(neighbor)) {
          stackOfFollowingNodes.push(neighbor); // Add neighbor to stack if not visited
        }
      });
    }
  }

  return [...alreadyVisitedNodes]; // Convert Set to array for return
}

depthFirstSearchRecursively(startVertex) {
  if (!this.adjacencyList[startVertex]) return undefined;

  let alreadyVisitedNodes = new Set(); // Use Set for O(1) lookups

  const visitNode = node => {
    alreadyVisitedNodes.add(node); // Add node to Set
    for (const neighbor of this.adjacencyList[node]) {
      if (!alreadyVisitedNodes.has(neighbor)) visitNode(neighbor);
    }
  }

  visitNode(startVertex);
  return [...alreadyVisitedNodes]; // Convert Set to array for return
}