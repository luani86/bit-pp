
var addBtn = document.querySelector('#add_btn');
var examFailedList = [];
var examPassedList = [];

addBtn.addEventListener("click", function(){
    // 1) procitati podatke
    var collectedData = collectData();

    // 2) proveriti podatke
    var validatationStatus = validateData(collectedData);

    // 3) azuriramo podatke - JS podaci

    // 4) azuriramo podatke - u HTML sadrzaju 


});


    // function InputData(selectSubject, enteredStudentName, enteredGrade){
    //     this.selectSubject = document.querySelector('.add-subject').value;
    //     this.enteredStudentName = document.querySelector(".add-student-name").value;
    //     this.enteredGrade = document.querySelector(".add-grade").value;
    //     }   

    // function Lists(passedList, failedList){
    //     this.passedList = document.querySelector('.passed-list');
    //     this.failedList = document.querySelector('failed-list');
    // }

    // function CounterPercentage(passedCounter, failedCounter, passedPercentage, failedPercentage){
    //     this.passedCounter = document.querySelector("#passed_counter");
    //     this.failedCounter = document.querySelector("#failed_counter");
    //     this.passedPercentage = document.querySelector("#passed_percentage");
    //     this.failedPercentage = document.querySelector("#failed_percentage");
    // }