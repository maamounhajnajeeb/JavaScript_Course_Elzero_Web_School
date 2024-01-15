let firstObj = {
    property: "Method One",
};
console.log(firstObj.property);


let secondObj = new Object({
    property: "Method Two",
});
console.log(secondObj["property"]);


let thirdObj = Object.create({
    property: "Method Three",
});
console.log(thirdObj.property);


let fourthObj = Object.assign(thirdObj);
fourthObj.property = "Method Four"
console.log(fourthObj.property);


let fifthObj = Object.assign({
    property: "Method Five",
});
console.log(fifthObj.property);
