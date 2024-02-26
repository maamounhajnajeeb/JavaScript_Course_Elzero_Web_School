// how to create an array
myFriends = ["Maamoun", "Osama", "Ali"];
console.log(myFriends);

// slicing
console.log(`Hello ${myFriends[1]}`);

// slicing slicing
console.log(myFriends[0][0]);

// nested array
myElements = [["Maamoun", "Mahmoud", "Osama"], "Ali", "Mohammed"]
console.log(`${myElements[0][1]}`);
console.log(`${myElements[0][1][2]}`);

// changing values
console.log(myElements);
myElements[1] = "Marwan";

myElements[0] = "Ibraheem";
console.log(myElements);

myElements[0] = ["Ibraheem", "Gamal"];
console.log(myElements);

// types
console.log(typeof myElements);
console.log(Array.isArray(myElements));

// name
let man = "Sameh";
console.log(Array.isArray(man));