let myFriends = [
    "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"
];

console.log(myFriends);

// slice method: not affect the original array
// slicing
console.log(myFriends.slice());

// slicing [begging, ]
console.log(myFriends.slice(1));

// slicing [begging, ending]
console.log(myFriends.slice(1, 3));

// slicing [negative, ]
console.log(myFriends.slice(-3));

// slicing [negative, positive]
console.log(myFriends.slice(-5, myFriends.length-1));

// slicing [positive, negative]
console.log(myFriends.slice(1, -1));

// another slicing
console.log(myFriends.slice(-4, -2));


// splice method: affect the original array
myFriends.splice(0, 0, "Sameer", "Samara");
console.log(myFriends);

// 
myFriends.splice(0, 0, ["Sameer", "Samara"]);
console.log(myFriends);

//
myFriends.splice(0, 1, "Sameer", "Samara");
console.log(myFriends);
