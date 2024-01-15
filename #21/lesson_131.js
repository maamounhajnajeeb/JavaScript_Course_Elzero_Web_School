let locations = {
    20: "place 1",
    30: "place 2",
    10: "place 3",
    40: "place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations).map(e => +e);
console.log(locationsArray);

let check = locationsArray.every(e => {
    return e > this;
}, mainLocation);

console.log(check);