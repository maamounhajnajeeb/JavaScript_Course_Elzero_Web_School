let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json");
myReq.send();

myReq.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
    this.onloadend = (e) => console.log("Date Loaded");
}

// myReq.onloadend = (e) => console.log("Data Loaded");
