let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json")
myReq.send()

myReq.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
        let mainData = JSON.parse(myReq.responseText);
        for (let item of mainData) {
            item["category"] = "All";
        }
        console.log(mainData);

        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}
