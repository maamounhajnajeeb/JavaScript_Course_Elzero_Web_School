let numsStings = [
    1, 10, -10, -20, 5, "A", 3, "B", "C",
];

let newNumsStings = numsStings.filter(el => {
    if (el == +el) {
        return el;
    }
})
.map(el => -el);

console.log(newNumsStings);