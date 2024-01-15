let friends = [
    "Ahmad", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa",
];

let numbers = [11, 20, 2, 5, 17, 10,];

//// map revision
let add = numbers.map((el) => el+el);
console.log(add);

//// filter
let aFriends = friends.filter((el)=>{
    return el.startsWith("A");
})

console.log(aFriends);

/// another ecample
let evenNumbers = numbers.filter((el) => {
    return el % 2 === 0;
})

console.log(evenNumbers);
