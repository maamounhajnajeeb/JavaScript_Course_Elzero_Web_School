// sloppy mode
// x = 5;
// console.log(x);

// strict mode
// 'use strict'
// y = 3;
// console.log(y); // error

// 'use strict'
// let y = 3;
// console.log(y);

// sloppy mode
// function func(x, x) {
//     console.log(x);
// }

// func(5, 6);

// strict mode
// 'use strict'
// function func(x, x) {
//     console.log(x);
// }

// func(5, 6); // error

// 'use strict'
// function func(x) {
//     console.log(x);
// }

// func(6);

// sloppy mode
// function F() {
//     this.x = 5;
// }

// let o = F();
// console.log(x);

// strict mode
// 'use strict'
// function F() {
//     this.x = 5;
// }

// let o = F();
// console.log(x); // error

// 'use strict'
// function F() {
//     this.x = 5;
// }

// let o = new F();
// console.log(o.x);

// sloppy mode
// let s = "hello";
// s.length = 10; //
// console.log(s.length);

// strict mode
// 'use strict'
// let s = "hello";
// s.length = 10; // error
// console.log(s.length);

'use strict'
let s = "hello";
console.log(s.length);