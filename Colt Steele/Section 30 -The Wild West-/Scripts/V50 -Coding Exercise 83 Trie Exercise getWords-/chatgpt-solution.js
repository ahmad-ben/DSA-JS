getWordsIteratively() {
  let words = [];
  let queue = [{ trie: this, currentString: "" }];

  while (queue.length > 0) {
    let { trie, currentString } = queue.shift();
    if (trie.isWord) words.push(currentString);
    for (const char in trie.characters) {
      queue.push({ trie: trie.characters[char], currentString: currentString + char });
    }
  }

  return words;
};