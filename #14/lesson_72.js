// challenge #1
let swappingCases = "elZERo";

let swappedCases = swappingCases.split("");
swappedCases = swappedCases.map((ele) => {

    // if (ele.toLowerCase() === ele) {
    //     return ele.toUpperCase();
    // } 
    // return ele.toLowerCase();
    
    return ele.toLocaleLowerCase() === ele
    ? ele.toUpperCase()
    : ele.toLowerCase();
})

swappedCases = swappedCases.join("");
console.log(swappedCases);


// challenge #2
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let invertingNumbers = invertedNumbers.map((elm) => -elm);
console.log(invertingNumbers);


// challenge #3
let ignoreNumbers = "Elz123er4o";
ignoreNumbers = ignoreNumbers.split("");

let ignoredNumbers = ignoreNumbers.map((elem,) => {
    // if (+elem != elem) {
    //     console.log(+elem != elem);
    //     return elem;
    // }
    return isNaN(parseInt(elem)) ? elem : "";
})
console.log(ignoredNumbers.join(""));
