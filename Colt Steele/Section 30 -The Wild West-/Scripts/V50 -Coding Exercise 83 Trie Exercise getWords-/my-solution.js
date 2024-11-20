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
  }

  getWordsIteratively(){
    let words = [];
    let currentTrieLevel = this;
    let queue = [];
    for (const char in this.characters) 
      queue.push({char, currentTrieLevel, currentString: ""});

    while(queue.length > 0){
      let {char, currentTrieLevel, currentString} = queue.shift();     
      currentString = currentString + char;
      if(currentTrieLevel.characters[char].isWord) words.push(currentString);
      currentTrieLevel = currentTrieLevel.characters[char];
      for (const char in currentTrieLevel.characters) 
        queue.push({char, currentTrieLevel, currentString});
    }
    
    return words;
  }
  
  getWordsIterativelyAfterChatgptImprovement(){
    let words = [];
    let queue = [{trie: this, currentString: ""}];
    while(queue.length > 0){
      let {trie, currentString} = queue.shift(); 
      if(trie.isWord) words.push(currentString);
      for (const char in trie.characters) 
        queue.push({trie: trie.characters[char], currentString: currentString + char});
    }
    return words;
  }
};

const trie = new Trie();
trie.addWord('fun');
trie.addWord('fast');
trie.addWord('fat');
trie.addWord('fate');
trie.addWord('father');
trie.addWord('forget');
trie.addWord('awesome');
trie.addWord('argue');

console.log(trie.getWords()); // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
console.log(trie.getWords().length) // 8

console.log(trie.getWordsIteratively());

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