let myArray = [10, 20, 30, 40, 50, "A", "B"];

//myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, -1, ); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, 6, ); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2, ); // [10, "A", "B", 40, 50, "A", "B"]

myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);
