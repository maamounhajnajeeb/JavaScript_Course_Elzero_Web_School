

function getDetails(zName, zCountry, zAge) {
    
    function namePattern(zName) {
        zName = zName.split(" ");
        zName = zName[0]+ " " + zName[1][1].toUpperCase() + ".";
        return zName;
    }

    function ageWithMessage(zAge) {
        zAge = zAge.slice(0, 2);
        zAge = `Your Age is ${zAge}`;
        return zAge;
    }

    function countryTwoLetters(zCountry) {
        zCountry = zCountry.slice(0, 2).toUpperCase();
        return `You live in ${zCountry}`;
    }

    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }

    return fullDetails();
}

console.log(getDetails("Maamoun Najeeb", "Syria", "23 is my age"))