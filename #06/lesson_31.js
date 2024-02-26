// == sign compare value not the type
console.log(10 == "10"); // true
console.log(-100 == "-100"); // true
console.log(-100 != "-100"); // flase

// === sign compare value and object
console.log(10 === "10"); // false
console.log(10 === 10); // true
console.log(10 !== 10); // false

// >=, <=, > and < compare the value not the object type
console.log(10 >= "10"); // true
console.log(10 > "10"); // false
console.log(100 <= 100); // true

// interview question
console.log(typeof "Osama" == typeof "Ahmad");
console.log(typeof "Osama" === typeof "Ahmad");
