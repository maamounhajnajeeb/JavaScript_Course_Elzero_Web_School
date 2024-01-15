let mySting = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// my code

let solution = mySting.split(",") // ["1", "2", "3", "EE", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l", "2", "0", "Z"]
    .map(el => el.length === 1? el : el[0]) // ["1", "2", "3", "E", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l", "2", "0", "Z"]
    .filter(el => {
        if (el != +el) return el
    }) // ["E", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l", "Z"]
    .slice(0, -1) // ["E", "l", "z", "e", "r", "o", "_", "W", "e", "b", "_", "S", "c", "h", "o", "o", "l"]
    .reduce((acc, curr) => curr === "_"? acc + " ": acc+curr); // "Elzero Web School"

// end of my code

console.log(solution);
