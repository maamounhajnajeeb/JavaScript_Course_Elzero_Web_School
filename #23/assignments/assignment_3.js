// Edit The Class
class User {
    #c
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    
    get showData() {
        return `Hello ${this.u} Your credit card number is ${this.getSharpC()}`
    }

    valadate(number) {
        let re = /((\d{4}-){3}\d{4})/g;
        return number.match(re);
    }

    getSharpC() {
        this.#c = new String(this.#c);
        let validate = this.valadate(this.#c);
        if (!validate) {
            let newSharpC = "";
            for (let i=3; i<this.#c.length; i+=4) {
                newSharpC += this.#c.slice(i-3, i+1);
                newSharpC += "-";
            }
            return newSharpC.slice(0, -1);
        }
        return this.#c;
    }
}

let re = /((\d{4}-){3}\d{4})/g;
let credit = "1234567812345678";
console.log(credit.match(re))

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
