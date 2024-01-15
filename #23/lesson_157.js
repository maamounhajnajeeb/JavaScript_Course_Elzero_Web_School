const myObject = {
    a: 1,
    b: 2,
    c: 3,
};

// if you didn't write attributes then ->
//  it will be false automatically
Object.defineProperty(myObject, "d", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 4,
});

myObject["d"] = 100;

// writeable -> false
console.log(myObject);


// enumerable -> false -> no d in the for loop log
for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}


// configurable -> false -> no delete
console.log(delete myObject.d);


// no error beacaus you don't change anything
Object.defineProperty(myObject, "d", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 4,
});


// error beacaus of false configurable
Object.defineProperty(myObject, "d", {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 5,
});