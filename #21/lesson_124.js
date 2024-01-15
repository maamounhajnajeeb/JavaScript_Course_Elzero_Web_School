// type of data 
let mySet = new Set([1, 1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);


console.log("#".repeat(20));

// Size
console.log(`size of elemetn inside set: ${mySet.size}`);


// iteration
let valuesIterator = mySet.values();
console.log(valuesIterator);

let keysIterator = mySet.keys();
console.log(keysIterator);
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);
console.log(keysIterator.next().done);


console.log("#".repeat(20));

// forEach
mySet.forEach(e => console.log(e));

console.log("#".repeat(20));


// weakset

// type of data
let myws = new WeakSet([{3: "A"}]);
console.log(myws);

console.log("#".repeat(20));

// errors errors errors
// let wsValuesIterator = myws.values();
// console.log(wsValuesIterator);

// let wsKeysIterator = myws.keys();
// console.log(wsKeysIterator);
// console.log(wsKeysIterator.next().value);
// console.log(wsKeysIterator.next().value);
// console.log(wsKeysIterator.next().value);
// console.log(wsKeysIterator.next().value);
// console.log(wsKeysIterator.next().done);