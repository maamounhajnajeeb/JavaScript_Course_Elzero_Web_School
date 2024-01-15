let myString = "AaBbCdefG123!234%^&*";

let az = /[a-z]/g;
console.log(myString.match(az));

let notaz = /[^a-z]/g;
console.log(myString.match(notaz));

let AZ = /[A-Z]/g;
console.log(myString.match(AZ));

let notAZ = /[^A-Z]/g;
console.log(myString.match(notAZ));

let abe = /[abe]/g;
console.log(myString.match(abe));

let notabe = /[^abe]/g;
console.log(myString.match(notabe));

let engLetters = /[A-Za-z]/g;
console.log(myString.match(engLetters));

let notEngLetters = /[^A-Za-z]/g;
console.log(myString.match(notEngLetters));

let specials = /[^A-Za-z1-9]/g;
console.log(myString.match(specials));

let gift = /[^a-z^A-Z1-9]/g;
console.log(myString.match(gift));
