/* 
    constructor function
 */

const userOne = {
    id: 100,
    username: "Maamoun",
    salary: 5000,
};

const userTwo = {
    id: 101,
    username: "Hasan",
    salary: 6000,
};

const userThree = {
    id: 102,
    username: "Osama",
    salary: 7000,
};

class User {
    constructor(id, username, salary) {
        this.id = id;
        this.username = username;
        this.salary = salary + 1000;
    }
    
}

let user1 = new User(1, "Maamoun", 10000);
let user2 = new User(1, "Maamoun", 10000);
let user3 = new User(1, "Maamoun", 10000);


console.log(user1.id);
console.log(user1.username);
console.log(user1.salary);

console.log(user1 instanceof User);
console.log(user1.constructor === User);