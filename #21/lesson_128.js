console.log(Array.from("Osama"));

console.log(Array.from("12345", (n) => +n + +n));


let myArray = [1, 1, 2, 3, 4];
// let mySet = new Set(myArray);
// console.log(Array.from(mySet));

console.log([...new Set(myArray)]);


function arrayFrom() {
    return Array.from(arguments);
}

console.log(arrayFrom("Osama", "Maamoun", "Ahmad", 1, 2, 3));
