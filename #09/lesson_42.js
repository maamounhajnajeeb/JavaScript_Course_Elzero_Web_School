let myFriends = [
    "Ahmad", "Mohammed", "Sayed", "Alaa",
];


// adding elements in the beggining
myFriends.unshift("Osama", "Nabil");
console.log(myFriends);

// adding elements in the ending
myFriends.push("Osama", "Nabil");
console.log(myFriends);

// removing element in the begging
myFriends.shift();
console.log(myFriends);

// removing element in the begging and save it in a variable
let nabil = myFriends.shift();
console.log(nabil);
console.log(myFriends);

// removing last element and save it in a variable
let lastName = myFriends.pop()
console.log(myFriends);