// dohvatanje elemenata iz HTML
var selectSubject = document.querySelector('.add-subject').value;
var enteredStudentName = document.querySelector(".add-student-name").value;
var enteredGrade = document.querySelector(".add-grade").value;

var passedList = document.querySelector('.passed-list');
var failedList = document.querySelector('failed-list');

var passedCounter = document.querySelector("#passed_counter");
var failedCounter = document.querySelector("#failed_counter");

// validacija forme
function validateData() {
    if (enteredStudentName == "") {
        return "Enter correct student name!";
    } else {
        return true;
    }
}

var examFailedList = [];
var examPassedList = [];

// apdejtovanje liste polozenih i palih
function updateLists(examList, exam) {
    examPassedList.push(exam);
}

function updatePage(exam) {
    if (exam.hasPassed() == true) {
        passedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';

    } else {
        failedList.innerHTML += '<li>' + exam.getExamInfo() + '</li>';
    }
}

// apdejtovanje kauntera polozenih i palih
function updateStatistics() {
    passedCounter.textContent = examPassed.length;
    failedCounter.textContent = examFailed.length;
}