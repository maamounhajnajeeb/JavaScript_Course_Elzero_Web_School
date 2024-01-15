let mix = [
    1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o",
];

let newMix = mix.map(el => el != +el? el: "")
.reduce((acc, curr) => acc+curr);

console.log(newMix);