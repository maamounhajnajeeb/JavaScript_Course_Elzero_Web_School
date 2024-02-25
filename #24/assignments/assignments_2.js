function addToStartDateWithoutTimezone(addedSeconds=0) {
    let start = new Date();
    start.setTime(0);
    
    let timeZoneDelay = (start.getTimezoneOffset() * 60 * 1000) + (addedSeconds * 1000);
    let currentMilleSeconds = start.getMilliseconds();
    
    start.setMilliseconds(currentMilleSeconds + timeZoneDelay);
    return start;
}

console.log(addToStartDateWithoutTimezone(1));
