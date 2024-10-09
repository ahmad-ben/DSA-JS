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
};

const hashTable = new HashTable();
console.log(hashTable);

console.log(hashTable.set("firstItem", 1));   //=> IDX 31
console.log(hashTable);

console.log(hashTable.get("test"));           //! Still doesn't exist

console.log(hashTable.set("test", 2));        //=> IDX 2
console.log(hashTable.set("ahmed", 3));       //=> IDX 21
console.log(hashTable.set("ben", 4));         //=> IDX 24
console.log(hashTable.set("chakhter", 5));    //=> IDX 7
console.log(hashTable.set("ooo", 6));         //=> IDX 2
console.log(hashTable);

console.log(hashTable.get("ooo"));            //=> IDX 2 "Second Idx"
console.log(hashTable.get("test"));           //=> IDX 2 "First Idx"