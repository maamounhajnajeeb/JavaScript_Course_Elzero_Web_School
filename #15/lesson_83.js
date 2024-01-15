console.log(this);
console.log(this === window);

myVar = 100;
console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    return this;
}

console.log(sayHello());
console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
    console.log(this);
}


let user = {
    age: 38,
    ageInDays: function() {
        console.log(this);
        return this.age * 365;
    }
}

console.log(user.age);
console.log(user.ageInDays());
