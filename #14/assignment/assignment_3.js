let myArray = [
    "E", "l", "z", ["e", "r"], "o",
];

let newArray = myArray.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
        for (let j=0; j<curr.length; j++) {
            acc = acc + curr[j];
        }
        return acc;
    } else {
        return acc+curr;
    }
})

console.log(newArray);