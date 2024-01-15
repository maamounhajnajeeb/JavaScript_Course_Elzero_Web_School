let names = "Sayed 1Spam 2Spam 3Spam Aspamo Spam Spam5 Osama Ahmed";

let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));

console.log(/(\bspam|spam\b)/ig.test("Maamoun"));

console.log(/(\bspam|spam\b)/ig.test("1Spam"));
