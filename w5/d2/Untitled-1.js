function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    return this.name + '' + this.surname;
};

Person.prototype.printFullName = function () {
    console.log(this.fullName);
};

var pera = new Person('Pera', 'Peric');
pera.printFullName();

function Programmer(name, surname, language) {
    Person.call(this, name, surname);
    this.language = language;
}
/*
Programmer.prototype = Object.create(Person.prototype); //kopija koja se nece menjati ako menjamo dalje Person prototype
Programmer.prototype = Person.prototype;//varijante
Programmer.prototype.constructor = Person//varijante
var zika = new Programmer('zika', 'zikic', 'JS');
console.log(zika);
Programmer.prototype = new Object(Person.prototype);
*/
var zika = new Programmer('zika', 'zikic', 'JS');
console.log(zika);
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.printInfo = function () {
    console.log(Programmer.prototype.__proto__.fullName.call(this));
    var fullNameString = Programmer.prototype.__proto__.fullName.call(this);
    return fullNameString + '' + this.language;
};

console.log(zika);

