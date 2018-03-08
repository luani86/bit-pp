class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(`${this.name} | ${this.surname}`)
    }
}
let person1 = new Person("Pera", "Peric");

class Programmer extends Person {
    constructor(name, surname, ...languages) {
        super(name, surname);
        this.languages = languages;
    }

    printProgramerData() {
        super.printPersonData();
        console.log(this.languages);
    }
    learnedNewLanguage(...newLanguage){
        this.languages.push(...newLanguage);
    }
} 

let programmer1 = new Programmer(person1.name, person1.surname, 'Python', 'C', 'JavaScript');
programmer1.learnedNewLanguage("Java", 'C++');
console.log(programmer1.languages);



