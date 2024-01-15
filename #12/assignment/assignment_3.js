function ageInTime (age) {
    if (age > 100 || age < 10) {
        return "Age out of range";
    }

    let months = age * 12;
    let days = months * 365;
    let hours = days * 24;
    let mins = hours * 60;
    let seconds = mins * 60;

    return `${age} \n${months} \n${days} \n${hours} \n${mins} \n${seconds}`;
}

console.log(ageInTime(9));
console.log(ageInTime(110));
console.log(ageInTime(99));
console.log(ageInTime(90));