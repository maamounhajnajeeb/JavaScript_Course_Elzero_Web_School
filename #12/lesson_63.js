function showDetails (...details) {
    let name = ""; 
    let age = 0;
    let show = "";
    
    for (let i=0; i<details.length; i++ ) {
        typeof details[i] === "string"
        ? name = details[i]
        : typeof details[i] === "number"
        ? age = details[i]
        : details[i] === false
        ? show = "You are not available for hire"
        : show = "You are available for hire";
    }

    console.log(
        `Hello ${name}, Your age is: ${age}, ${show}`
        );
}

showDetails("Maamoun", 23, true);
showDetails(23, "Maamoun", true);
showDetails(true, 23, "Maamoun");
showDetails(false, "Maamoun", 23,);
