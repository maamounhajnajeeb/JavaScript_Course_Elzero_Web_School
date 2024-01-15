let myString = "We Love Programming";
let names = "1OsamaZ 2AhmadZ 3Mohammed 4MoustafaZ 5GamalZ";

// $ end with something
console.log(/ing$/ig.test(myString));
console.log(/lz$/ig.test(names));

// ^ start with something
console.log(/^we/ig.test(myString));
console.log(/^\w/ig.test(myString));
console.log(/^10/ig.test(names));
console.log(/^\d/ig.test(names));

// ? followed by something
console.log(names.match(/\d\w{5}(?=Z)/ig));

// ?! not followed by something
console.log(names.match(/\d\w{8}(?!Z)/ig));
