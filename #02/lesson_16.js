/*
template literals: template strings
*/
let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(`${a} ${b}\n${c} ${d}`);

/////////////////////////////////////

let title = "Maamoun";
let paragraph = "Maamoun Haj Najeeb";

let markUp = `

<div>
    <div class="card">
        <h2>${title}</h2>
        <p>${paragraph}</p>
    </div>
</div>

`
document.write(markUp)