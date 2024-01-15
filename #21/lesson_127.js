let mapUser = {
    theName: "Maamoun",
}

let myMap = new Map();
myMap.set(mapUser, "Object Value");

mapUser = null; // Override the reference

console.log(myMap);


console.log("#" .repeat(20));

let weakMapUser = {
    theName: "Maamoun"
};

let myWeakMap = new WeakMap();
myWeakMap.set(weakMapUser, "Object Value");

myWeakMap = null;

console.log(myWeakMap);