class Trie{
  constructor(){
    this.characters = {};
    this.isWord = false;
  };

  addWord(word, index = 0){
    if(index < word.length){
      let trieLevel = this;
      let currentChar = word[index];

      for (let i = 0; i < index; i++) 
        trieLevel = trieLevel.characters[word[i]];

      if(!trieLevel.characters[currentChar]) 
        trieLevel.characters[currentChar] = new Trie();

      if(index + 1 === word.length) 
        trieLevel.characters[currentChar].isWord = true; 

      this.addWord(word, ++index);
    }
  };

  addWordIteratively(word, index = 0){
    let level = this;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if(!level.characters[char]) level.characters[char] = new Trie();
      if(i + 1 === word.length) level.characters[char].isWord = true;
      level = level.characters[char];
    };
  };
};

// const firstTrie = new Trie();
// firstTrie.addWord("fun")
// console.log("f", firstTrie)
// console.log("u", firstTrie.characters["f"])
// console.log("n", firstTrie.characters["f"].characters["u"].characters["n"])
// console.log(firstTrie.characters); // {f: Trie}
// console.log(!!firstTrie.characters["f"]); // true
 
// console.log(firstTrie.characters.f.characters.u); // {u: Trie}
// console.log(!!firstTrie.characters.f.characters.u); // true
 
// console.log(firstTrie.characters.f.characters.u.characters.n.isWord); // true
// console.log(!!firstTrie.characters.f.characters.u.characters.n); // true
// console.log(!!firstTrie.characters.f.characters.u.characters.n.characters); // {}
 
// console.log(!!firstTrie.characters.f.characters.u.characters.l); // true

const secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has")
secondTrie.addWord("have")
secondTrie.addWord("hate");

console.log(secondTrie);
console.log("============================================================");
console.log("h", secondTrie.characters["h"]);
console.log("============================================================");
console.log("a, of ha - hate...", secondTrie.characters["h"].characters["a"]);
console.log("============================================================");
console.log("t, of hat - hate", secondTrie.characters["h"].characters["a"].characters["t"]);
console.log("============================================================");
console.log("e, of hate", secondTrie.characters["h"].characters["a"].characters["t"].characters["e"]);
console.log("============================================================");
console.log("s, of has", secondTrie.characters["h"].characters["a"].characters["s"]);
console.log("============================================================");
console.log("v, of have", secondTrie.characters["h"].characters["a"].characters["v"]);
console.log("============================================================");
console.log("e, of have", secondTrie.characters["h"].characters["a"].characters["v"].characters["e"]);
console.log("============================================================");


/*
{
  characters: {
    h: {
      characters: {
        a: {
          characters: {
            t: { characters: {}, isWord: true },
            v: { characters: { e: { characters: {}, isWord: true } }, isWord: false },
            s: { characters: { e: { characters: {}, isWord: true } }, isWord: false }
          },
          isWord: true
        }
      },
      isWord: false
    }
  },
  isWord: false
}

*/

// console.log(secondTrie.characters.h.characters.a.isWord); // true
// console.log(secondTrie.characters.h.characters.a.characters.t.isWord); // true
// console.log(secondTrie.characters.h.characters.a.characters.v.isWord); // false
// console.log(secondTrie.characters.h.characters.a.characters.v.characters.e.isWord); // true
// console.log(secondTrie.characters.h.characters.a.characters.t.characters.e.isWord); // true

// console.log(Object.keys(secondTrie.characters.h.characters.a.characters).length); // 3



/*
 
  addWord(word, index = 0){
    let level = this;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if(!level.characters[char]) level.characters[char] = new Trie();
      if(i + 1 === word.length) level.characters[char].isWord = true;
      level = level.characters[char];
    };
  };

*/