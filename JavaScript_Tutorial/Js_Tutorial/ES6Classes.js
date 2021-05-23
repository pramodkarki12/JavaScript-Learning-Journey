class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }

    slogan() {
        return `I am ${this.name} and I am at ${this.division} position.`;
    }

    experienceFrom2020() {
        return `${this.name} started the company at ${2020 - this.experience}`;
    }

    // Static method
    static add(a, b) {
        return a + b;
    }
}

/*
pramod = new Employee("Ram", 5, "Manager");
console.log(pramod.slogan());
console.log(pramod.experienceFrom2020())
console.log(Employee.add(4, 5))
*/

class Programmer extends Employee {
    constructor(name, exp, division, language) {
        super(name, exp, division);
        this.language = language;
    }

    favouriteLanguage() {
        if (this.language == 'python') {
            return "Python";
        }
        else 
            return "JavaScript"
    }

    static multiply(a, b) {
        return a * b;
    }
}

a = new Programmer("Shyam", 3, "Clerk", "Go")
console.log(a);
console.log(a.favouriteLanguage());
console.log(Programmer.multiply(4, 5))
console.log(Programmer.add(4, 6))