function calc(...numbers) {
    let result = 0;
    for (let i=0; i<numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(calc(4, 5, 6));