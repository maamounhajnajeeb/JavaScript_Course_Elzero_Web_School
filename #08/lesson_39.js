/*
    switch challenge
*/

let job = "Developer";
let salary = 0;

// if (job === "Manager") {
//     salary = 8000;
// } else if (job == "IT" || job == "Support") {
//     salary = 6000;
// } else if (job == "Developer" || job == "Designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// }

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(`${job} Salary is ${salary}`);
        break;

    case "IT":
    case "Support":
        salary += 6000;
        console.log(`${job} Salary is ${salary}`);
        break;

    case "Developer":
    case "Designer":
        salary += 7000;
        console.log(`${job} Salary is ${salary}`);
        break;

    default:
        salary += 4000;
        console.log(`${job} Salary is ${salary}`);
        break;
}


/*
    if challenge
*/

let holidays = 3;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`my money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
}

if (holidays == 0) {
    money = 5000;
    console.log(`my money is ${money}`);
}
else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`My money is ${money}`);
}
else if (holidays == 3) {
    money = 2000;
    console.log(`My money is ${money}`);
}

holidays == 0 
    ? console.log(`my money is ${5000}`)
    : holidays == 1 || holidays == 2 
    ? console.log(`my money ${3000}`)
    : holidays == 3
    ? console.log(`my money is ${2000}`)
    :console.log("Unknown")