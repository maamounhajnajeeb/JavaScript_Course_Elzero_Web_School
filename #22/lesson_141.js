let serials = "S100S S3000S S30000S S500000S S9500000S";

let firstPattern = /s\d{3}s/ig;
console.log(serials.match(firstPattern)); // S[three numbers]S

let secondPattern = /s\d{4,5}\d?s/ig;
console.log(serials.match(secondPattern)); // S[four of five numbers]S

let thirdPttern = /s\d{4,}s/ig;
console.log(serials.match(thirdPttern)); // S[At least four]S
