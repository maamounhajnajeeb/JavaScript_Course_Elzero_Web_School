function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" 
            ? `${zName}, My Salary Is ${salary}` 
            : `Iam Not Avaialble`;
            };
        };
    }

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// curried function
let check = (zName) => (status) => (salary) => {
    return status === "Available" 
    ? `${zName}, My Salary Is ${salary}` 
    : `Iam Not Avaialble`;
};

console.log(check("Ahmed")("Available")(5000)); // Iam Not Avaialble
console.log(check("Ahmed")("Not Available")(5000)); // Iam Not Avaialble
console.log(check("Ahmed")("Not Available")()); // Iam Not Avaialble