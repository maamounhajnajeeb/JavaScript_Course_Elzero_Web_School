let firstArray = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let secondArray = ["A", "B", "C", "D", "E", 10, 15, 6];
let thirdArray = ["Z", "Y", "A", "D", "E", 10, 1];


// using copy copyWithin()
function allChars(anyArray) {
    let chars = [], integers = [];
    for (let i=0; i<anyArray.length; i++) {
        e = anyArray[i];
        if (typeof e == "string") {
            chars.push(e);
        } else {
            integers.push(e);
        }
    }
    anyArray = [...integers, ...chars];
    anyArray.copyWithin(0, integers.length, 2*integers.length);
    return anyArray;
}
console.log(allChars(firstArray));
console.log(allChars(secondArray));
console.log(allChars(thirdArray));


// manually
function switchToChars(anyArray) {
    let chars = [];
    let integers = [];
    anyArray.forEach(e => {
        if (typeof e == "string") {
            chars.push(e);
        } else {
            integers.push(e);
        }
    });
    let newChars = chars.slice(0, integers.length);

    return [...newChars, ...chars];
}

console.log(switchToChars(firstArray));
console.log(switchToChars(secondArray));
console.log(switchToChars(thirdArray));
