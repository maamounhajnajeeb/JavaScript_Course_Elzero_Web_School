// Arrow function

let print = function () {
    return 10;
};

console.log(print());

////////////////////////

let nine = () => {
    return 9
}
console.log(nine());

////////////////////////

let ten = () => 10;

console.log(ten());

////////////////////////

let eight = _ => 8;
console.log(eight());

////////////////////////
let seven = function (num) {
    return num;
}
console.log(7);

// to arrow function
let five = (num) => {
    return num;
}
console.log(5);

// or
let four = (num) => num;
console.log(four(4));

// if you have one parameter you don't have to user ()
let three = num => num;
console.log(three(3));

/////////////////////////////////

//// this will through an error
//// Uncaught SyntaxError: Unexpected token '=>'
// let two = num, num1 => num+num1;
// console.log(two(1, 1));

// this is the right way with more than one parameter
let two = (num, num1) => num+num1;
console.log(two(1, 1));