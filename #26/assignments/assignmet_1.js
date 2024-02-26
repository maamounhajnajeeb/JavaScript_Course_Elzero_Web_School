let myPromise = new Promise((resolveFunc, rejectFunc) => {
    let myReq = new XMLHttpRequest();
    myReq.onload = function() {
        if (this.status === 200 && this.readyState === 4) {
            resolveFunc(JSON.parse(this.responseText));
        } else {
            rejectFunc(Error("Not fetched successfully"));
        }
    }
    myReq.open("GET", "assignment_1.json");
    myReq.send();
})
.then(
    (resolvedData) => {
        resolvedData.length = 5;
        return resolvedData
    })
.then((data) => {
    for (let item of data) {
        let pElement = document.createElement("p");
        pElement.innerText = item["description"];
        
        let h3Element = document.createElement("h3");
        h3Element.innerText = item["title"];
        
        let divElement = document.createElement("div");
        divElement.append(h3Element, pElement);

        document.body.appendChild(divElement);
    }
})
.catch((err) => console.log(err));
