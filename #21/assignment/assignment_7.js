let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// 1
function joiningArrays1(first, second) {
    return [...first, ...second]
}

console.log(joiningArrays1(numsOne, numsTwo));


// 2
function joiningArrays2(first, second) {
    return first.concat(second);
}

console.log(joiningArrays2(numsOne, numsTwo));


// 3
function joiningArrays3(first, second) {
    let joinedArray = [];
    first.forEach(e => joinedArray.push(e));
    second.forEach(e => joinedArray.push(e));
    return joinedArray;
}

console.log(joiningArrays3(numsOne, numsTwo));
