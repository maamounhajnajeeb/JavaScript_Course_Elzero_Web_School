const user = {
    theName: "Maamoun",
    theAge: 23,
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user);

function showDetails({theName: n, theAge: a, skills: {css: c}} = obj) {
    console.log(`Your name is ${n}`);
    console.log(`Your age is ${a}`);
    console.log(`Your css skill is ${c}`);
}