const getData = function(apiLink) {
    let myPromise = new Promise((resolveFunc, rejectFunc) => {
        let myReq = new XMLHttpRequest();
        myReq.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolveFunc(JSON.parse(this.responseText));
            } else {
                rejectFunc(Error("Failed"));
            }
        };
        myReq.open("GET", apiLink);
        myReq.send();
    });
    return myPromise;
};

getData("https://api.github.com/users/maamounhajnajeeb")
.then(
    (resolvedValue) => {
        resolvedValue.length = 10;
        return resolvedValue;
    })
    .then ((result) => console.log(result[0]))
    .catch((rej) => console.log(rej));
