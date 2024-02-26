let day = "  wednesday  ";
day = day.trim();
day = day[0].toUpperCase() + day.slice(1, day.length);

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("no available dates in this day");
        break;

    case "Monday":
    case "Thursday":
        console.log("dates form 10 am to 5 pm");
        break;

    case "Wednesday":
        console.log("dates form 10 am to 7 pm");
        break;
        
    case "Tuesday":
        console.log("dates form 10 am to 6 pm");
        break;

    default:
        console.log("Unknow day");
        break;
}