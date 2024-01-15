let mySting = "EElllzzzzzzzeroo";

let newString = mySting.split("").filter((el, idx) => {
    if (el !== mySting[idx+1]) {
        return el
    }
}).reduce((acc, curr) => acc+curr);

console.log(newString);