let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// finalArr.concat( arrOne.reverse());
finalArr = finalArr.concat(
    arrTwo.pop(), arrOne.reverse(), arrTwo.reverse()
);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// or
// console.log(finalArr.concat(
//     arrTwo.pop(), arrOne.reverse(), arrTwo.reverse()
// ));