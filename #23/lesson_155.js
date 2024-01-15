class User {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    sayHello() {
        return `Hello, ${this.user}`;
    }
}

firstUser = new User(1, "Maamoun");

console.log(firstUser.username);
console.log(User.prototype);


let stringOne = "Elzero";

console.log(String.prototype);