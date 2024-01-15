function sayHello(userName, age) {
    if (age < 20) {
        console.log("App is not suitable for you");
    } else {
        console.log(`Hello ${userName} your age ${age}`);
    }
}

sayHello("Maamoun", );
sayHello("Maamoun", 23);
sayHello("Maamoun", 13);


function generateYears(start, end, exclude) {
    for (let i=start; i<end; i++) {
        if (i === exclude){
            continue
        }
        console.log(i);
    }
}

generateYears(1, 10, 2);

