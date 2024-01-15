// searching in the array

let myFriends = [
    "Ahmad", "Mohammed", "Sayed", "Alaa", "Ahmad",
];
console.log(myFriends.indexOf("Ahmad")); // 0
console.log(myFriends.indexOf("Ahmad", 2)); // 4
console.log(myFriends.indexOf("Kareem", 2)); // -1

// last index of is the opposite
console.log(myFriends.lastIndexOf("Ahmad")); // 4
console.log(myFriends.lastIndexOf("Ahmad", -2)); // 0

// includes
console.log(myFriends.includes("Mohammed"));
console.log(myFriends.includes("Ahmad", 2));
console.log(myFriends.includes("Kareem"));

// using conditions
if (myFriends.indexOf("Mostafa") === -1) {
    console.log("Not Found");
}

if (!myFriends.includes("Mostafa")) {
    console.log("Not Found");
}

if (myFriends.includes("Mostafa") == 0) {
    console.log("Not Found");
}
