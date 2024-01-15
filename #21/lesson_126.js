let myMap = new Map([
    [1, "Number"],
    ["Maamoun", "String"],
]);

myMap.set(10, "Number");
myMap.set("Name", "String");

console.log(myMap);
console.log(myMap.size);

myMap.delete("Name");

console.log(myMap);
console.log(myMap.size);


myMap.clear();

console.log(myMap);
console.log(myMap.size);