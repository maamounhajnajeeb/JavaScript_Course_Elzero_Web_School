// switch statement

// first example: specific case
let day = 0;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
}


// second example: default case
day = 5;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
            console.log("Unknown Day");
}


// third example: multiple cases
day = 3;
// day = 2;

switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
    default:
        console.log("Unknown Day");
}


// fourth example: default in the begging
day = 32;

switch (day) {
    default:
        console.log("Unknown Day");
        break
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
    
}
