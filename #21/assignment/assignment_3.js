let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

function makeMap() {
    let myMap = new Map();
    let objectKeys = Object.keys(myInfo);
    let objectValues = Object.values(myInfo);
    for (let i=0; i<objectKeys.length; i++) {
        myMap.set(objectKeys[i], objectValues[i]);
    }
    return myMap;
}
myMap = makeMap();
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));


// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true