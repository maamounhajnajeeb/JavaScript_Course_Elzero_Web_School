function sayHello(...info) {
    let name = "";
    let prefix = "";

    for (let i=0; i<info.length; i++) {
        if (info[i] === "Male") {
            prefix = "Mr ";
        } else if (info[i] === "Female") {
            prefix = "Miss ";
        } else {
            name = info[i];
        }
    }
    console.log(`Hello ${prefix}${name}`);
}

sayHello("Maamoun", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");
