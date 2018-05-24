// functions bind, call apply
var firstObj = {
  name: "Pera",
  surname: "Peric",
  sayName: function() {
    console.log("I am " + this.name + " " + this.surname);
  }
};
var secondObj = {
  name: "Zika",
  surname: "Zikic"
};
firstObj.sayName.call(secondObj);
var sayName = firstObj.sayName.bind(secondObj);
sayName();

var someObj = {
  name: "ime",
  sayName: function(who) {
    console.log(who + " " + "my name is " + this.name);
  }
};
var newObj = {
  name: "novi obj"
};
someObj.sayName.apply(newObj, ["fff"]);

// this in a variable
var thirdObj = {
  name: "Mika",
  surname: "Mikic",
  sayName: function() {
    var that = this;
    return function() {
      console.log(that.name);
    };
  }
};
thirdObj.sayName()();

// this as argument
var fourthObj = {
  name: "Mika",
  surname: "Mikic",
  sayName: function(that) {
    return function() {
      console.log(that.name);
    };
  }
};

fourthObj.sayName(fourthObj)();

//Inheritance
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + this.surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
}

// Manager.prototype.changeDepartment = function() {};
var pera = new Developer("Pera", "Peric", "programer", 100, "js");
console.log(pera.getFullName())
