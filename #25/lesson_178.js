let myReq = new XMLHttpRequest();
myReq.open("GET", "https://api.github.com/users/maamounhajnajeeb/repos");
myReq.send();

myReq.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let responseData = JSON.parse(this.responseText);
        for (let item of responseData) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(item["name"]);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
};
