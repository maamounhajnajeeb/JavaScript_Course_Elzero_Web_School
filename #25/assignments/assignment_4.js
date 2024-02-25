let myReq = new XMLHttpRequest();
myReq.open("GET", "articles.json")
myReq.send()

myReq.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
        let mainData = JSON.parse(myReq.responseText);

        let parentDiv = document.createElement("div");
        parentDiv.id = "data";

        for (let item of mainData) {
            let childDiv = document.createElement("div");

            let h2 = document.createElement("h2");
            h2.innerText = item["title"];

            let p1 = document.createElement("p");
            p1.innerText = item["id"];

            let p2 = document.createElement("p");
            p2.innerText = item["author"];

            let p3 = document.createElement("p");
            p3.innerText = item["category"];

            childDiv.append(h2, p1, p2, p3);
            
            parentDiv.appendChild(childDiv);
        }
        document.body.appendChild(parentDiv);
    }
}
