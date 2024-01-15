let theName = "Elzero";

// 1
console.log(theName.split(""));

// 2
let myArray = [];
for (let i=0; i<theName.length; i++) {
    myArray.push(theName[i]);
}
console.log(myArray);

// 3 - using spread syntax
console.log([...theName]);

// 4 - using array from
console.log(Array.from(theName));

// 5 - object assign method
console.log(Object.assign([], theName));

//
console.log(theName);


// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']