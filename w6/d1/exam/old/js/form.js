var selectSubjectInput = document.querySelector('.add-subject');
var enteredStudentNameInput = document.querySelector(".add-student-name");
var enteredGradeInput = document.querySelector(".add-grade");

var passedList = document.querySelector('.passed-list');
var failedList = document.querySelector('failed-list');

var passedCounter = document.querySelector("#passed_counter");
var failedCounter = document.querySelector("#failed_counter");
var passedPercentage = document.querySelector("#passed_percentage");
var failedPercentage = document.querySelector("#failed_percentage");

function collectData() {
    var result = {
        subject: selectSubjectInput.value,
        student: enteredStudentNameInput.value,
        grade: enteredGradeInput.value
    }
    return result;
}

function validateData(collectedData) {
    var errorBlock = document.querySelector("#error_block");

    if (collectedData.student.length < 2) {
        errorBlock.innerHTML = "Enter full name."
        return false;
    } 

    if (collectedData.grade < 0 || collectedData.grade > 10 || collectedData.grade == "") {
        errorBlock.innerHTML = "Enter valid grade."
        return false;
    } else {
        return true;
    }
}

function updateLists(examList, exam) {
    examList.push(exam);
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
    passedCounter.textContent = examPassedList.length;
    failedCounter.textContent = examFailedList.length;
    passedPercentage.textContent = examPassedList.length / (examPassedList.length + examFailedList.length) * 100;
    failedPercentage.textContent = examFailedList.length / (examFailedList.length + examFailedList.length) * 100;
}

