let user = {
    theName: "Maamoun",
    "country" : "Syria",
};

console.log(user.theName);
console.log(user["theName"]);
console.log(user["country"]);


let myVar = "country";

let newUser = {
    theName: "Maamoun",
    country: "Syria",
};

console.log(user.theName);
console.log(user.myVar); // undefined
console.log(user[myVar]);
