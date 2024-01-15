class User {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    sayHello() {
        return `Hello, ${this.user}`;
    }
}

User.prototype.sayWellcome = function(n) {
    return `Wellcome ${this.username}`;
}

let userOne = new User(100, "Elzero");
console.log(userOne);

Object.prototype.love = "Elzero web school";

String.prototype.addDotBefAft = function() {
    return `.${this}.`;
}

let myString = "Maamoun";
console.log(myString.addDotBefAft());