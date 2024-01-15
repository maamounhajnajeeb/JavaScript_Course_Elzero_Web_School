function sayHello(userName) {
    return `Hello ${userName}`;
}

console.log(sayHello("Maamoun"));

function calc(num1, num2) {
    return num1+num2;
}

result = calc(5, 5);
console.log(result+100);


function generate(start, end) {
    for (let i=start; i<=end; i++) {
        console.log(i);
        if (i==5) {
            return `Interrupting`;
        }
    }
}

generate(1, 10);