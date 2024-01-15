let a = 1_00, b = 2_00.5, c = 1e2, d = 2.4;

let minimum = parseInt(Math.min(a, b, c, d))
console.log(minimum);
console.log(typeof(minimum));

// user variables a and d one time to get the needed output
console.log(10 * (a * d * 4 + a * d / 6));


console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));


let num = b / 3 - ++d / 3
console.log(num.toFixed(2));
console.log(typeof(num.toFixed(2)));
console.log(parseInt(num));
console.log(typeof(parseInt(num)));
