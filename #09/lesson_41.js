// index starts from 0
let myFriends = ["Ahmad", "Mohammed", "Osama", "Alaa"];
console.log(myFriends.length);

// changing values
myFriends[3] = "Gamal";
console.log(myFriends);


// extending the array
myFriends[6] = "Maamoun";
console.log(myFriends);
console.log(myFriends.length);

// appending after the last index
myFriends[myFriends.length] = "Muhannad";
console.log(myFriends);

// updating last element by index
myFriends[myFriends.length-1] = "Tareek";
console.log(myFriends);

//
myFriends.length = 2;
console.log(myFriends);