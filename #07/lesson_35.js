let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender == "Male") {
    console.log("Mr")
}
else {
    console.log("Mrs")
}

// one row condition
// condition ? if true : if false
theGender === "Female" ? console.log("FeMale") : console.log("Male");

// another example

let theResult = theGender === "Female" ? "Mrs" : "Mr";
console.log(theResult);

// another example
let theCondition = theGender === "Female" ? "Mrs": "Mr";
console.log(`Hello ${theCondition}.${theName}`);

// last example
theName = "Ahmad";
theGender = "Male";
theAge = 40;


let printing = theName === "Mona" 
    ? console.log("Mona") 
    : theGender === "Female" 
    ? console.log("Mrs") 
    : theAge == 30 
    ? console.log(`${theAge} years old`)
    : console.log("Nothing from above");
