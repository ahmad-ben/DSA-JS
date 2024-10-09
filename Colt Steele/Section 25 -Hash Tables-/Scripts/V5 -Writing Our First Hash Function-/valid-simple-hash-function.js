function hash(key, arrayLen = 10) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink"));        //0
console.log(hash("white"));       //5
console.log(hash("orangered"));   //7
console.log(hash("orange"));      //0
console.log(hash("cyan"));        //3
console.log(hash("purple"));      //8
console.log(hash("marron"));      //9
console.log(hash("blue"));        //0

