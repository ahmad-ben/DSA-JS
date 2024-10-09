class HashTable{
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //! Message to inform user if the key is already exist.
  set(key, value){
    if(typeof key !== "string") return false;

    const idx = this._hash(key);

    if(this.keyMap[idx]) this.keyMap[idx].push([key, value]);
    else this.keyMap[idx] = [[key, value]];

    return idx;
  }

  get(key){
    if(typeof key !== "string") return false;

    const idx = this._hash(key);

    if(!this.keyMap[idx]) return undefined;

    const wantedPair = this.keyMap[idx].find(pair => pair[0] === key);
    return wantedPair ? wantedPair[1] : undefined;
  }

  keyWithDuplicates(){
    let keys = [];

    for(const cell of this.keyMap) {
      if(!cell) continue;
      for(let pair of cell) keys.push(pair[0]);
    };

    return keys;
  }

  keyWithoutDuplicates(){
    let keys = [];

    for(const cell of this.keyMap) {
      if(!cell) continue;
      for(let pair of cell) {
        if(keys.some(key => key === pair[0])) continue;
        keys.push(pair[0])
      };
    };

    return keys;
  }

  valuesWithDuplicates(){
    let values = [];
    this.keyMap.forEach(cell => cell.forEach(pair => values.push(pair[1])));
    return values;
  }

  valuesWithoutDuplicates(){
    let values = [];

    this.keyMap.forEach(cellOfPairs => cellOfPairs.forEach(pair => {
      let newValue = pair[1];
      let newValueIsExist = values.some(key => key === newValue);
      if(!newValueIsExist) values.push(pair[1]); 
    }))

    return values;
  }

};

const hashTable = new HashTable();

hashTable.set("test", 2);        //=> IDX 2
hashTable.set("ahmed", 3);       //=> IDX 21
hashTable.set("ben", 4);         //=> IDX 24
hashTable.set("chakhter", 5);    //=> IDX 7
hashTable.set("ooo", 6);         //=> IDX 2

console.log(hashTable.keyWithDuplicates());
console.log(hashTable.valuesWithDuplicates());

/* 
  [
    [ ["test", 2], ["ooo", 6] ]   IDX  2
    [ ["chakhter", 5] ]           IDX  7
    [ ["ahmed", 3] ]              IDX 21
    [ ["ben", 4] ]                IDX 24
  ] 
*/

console.log("===== ADD A DUPLICATE PAIR =====");


hashTable.set("ooo", 2);        //=> IDX 2

console.log(hashTable.keyWithDuplicates());
console.log(hashTable.keyWithoutDuplicates());

console.log(hashTable.valuesWithDuplicates());
console.log(hashTable.valuesWithoutDuplicates());