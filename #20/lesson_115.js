let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Mayssa"];

[a, b, c, d, e] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


[a = "a", b, c, d, e] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


let [f, g, h] = myFriends;
console.log(f);
console.log(g);
console.log(h);

let [x, y, , z] = myFriends;
console.log(x);
console.log(y);
console.log(z);