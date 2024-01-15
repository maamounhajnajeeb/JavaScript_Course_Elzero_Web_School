function sayHello(userName, age=2) {
    return `Hello ${userName} Your age is ${age}`;
}

console.log(sayHello("Maamoun", 23));
console.log(sayHello("Maamoun",));

// parameter default value is undefined