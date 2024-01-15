let myData = [1, 1, 3, 4, "A"];
let myUniqueData = new Set([1, 1, 2, 3, "A"]);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);  // undefined

myUniqueData.add(4);
console.log(myUniqueData);

// if element is in set it return True else False
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);


console.log(myUniqueData.has("A"));


myUniqueData.clear();
console.log(myUniqueData);
console.log(myUniqueData.size);