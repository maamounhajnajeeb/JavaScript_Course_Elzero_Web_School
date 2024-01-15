let user = {
    age: 20,
};

user.age = 23;
user["name"] = "Maamoun";

user.say = function () {
    return "Hello";
};

console.log(user);
console.log(user.say());

////
let newUser = new Object({
    age: 20,
});

newUser.age = 23;
newUser["name"] = "Maamoun";

newUser.say = function () {
    return "Hello";
};

console.log(newUser);
console.log(newUser.say());