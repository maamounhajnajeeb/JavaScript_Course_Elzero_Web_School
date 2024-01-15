class User {

    // count = 0;

    // static property
    static count = 0;

    constructor(id, username, salary) {
        this.i = id;
        this.u = username;
        this.s = salary;
        User.count += 1;
    }

    // static method
    static sayHello() {return "hello"};

    static countMembers() {
        return `${this.count} members`
    };
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);

console.log(userOne.u);
console.log(userTwo.u);

console.log(userOne.count);
console.log(User.count);

// console.log(userOne.sayHello()); // error
console.log(User.sayHello());
console.log(User.countMembers());
