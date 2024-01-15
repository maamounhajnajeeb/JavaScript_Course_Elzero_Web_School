class User {
    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
    }

    updateName(newName) {
        this.u = newName;
    }
}

let userOne = new User(100, "Maamoun", 5000);

console.log(userOne.u);

userOne.updateName("MaamounHNajeeb");
console.log(userOne.u);


let string1 = "Elzero";

let string2 = new String("Elzero");

console.log(typeof string1, typeof string2); // string, object


console.log(string1 instanceof String); // False
console.log(string2 instanceof String); // True

console.log(string1.constructor == String); // True
console.log(string2.constructor == String); // True