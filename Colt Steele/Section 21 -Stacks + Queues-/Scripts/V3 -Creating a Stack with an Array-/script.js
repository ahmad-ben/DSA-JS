let firstStack = [];

firstStack.push("Google");
firstStack.push("Open AI");
firstStack.push("Facebook");

console.log(firstStack);

firstStack.pop();
console.log(firstStack);

firstStack.pop();
firstStack.push("Facebook");
console.log(firstStack);

// ========================================================

let secondStack = [];

secondStack.unshift("Open my eyes");
secondStack.unshift("Say the prayer");
secondStack.unshift("Standing");

console.log(secondStack);

secondStack.shift();
console.log(secondStack);

secondStack.shift();
secondStack.unshift("Go back to sleep");
secondStack.unshift("Have the greatest rest");
console.log(secondStack);

