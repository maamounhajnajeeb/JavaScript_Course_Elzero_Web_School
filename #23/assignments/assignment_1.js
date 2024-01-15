class Car{
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }

    run() {
        return "Car is running now";
    }

    stop() {
        return "Car is stopped";
    }

    details() {
        console.log(this);
        return `Name is ${this.n} And Model is ${this.m} And Price is ${this.p}`
    }
}

carOne = new Car("Kia", "2023", 42000);
carTwo = new Car("Toyta", "2023", 42000);
carThree = new Car("Lancer", "2023", 42000);

console.log(`Car One ${carOne.details()}`);
console.log(carOne.run());