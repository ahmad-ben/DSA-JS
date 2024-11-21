removeWord(word) {
  let currentLevel = this;
  let stack = []; // To track the path for potential backtracking

  for (const char of word) {
    if (!currentLevel.characters[char]) return false; // Word doesn't exist
    stack.push({ node: currentLevel, char }); // Save current level and character
    currentLevel = currentLevel.characters[char];
  }

  // At the end of the word, check if it's a valid word
  if (!currentLevel.isWord) return false; // Not a complete word in the trie

  // Mark the word as non-terminal
  currentLevel.isWord = false;

  // Clean up unnecessary nodes
  for (let i = stack.length - 1; i >= 0; i--) {
    const { node, char } = stack[i];
    const child = node.characters[char];
    
    if (!child.isWord && Object.keys(child.characters).length === 0) {
      delete node.characters[char]; // Remove if no other words depend on this node
    } else {
      break; // Stop cleanup if the node is still needed
    }
  }

  return true;
};


removeWordRecursive(word, i = 0) {
  if (i === word.length) {
    if (!this.isWord) return undefined; // Word doesn't exist
    this.isWord = false; // Unmark the word
    return Object.keys(this.characters).length === 0; // Check if this node can be deleted
  }

  const char = word[i];
  const nextCharObj = this.characters[char];

  if (!nextCharObj) return undefined; // Word doesn't exist

  const canDelete = nextCharObj.removeWordRecursive(word, i + 1); // Recursively check

  if (canDelete) delete this.characters[char]; // Delete child node if safe
  return Object.keys(this.characters).length === 0 && !this.isWord; // Return if this node can be deleted
}

