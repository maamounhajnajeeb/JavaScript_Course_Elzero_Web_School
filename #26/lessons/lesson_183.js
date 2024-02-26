/*
    fetch API
    return a representation of the entire HTTP response
*/

fetch("https://api.github.com/users/maamounhajnajeeb")
.then((result) => result.json())
.then((res) => console.log(res))
.catch((err) => console.log(err));
