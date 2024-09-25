/*

  The secretKey is a symbol that is used as a property key for the SecretHolder class. 
    Because symbols are unique, the property cannot be easily accessed or overwritten. 
      Which provides a way to create private properties in objects.

  Unlike closures, symbols can be used directly on the object itself, but they are: 
    Not directly enumerable in loops. 
    Less likely to cause accidental property collisions.

*/

const secretKey = Symbol('secret');

class SecretHolder {
  constructor(secret) {
    this[secretKey] = secret; // Using a symbol as a key for private property
  }

  getSecret() {
    return this[secretKey];
  }
}

let holder = new SecretHolder('mySecret');
console.log(holder.getSecret()); // Output: 'mySecret'

// Trying to access the secret directly
console.log(holder.secretKey); // Output: undefined
console.log(holder[secretKey]); // Output: 'mySecret' (can be accessed only if the symbol is known)
