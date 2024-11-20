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
  };
  
  findWord(word, index = 0){
    if(index === word.length) return this;
    let currentChar = word[index];
    if(!this.characters[currentChar]) return undefined;
    else return this.characters[currentChar].findWord(word, ++index);
  };

  findWordIteratively(word){
    let trieLevel = this;
    for (const char of word) {
      if(!trieLevel.characters[char]) return undefined;
      trieLevel = trieLevel.characters[char];
    }
    return trieLevel;
  };
  
};


 

const trie = new Trie();
trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');

console.log(trie.findWord('taco')); // undefined
console.log(trie.findWord('fat').characters) // {t: Trie}
console.log(trie.findWord('father').characters) // {}
console.log(trie.findWord('father').isWord) // true

/*
           f
         /   \
        a     u
       /  \    \
      t    s    n
     / \    \
    h   e    t
   /   
  e  
 / 
r
*/






 


