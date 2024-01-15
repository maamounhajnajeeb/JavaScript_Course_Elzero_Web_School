let myObject = {
    name: "Elzero",
    age: 38,
    country: "Egypt",

    fullDetails: function() {
        return `my name is ${this.name}, my age is ${this.age}, I live in ${this.country}`;
    },
};

console.log(myObject.fullDetails());