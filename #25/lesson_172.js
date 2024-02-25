/*
    JSON
        - JSON.parse() => Convert Text Data To JS Object
        - JSON.stringfy() => Convert JS Object To JSON
*/

const myJSONObjectFromServer = '{"UserName": "Maamoun Haj Najeeb", "Age": 24}';

console.log(typeof myJSONObjectFromServer);
console.log(myJSONObjectFromServer);


const myJSObject = JSON.parse(myJSONObjectFromServer);
console.log(typeof myJSObject);
console.log(myJSObject);

myJSObject["UserName"] = "Maamoun AbdulGhafar Haj Najeeb";
myJSObject["Age"] = 23;

console.log(typeof myJSObject);
console.log(myJSObject);


const myJsonObjectToServer = JSON.stringify(myJSObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
