myList = [15, 20, 30, 10,]

function reduce(callFunc, initialValue=0) {
    let idx = 0;
    let accu = initialValue;

    if (initialValue == 0) {
        idx = 1;
        accu = myList[0];
    }

    for (let i=idx; i<myList.length; i++) {
        accu = callFunc(accu, myList[i], i, myList);
    }

    return accu;
}

function calling(accu, curr, idx, array) {
    return accu+curr;
}

let myNewList = reduce(calling);

console.log(myNewList);