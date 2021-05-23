/*
    ********** PROTOTYPE **********

let obj = {
    name : "Pramod", 
    address : "Nepal",
    age : 20
}
console.log(obj);

function Obj(name) {
    this.name = name;
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function(newName) {
    this.name = newName;
}

let obj2 = new Obj("Harry");
console.log(obj2);
console.log(obj2.getName())
value = obj2.setName("Pramod Karki")
console.log(obj2.getName())

*/

// ********* prototype inheritance ************

const proto = {
    slogan : function() {
        return "This company is the best company."
    },
    changeName : function(newName) {
        this.name = newName;
    }
}

// creating own prototype
const pramod = Object.create(proto);
pramod.name = "Pramod";
pramod.role = "Developer";
pramod.changeName = "Pramod Karki"
console.log(pramod.changeName);


function Employee(name, salary, exp) {
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}

Employee.prototype.slogan = function() {
    return `This is the best company, ${this.name}`;
}

let funObj = new Employee("Ram", 70000, 6);
console.log(funObj.slogan());

function Programmer(name, salary, exp, language){
    Employee.call(this, name, salary, exp);
    this.language = language;
}

// Inheritant the prototype of Employee class
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor of programmer
Programmer.prototype.constructor = Programmer;

let coder = new Programmer("Pramod", 780000, 1, ["Python", "JavaScript", "Java", "C++"]);
console.log(coder)
console.log(coder.slogan())