// 1]
// import { arr, a, saySomething } from "./lesson_168_main.js"
// error: Uncaught SyntaxError: The requested module './lesson_168_main.js' does not provide an export named 'a'

// 2]
// import { myNumber, arr, saySomething } from "./lesson_168_main.js"

// console.log(myNumber);
// console.log(arr);
// console.log(saySomething());

// 3]
// import hello, { myNumber, arr, saySomething } from "./lesson_168_main.js"

// console.log(myNumber);
// console.log(arr);
// console.log(saySomething());
// console.log(hello());


// 4]
// error: variables are not defined
// import * as all from "./lesson_168_main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(saySomething());
// console.log(hello());


// 5]
import * as all from "./lesson_168_main.js";

console.log(all.myNumber);
console.log(all.arr);
console.log(all.saySomething());
console.log(all.default());
