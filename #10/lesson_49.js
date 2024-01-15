let myFriends = [
    "Osama", "Ahmad", "Sayed", "Ali", "Amir",
]


for (let i = 0; i < 5; i++) {
    console.log(myFriends[i]);
}


for (let i = 0; i < 6; i++) {
    console.log(myFriends[i]);
} // last element is undefined



for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}


let complex = [
    "Osama", "Ahmad", "Sayed", "Ali", "Amir", 1, 2
];
let onlyNames = [];
let onlyNumbers = [];

for (let i = 0; i < complex.length; i++) {
    if (typeof complex[i] === 'string'){
        onlyNames.push(complex[i]);
    }
    else if (typeof complex[i] === 'number') {
        onlyNumbers.push(complex[i])
    }
}
console.log(onlyNames);
console.log(onlyNumbers);
