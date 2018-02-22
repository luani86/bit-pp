"use strict";

(function(){
console.log("Hi");
return
function Genre(){
var name = this.name;
this.getData = function(){
    var acronym = name[0].toUpperCase() + name[name.length - 1].toUpperCase();
}
}

function Movie(){
    var title = this.title;
    var genre = Genre();
    var length = this.length;
    }

    function Program(){
        var date = this.date;
        var list = this.list[];
        var length = this.length;
        var totalNumOfMovies = this.totalNumOfMovies[];
        }

        function Festival(){
            var name = this.name;
            var listOfPrograms = this.listOfPrograms[];
            var length = this.length;
            var numOfMovies = this.numOfMovies[];
            }

}())
