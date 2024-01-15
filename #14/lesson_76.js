theBiggest = [
    "Bla", "Propaganda", "Other", "AAA", "Battery", "Test",
];

theBiggest = theBiggest.reduce((acc, curr, idx, arr) => {
    return acc.length >= curr.length ? acc : curr;
})
console.log(theBiggest);


/////////////////
let removeChars = [
    "E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "@", "O",
];

filterdChars = removeChars.filter((el) => !el.startsWith("@"));
reducedChars = filterdChars.reduce((acc, curr) => {
    return acc+curr;
})
console.log(reducedChars);

/////////// another way
// removeChars = removeChars.reduce((acc, curr) => {
//     if (acc ==="@") {
//         return curr;
//     }
//     else if (curr === "@") {
//         return acc;
//     } else if (curr !== "@" && acc !== "@") {
//         return acc+curr;
//     }
// })

// console.log(removeChars);