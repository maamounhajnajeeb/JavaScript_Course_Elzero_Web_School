let allLis = document.querySelectorAll("ul li");

allLis.forEach((el) => {
    el.onclick = function() {
        // remove active class from all elements
        allLis.forEach((element) => {
            element.classList.remove("active");
        });
        // add active class to this element
        this.classList.add("active");
    };
});


let allDivs = document.querySelectorAll(".content div");

allDivs.forEach((el) => {
    el.onclick = function () {

        // remove active class from all elements
        allDivs.forEach((element) => {
            element.classList.remove("unactive");
        });

        // add unactive class to this element
        this.classList.add("unactive");
    }; 
})