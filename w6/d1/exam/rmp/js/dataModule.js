// subjectData
function Subject(name) {
    this.name = name;
}

Subject.prototype.getSubjectName = function () {
    return this.name;
}

// studenttData
function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function () {
    return this.name + " " + this.surname;
}

// examData
function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {
    this.subject + " " + this.student.getStudentData();
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}