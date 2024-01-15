let start = 0;
let swappedName = "elZerO";

let newSwappedName = "";

for (let i=start; i<swappedName.length; i++) {
    if (swappedName[i].toUpperCase() === swappedName[i]) {
        newSwappedName += swappedName[i].toLowerCase();
    }
    else {
        newSwappedName += swappedName[i].toUpperCase();
    }
}

console.log(newSwappedName);