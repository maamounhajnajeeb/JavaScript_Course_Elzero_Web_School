/*
    Ready State => Status of the Reqeust
    [0] Request Not Initialized
    [1] Server Connection Established
    [2] Request Received
    [3] Processing Request
    [4] Request is Finished And Response is Ready
*/

let myReq = new XMLHttpRequest();
console.log(myReq.readyState); // 0
myReq.open("GET", "https://api.github.com/users/maamounhajnajeeb");
console.log(myReq.readyState); // 1
myReq.send();
console.log(myReq);

myReq.onreadystatechange = function() {
    console.log(myReq.readyState);
    console.log(myReq.status);
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
    }
};
