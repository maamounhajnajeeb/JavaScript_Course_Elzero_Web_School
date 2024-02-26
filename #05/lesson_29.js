let theName = "Maamoun Web School";

console.log(theName.length);

console.log(theName.substring(2, 6));
console.log(theName.substring(6, 2));
console.log(theName.substring(-10, 6));

console.log(theName.substring(theName.length - 1));

console.log(theName.substring(12));
console.log(theName.substring(theName.length-5, theName.length-3));

console.log(theName.substr(0, 7));

console.log(theName.includes("m"));
console.log(theName.includes("Maamoun"));
console.log(theName.includes("Maamoun", 8));

console.log(theName.startsWith("M"));
console.log(theName.startsWith("W", 8));

console.log(theName.endsWith("n", 7));
console.log(theName.endsWith("l"));
