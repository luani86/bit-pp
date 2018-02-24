"use strict";

(function () {

    console.log("Hi!");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat(number, category) {
        this.number = number || Math.floor((90 * Math.random()) + 10);
        this.category = category || "e";
        this.getData = function () {
            return this.number + " " + this.category;
        }
    }

    function Passenger(personObj, seatObj) {
        this.personObj = personObj;
        this.seatObj = seatObj;

        this.getData = function () {
            return seatObj.getData() + ", " + personObj.getData();
        }
    }

    function Flight(relation, date) {
        this.listOfPassengers = [];
        this.relation = relation;
        this.date = new Date(date);

        this.addPassenger = function (passenger) {
            return this.listOfPassengers.push(passenger);
        }

        this.getData = function () {
            var date = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();
            var result = date + " " + this.relation + "\n";

            this.listOfPassengers.forEach(function (passenger) {
                result += passenger.getData() + "\n";
            });
            return result;
        }
    }

    function createPassenger(name, surname, number, category) {
        var personObj = new Person(name, surname);
        var seatObj = new Seat(number, category);
        return new Passenger(personObj, seatObj);
    }

    function createFlight(relation, date){
        var result = new Flight(relation, date);
        return result;
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (){
            return this.listOfFlights.push(flight);
        }
    }

    var flight1 = createFlight("Belgrade - Istanbul", "Oct 25 2017");
    var flight2 = createFlight("Belgrade - Oslo", "Oct 25 2018");

    var passenger1 = createPassenger("Tamara", "Milosavljevic", 1, "b");
    var passenger2 = createPassenger("Luka", "Breberina", 2, "e");
    var passenger3 = createPassenger("Milos", "Milosevic", 3);

    var airport = new Airport();
    console.log(airport);



    //var seat = new Seat(1, "b");
    // var seat1 = new Seat(2, "b");
    // var seat2 = new Seat(3, "e");
    // var seat3 = new Seat(6, "b");
    // //console.log(seat.getData());

    // var person = new Person("Tamara", "Milosavljevic");
    // var person1 = new Person("Luka", "Breberina");
    // var person2 = new Person("Stefan", "Milosevic");
    // var person3 = new Person("milos", "valjevic");
    // //console.log(person.getData());

    // var passenger = new Passenger(person, seat);
    // var passenger1 = new Passenger(person1, seat1);
    // var passenger2 = new Passenger(person2, seat2);
    // var passenger3 = new Passenger(person3, seat3);
    //console.log(passenger.getData());

    //var flight = new Flight("Belgrad-Istanbul", "2017, 12, 6");
    flight1.addPassenger(passenger1);
    flight2.addPassenger(passenger2);
    console.log(flight1.getData());
    console.log(flight2.getData());

    
    
    




})()
