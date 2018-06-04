
// Person – id (automatically generated 5 numbers digit), name and surname
// Employee - inherits from Person and has employeeId and salary.
// Professor – inherits from Employee and has officeNumber.
// Exam - subject, professor, date i grade. (Property profesor is of type Profesor).
// Student – inherits Person and also has property indexNumber, status and list of passed exams
// Faculty – name, list of students and number of 10 grades.
// Create object StudentStatus which should be object that can not be modified (we can not add properties or methods form code) and should contain predefined values REGULAR, REMOTE and GRADUATED.

// Add method to Exam constructor that returns formatted string as first consonant of first word in subject name, date (in format dd.mm.yyyy.), status and grade.

// Add method to Person constructor which returns formatted string as name and surname.

// Add method to Professor constructor which returns formatted string as name, surname and employeeId

// Add method to Student which adds new exam to list of passed exams of a given student.

// When adding exam in previous method take care that grade must be greater than 5 and that we can not have more than 2 passed exams at same professor. Take care if exam is already in the list of passed exam (when student attends exam again) in that case you should replace data of that exam with new data. 

// Add method to Student constructor which should return formatted string as
//     Index Number, Name, Surname, average grade (calculated based on passed grades)

// To get data related to professors, students and exams use their methods. 

// Add function that collects data from the form and returns created Exam. 
//     Take care that grade can be only number.

// Add function that collects data from the form and returns created Student. 
//     Take care that grade can be only number.

const app = (() => {
class Person {
    constructor (name, surname) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.surname = surname;  
    }
    getData() {
        return `${this.name} ${this.surname}`
    }
}
class Employee extends Person {
    constructor (name, surname, salary) {
        super(name, surname)
        this.salary = salary;
    }
} 
class Professor extends Employee {
    constructor (name, surname, salary, officeNum) {
        super(name, surname, salary)
        this.officeNum = officeNum;
    } 
    getData() {
        return `${super.getData()}, Professor, salary: ${this.salary}, office number: ${this.officeNum} `
    }
}
class Exam {
    constructor(subject, professor, date, grade) {
        this.subject = subject;
        this.professor = new Professor(professor.name, professor.surname, professor.salary, professor.officeNum);
        this.date = new Date(date);
        this.grade = grade;
    }
    getData() {
        let formatedDate = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}.`
        let subjectToUpperCase = this.subject.toUpperCase()
        let splitedSubject = subjectToUpperCase.split(" ");
        let subjectFirstWord = splitedSubject[0];
        let newSubjectWord = []
        for(let i = 0; i < subjectFirstWord.length; i++) {
            if(subjectFirstWord[i] !== "A" && subjectFirstWord[i] !== "E" && subjectFirstWord[i] !== "I" && subjectFirstWord[i] !== "O" && subjectFirstWord[i] !== "U" && subjectFirstWord[i] !== "Y") {
                newSubjectWord.push(subjectFirstWord[i])
            }
        }
            return `Abbreviation: ${newSubjectWord[0]}, Date: ${formatedDate}, Grade: ${this.grade}`
    }
}
class Student extends Person {
    constructor (name , surname , indexNumber , status) {
        super (name , surname) 
        this.indexNumber = indexNumber;
        this.status =status;
        this.passedExams = [];
    }
    getNumberOfPassedExams(exam) {
      if(exam.grade > 5) {
          this.passedExams.push(exam);
      }
    }
    getData() {
        let sumOfGrades = 0;
        let averageGrade;
        for(let i = 0; i < this.passedExams.length; i++) {
            sumOfGrades += this.passedExams[i].grade
        }
        averageGrade = sumOfGrades / this.passedExams.length;
        return `Index number: ${this.indexNumber}, name: ${super.getData()}, Average grade: ${averageGrade}`
    }
}
class Faculty {
    constructor (name) {
        this.name = name;
        this.listOfStudents = [];
        this.counterOfTens = 0;
    }
}

const createExam = (subject, professor, date, grade) => {
    return new Exam(subject, professor, date, grade)
}

const createStudent = (name , surname , indexNumber , status) => {
    return new Student(name , surname , indexNumber , status)
}

const pera = new Professor("pera", "Peric", 1000, 21)
const zika = new Professor("zika", "zikic", 600, 20)
console.log(pera.getData())
const chemistryExam = new Exam("organic chemistry", pera, "10/10/2018", 7)
console.log(chemistryExam.getData())
const biologyExam = new Exam("biology", pera, "8/10/2018", 5)
console.log(biologyExam.getData())
const mika = new Student("Mika", "Mikic", 33, "regular");
mika.getNumberOfPassedExams(chemistryExam)
mika.getNumberOfPassedExams(biologyExam)
console.log(mika.getData())
})();




