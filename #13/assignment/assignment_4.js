function findSum(numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function stringFunction(container) {
    let numbers = [];
    for (let i=0; i<container.length; i++) {

        let word = container[i];
        let newWord = "";
        for (let j=0; j<word.length; j++) {

            if (+word[j] == word[j]) {
                newWord += word[j];
            }
        }
        if (newWord.length > 0) {
            numbers.push(+newWord);
        }
    }
    return numbers;
}

function specialMix(...data) {
    if (typeof data[0] === "string") {
        numbers =  stringFunction(data);
        if (numbers.length === 0) {
            return "All is String";
        }

        return findSum(numbers);
    }
    
    return findSum(data);
}

console.log(specialMix("Ahmad", "Ali"));
console.log(specialMix("2Ahmad", "1Ali"));
console.log(specialMix(66, 22));