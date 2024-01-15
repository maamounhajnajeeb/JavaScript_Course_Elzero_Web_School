console.log(calc(10, 20));

function calc(num1, num2) {
    return num1+num2;
}

//////////////////////////

let calculator = function (num1, num2) {
    return num1+num2;
}

console.log(calculator(10, 20));

//////////////////////////

// for tracing errors
let cal = function maamoun(num1, num2) {
    return num1+num2;
}

console.log(cal(10, 20));

//////////////////////////
document.getElementById("show").onclick = function() {
    console.log("show");
}

//////////////////////////
function sayHello() {
    console.log("Say Hello");
}


document.getElementById("hello").onclick = sayHello;

//////////////////////////

setTimeout(
    function() {console.log("Good");}, 2000
    );
///////////////////////////