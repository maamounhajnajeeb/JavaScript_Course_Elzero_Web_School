let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
    10: "Number",
    "10": "String",
};
console.log(myNewObject);


let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "boolean");
myNewMap.set(function owerFunction() {}, "function");
myNewMap.set({"true": true}, "object");
console.log(myNewMap.get("10"));
console.log(myNewMap.get(10));

console.log("####");

console.log(myNewObject);
console.log(myNewMap.size);

