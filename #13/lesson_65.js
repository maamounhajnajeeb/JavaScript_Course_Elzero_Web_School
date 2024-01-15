function sayMessage1(fName, lName){
    let message = "Hello";

    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }

    concatMsg();

    return message;
}

console.log(sayMessage1("Maamoun", "Haj Najeeb"));

/////////////////////////////////////////////////

function sayMessage2(fName, lName){
    let message = "Hello";

    function concatMsg() {
        message = `${fName} ${lName}`;
        console.log(message);
        return message;
    }

    return concatMsg();
}

console.log(sayMessage2("Maamoun", "Haj Najeeb"));

/////////////////////////////////////////////////

function sayMessage3(fName, lName){
    let message = "Hello";

    function concatMsg() {

        function getFullName() {
            let fullName = `${fName} ${lName}`
            return fullName
        }
        
        message = `${message} ${getFullName()}`;
        return message;
    }

    return concatMsg();
}

console.log(sayMessage3("Maamoun", "Haj Najeeb"));

///////////////////////////////////////////////
