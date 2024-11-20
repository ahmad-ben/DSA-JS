class Trie{
  constructor(){
    this.characters = {};
    this.isWord = false;
  };

  addWord(word, index = 0) {
    if (index === word.length) return this.isWord = true;
    const char = word[index];
    if (!this.characters[char]) this.characters[char] = new Trie();
    this.characters[char].addWord(word, index + 1);
  }
  
};

var firstTrie = new Trie();
firstTrie.addWord("fun")
console.log(firstTrie.characters) // {f: Trie}
console.log(!!firstTrie.characters["f"]) // true
 
console.log(firstTrie.characters.f.characters.u) // {u: Trie}
console.log(!!firstTrie.characters.f.characters.u) // true
 
console.log(firstTrie.characters.f.characters.u.characters.n.isWord) // true
console.log(!!firstTrie.characters.f.characters.u.characters.n) // true
console.log(!!firstTrie.characters.f.characters.u.characters.n.characters) // {}
 
console.log(!!firstTrie.characters.f.characters.u.characters.l) // true


 