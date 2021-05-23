
function myCar(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function () {
        console.log(`${this.name} is running.`);
    }
    this.analyze = function () {
        console.log(`${this.name} is slower by ${300 - this.topSpeed} kmph than Ferrai.`);
    }
}

car1 = new myCar("Ferrai", 300);
car2 = new myCar("Mercedes", "200")

console.log(car1.run());
console.log(car2.run());
console.log(car2.analyze())