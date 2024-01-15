let user = {
    name: "Maamoun",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },

    checkAv: function () {
        return user.available
        ? "Free for work"
        : "Not free";
    }
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills[2]);
console.log(user.addresses.egypt);
console.log(user["addresses"].egypt);
console.log(user["addresses"]["egypt"].two);
console.log(user.checkAv());
