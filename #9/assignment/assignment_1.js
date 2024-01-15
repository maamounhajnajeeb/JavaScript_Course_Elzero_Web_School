let myFriends = [
    "Ahmad", "Elham", "Osama", "Gamal",
];

let num = 3;

// first way
let zeroIndex = myFriends.indexOf("Ahmad");
console.log(myFriends.slice(zeroIndex, num));

// second way
myFriends.pop();
console.log(myFriends);
