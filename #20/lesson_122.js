let myFriends = [
    {title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"]},
    {title: "Maamoun", age: 23, available: true, skills: ["Python", "Django"]},
    {title: "Khaled", age: 33, available: false, skills: ["PHP", "Laravel"]},
];

function getInfo(chosenMan, array) {
    obj = getObject(chosenMan, array);

    let {title: n, age: a, available: av, skills: s} = obj;
    av? av = "Available": av = "UnAvailable"; 
    console.log(n);
    console.log(a);
    console.log(av);

    let [, Technology] = s;
    console.log(Technology)
}

function getObject(chosenObj, array) {
    let obj = {};

    if (chosenObj === 1) {
        [obj, , ] = array;
    } else if (chosenObj === 2) {
        [ , obj, ] = array;
    } else {
        [ , , obj] = array;
    }

    return obj;
}

getInfo(1, myFriends);
getInfo(2, myFriends);
getInfo(3, myFriends);