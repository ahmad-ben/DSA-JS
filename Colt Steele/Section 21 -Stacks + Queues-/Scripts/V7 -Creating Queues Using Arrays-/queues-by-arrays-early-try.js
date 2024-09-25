// FIRST APPROACH USING -push- AND -shift-.
const firstQueue = [];

firstQueue.push("first");
firstQueue.push("second");
firstQueue.push("third");
console.log(firstQueue);

firstQueue.shift();
console.log(firstQueue);

// FIRST APPROACH USING -unshift- AND -pop-.
const secondQueue = [];

secondQueue.unshift("first");
secondQueue.unshift("second");
secondQueue.unshift("third");
console.log(secondQueue);

secondQueue.pop();
console.log(secondQueue);