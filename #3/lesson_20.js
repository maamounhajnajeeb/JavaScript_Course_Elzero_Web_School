let a = "10";
let b = 20;
let c = true;

console.log(a+b); // 1020, type: string
console.log(+a+b); // 30, type: number
console.log(a - b); // -10, type: number
console.log(b - a); // 10, type: number

console.log(""- 2); // -2, type: number
console.log("Osama" - 2); // Nan, type: number

console.log(false - true); // -1

console.log(a + c); // 10true, type: string
console.log(b + c); // 21, type: number
console.log(a + b + c); // 1020true, type: string
console.log(+a + b + c); // 31, type: number
