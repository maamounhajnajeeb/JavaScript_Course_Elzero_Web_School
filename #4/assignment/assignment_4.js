let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log(typeof(Math.trunc(parseInt(myVar)))); // number
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
console.log(typeof(+parseFloat(myVar).toFixed(2))); // number
