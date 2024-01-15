let myFriends = [
    "Ahmad", "Sayed", "Ali", "Osama", "Gamal", "Ameer",
];

let myNewFriends = [
    "Sameer", "Sameh",
];

let schoolFriends = [
    "Haytham", "Shady",
];

let allFriends = myFriends.concat(
    myNewFriends, schoolFriends, "Gameel", ["Hi", "Hello"]
    );

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
