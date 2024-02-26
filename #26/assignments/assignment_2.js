fetch("assignment_1.json")
.then((data) => data.json())
.then((result) => {
    result.length = 5;
    console.log(result);
})
.catch((err) => console.log(err));
