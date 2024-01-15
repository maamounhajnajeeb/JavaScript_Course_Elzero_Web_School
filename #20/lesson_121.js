const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScrip"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {theName: n, theAge: a, skills: [html, css, js], addresses: {egypt: e, ksa: k} } = user;

console.log(n);
console.log(a);
console.log(html);
console.log(css);
console.log(js);
console.log(e);
console.log(k);
