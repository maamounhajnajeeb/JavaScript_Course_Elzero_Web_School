let a = "Elzero Web School";

// include this methods in your solutions [slice, charAt]
console.log(a[2].toUpperCase()+a.slice(3, 7));

// 8 of H
console.log(a[a.length-4].toUpperCase().repeat(8));

// return Array
console.log(a.slice(0, 7).split());

// use only "substr" Method + template literals in your solution
console.log(`${a.substr(0, 6)} ${a.substr(a.length-6)}`);

// 
console.log(`${a[0].toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.substring(a.length-1).toLowerCase()}`);
a = "Maamoun Web school";
console.log(`${a[0].toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.substring(a.length-1).toLowerCase()}`);
