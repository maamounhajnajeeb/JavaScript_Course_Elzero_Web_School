// inheritance

// parent class
class User {

    constructor(id, username) {
        this.i = id;
        this.u = username;
    }

    sayHello() {return "hello"};
}

let userOne = new User(100, "Elzero");

console.log(userOne.sayHello());


// derived class
class Admin extends User{

    constructor(id, username, permission) {
        super(id, username)
        this.p = permission;
    }
}

let admin = new Admin(1, "Maamoun", "Admin");

console.log(admin.sayHello());


class SuperAdmin extends Admin{

    constructor(id, username, permission, ability) {
        super(id, username, permission);
        this.ability = ability;
    }
}

let superAdmin = new SuperAdmin(2, "Osama", "super admin", "playing");

console.log(superAdmin.sayHello());