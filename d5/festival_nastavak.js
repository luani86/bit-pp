"use strict";

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var acronym = this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
            return acronym;
        };
    }

    var comedyGenre = new Genre("comedy");
    var sf = new Genre("science fiction");
    console.log(comedyGenre);
    console.log(comedyGenre.getData());


    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            var movieData = this.title + " " + this.length + " " + this.genre.getData();
            return movieData;
        };
    }

    var tockovi = new Movie("Tockovi", comedyGenre, 90);
    console.log(tockovi.getData());
    var mazeRunner = new Movie("Maze Runner", sf, 119);

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumOfMovies = 0;

        this.totalLength = function () {
            var totalLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalLength = totalLength + this.listOfMovies[i].length;
            }
            return totalLength;
        }

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumOfMovies++;
        }

        this.getData = function () {
            var result = this.date + " " + this.totalLength();
            for (var i = 0; i < this.listOfMovies.length; i++) {
                result = result + " " + this.listOfMovies[i].getData();
            }
            return result;
        }
    }



    var date = new Date("February 22,2017");
    var ourProgram = new Program(date);
    ourProgram.addMovie(tockovi);
    ourProgram.addMovie(mazeRunner);
    ourProgram.getData();
    // console.log(program.getData());
    console.log(ourProgram.listOfMovies);
    console.log(ourProgram.totalNumOfMovies);

    //

    function Festival(name) {

        this.name = name;
        this.listOfPrograms = [];
        this.numOfPrograms = 0;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
            this.numOfPrograms++;


        };
        this.getData = function () {

            // for petlja
            
            var result = this.name + " " + this.listOfPrograms[0].totalLength + " " + Program.listOfMovies;
            
            return result;
        }
        
    }
   
    var fest = new Festival("Fest");
    fest.addProgram(ourProgram);
    
    console.log(fest);

    console.log(fest.getData());

}())