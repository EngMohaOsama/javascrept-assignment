
class car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
        this.msg = function () {
            return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`
        }
    }
    run() {
        return "Car Is Running Now";
    }
    stop() {
        return "Car Is Stopped";
    }
}

let car1 = new car("MG", 2016, 300_000);
let car2 = new car("BMW", 2025, 2_500_000);
let car3 = new car("TOYOTA", 1999, 50_000);

console.log(car1.msg());
console.log(car1.run());

console.log(car2.msg());
console.log(car2.run());

console.log(car3.msg());
console.log(car3.run());
// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"