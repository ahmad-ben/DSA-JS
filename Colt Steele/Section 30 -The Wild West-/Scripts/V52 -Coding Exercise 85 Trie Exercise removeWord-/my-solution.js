/* 
  We will get the deleted word, and search char by char in our tree.
    We are searching for the following condition:
      If the current char exist in the tree. 
        If yes and it's the end char we want to remove the `isWord` char from it.
        If not that means the deleted word is not even exist in our tree.
          Return undefined.
      If the words from that char is just one.
        If not that means that the current char hold more that one word. 
          So we can't deleted or we will lose the other words.
      If that one the deleted word we want.
        If it's just one word and it's the word we want we can deleted normally.
*/

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

  getWords(words = [], currentWord = ""){
    if(this.isWord) words.push(currentWord);
    for (const char in this.characters)
      this.characters[char].getWords(words, currentWord + char);
    return words;
  };

  autoComplete(prefix, i = 0) {
    if(i === prefix.length) return this.getWords([], prefix);
    let currentChar = prefix[i];
    if(!this.characters[currentChar]) return [];
    return this.characters[currentChar].autoComplete(prefix, ++i);
  };

  removeWord(word){
    let currentLevel = this, prevLevel = this;

    for (let i = 0; i < word.length; i++) {
      let currentChar = word[i];
      if(!currentLevel.characters[currentChar]) return undefined;
      prevLevel = currentLevel;
      currentLevel = currentLevel.characters[currentChar];
      const currentString = word.substring(0, i + 1);
      const sug = currentLevel.getWords([], currentString);
      if(sug.length === 1 && sug[0] === word) delete prevLevel.characters[currentChar];
      else if(i + 1 === word.length){
        if(currentLevel.isWord) currentLevel.isWord = false;
        else return undefined;
      }
    };

    return this;
  };

  removeWordRecursive(word, i = 0){
    let nextCharObj = this.characters[word[i]];

    if(!nextCharObj) return undefined;

    const string = word.substring(0, i + 1);
    const sug = nextCharObj.getWords([], string);

    if(sug.length === 1 && sug[0] === word) return delete this.characters[word[i]];

    if(i + 1 === word.length){
      if(nextCharObj.isWord) return !(nextCharObj.isWord = false);
      return undefined;
    };

    return nextCharObj.removeWordRecursive(word, ++i);
  }

};

var trie = new Trie();
trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');
trie.addWord('forget');
trie.addWord('awesome');
trie.addWord('argue');

/*
  console.log(trie.removeWord('fat'));
  console.log(trie.characters.f.characters.a.characters.t.isWord) // false
  console.log(trie.characters.f.characters.a.characters.t.characters.e.isWord) // true
  console.log(trie.removeWord('argue'));
  console.log(trie.characters["a"]); //=> Just the char `w` without `r` since it deleted with argue.
  console.log(trie.characters.a.characters.r) // undefined
*/

console.log("fun return", trie.removeWordRecursive('fat'));
console.log(trie.characters.f.characters.a.characters.t.isWord) // false
console.log(trie.characters.f.characters.a.characters.t.characters.e.isWord) // true
console.log(trie.removeWordRecursive('argue'));
console.log(trie.characters["a"]); //=> Just the char `w` without `r` since it deleted with argue.
console.log(trie.characters.a.characters.r) // undefined