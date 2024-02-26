// short example before challenge
let theName = "Maamoun";
theName == "Maamoun"? console.log("Mr.") : console.log("Mrs.");

// if challenge
let a = 10;
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40"): a > 40 ? console.log(">40"): console.log("Unknown");


// second challenge
let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
    console.log("Good");
}

// third challenge
let index = st.search("W");
// or
index = st.indexOf("W");

if (st[index] === "W") {
    console.log("Good");
}

// 4th challenge
if (typeof(st.length) !== "string") {
    console.log("Good");
}

// 5th challenge
if (typeof(st.length) === "number") {
    console.log("Good");
}

// 6th challenge
let newString = st.slice(0, 6).repeat(2);
if (newString === "ElzeroElzero") {
    console.log("Good");
}
