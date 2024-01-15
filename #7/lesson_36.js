// 1]
let thePrice = 100;
console.log(`The price is ${thePrice}`);


// 2]
// null, undefined, false and false values
// thePrice = 0;
// thePrice = "";
thePrice = null;
// thePrice = undefined;

console.log(`the price is ${thePrice || 200}`);


// 3] nullish coaliscing operator
// null and undefined

// thePrice = 0;
thePrice = "";
// thePrice = null;
// thePrice = undefined
console.log(thePrice ?? 200);
