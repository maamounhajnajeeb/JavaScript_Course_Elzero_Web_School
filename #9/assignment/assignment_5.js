let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


if (haystack.indexOf("JS") > 0) {
    console.log("Found");
};

if (haystack.lastIndexOf("JS")) {
    console.log("Found");
};

if (haystack.includes("JS")) {
    console.log("Found");
};