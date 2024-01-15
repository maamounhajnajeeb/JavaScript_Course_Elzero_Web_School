class User{
    constructor(id, username, salary) {
        this.id = id;
        this.u = username || "Unknown";
        this.s = salary < 6000 ? salary + 500: salary;
        this.message = function() {
            return `${this.u} your salary is: ${this.salary}`;
        }
    }

    writeMsg() {
        return `${this.u} your salary is: ${this.salary}`;
    }
}


let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.message());
console.log(userTwo.writeMsg());