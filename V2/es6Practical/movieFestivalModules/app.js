const dataModule = (() => {

    //---------------------------------------------Movie part--------------------------
    let listOfMovies = [];

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getData() {
            return `${this.title}, ${this.length} min, ${this.genre[0].toUpperCase()} ${this.genre[this.genre.length - 1].toUpperCase()}`;
        }
    }

 

    const createMovie = (title, length, genre) => {
        const currentMovie = new Movie(title, length, genre)
        return currentMovie;
    }

    const updateList = (movie) => {
        listOfMovies.push(movie);
        return listOfMovies;
    }

    const calculateTotalLength = () => {
        let totalLength = 0;
        for (let i = 0; i < listOfMovies.length; i++) {
            totalLength += parseInt(listOfMovies[i].length);
        }
        return totalLength;
    }


    //---------------------------------------------Program part--------------------------
    // let listOfPrograms = [];

    // function Program(date) {
    //     this.date = new Date(date);
    // }

    // Program.prototype.getData = function () {
    //     return `${this.date}, ${listOfMovies.length} movies, duration: `
    // }


    return {
        // Movie part
        createMovie,
        updateList,
        calculateTotalLength
    }
})();

const uiModule = (() => {
   const collectData = () => {
        const titleInput = document.querySelector("#movie-title");
        const lengthInput = document.querySelector("#movie-length");
        const genreInput = document.querySelector("#movie-genre");

        const movieTitle = titleInput.value;
        const movieLength = lengthInput.value;
        const movieGenre = genreInput.value;

        return {
            movieTitle,
            movieLength,
            movieGenre
        }
    }

    const displayMovies = (movie) => {
        const movieList = document.querySelector(".movie-list");
        movieList.innerHTML += movie.getData() + "</br>";
    }

    const displayTotalLength = (totalLength) => {
        const totalLengthInput = document.querySelector("#total-length");
        totalLengthInput.innerHTML = totalLength;
    }

    const displaySelectMovies = (movie) => {
        const selectMovies = document.querySelector("#listOfMovies");
        var optionMovie = document.createElement("option");
        optionMovie.textContent = movie.title;
        selectMovies.appendChild(optionMovie)
    }
    //--------------------------do ovde stigoh

    return {
        collectData,
        displayMovies,
        displayTotalLength,
        displaySelectMovies
    }

})();

const mainModule = ((dataModule, uiModule) => {
    const submitBtn = document.querySelector("#submit-movie");
    
    const init = () => {
        // collect data
        const formData = uiModule.collectData();
        // create movie and add it to the list of movies
        const createdMovie = dataModule.createMovie(formData.movieTitle, formData.movieLength, formData.movieGenre);
        dataModule.updateList(createdMovie);
        // display movie
        uiModule.displayMovies(createdMovie);
        uiModule.displayTotalLength(dataModule.calculateTotalLength());
    }
    submitBtn.addEventListener("click", init)
    
})(dataModule, uiModule);