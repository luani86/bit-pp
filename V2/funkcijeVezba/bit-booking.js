// Bookmaker’s

// In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.

// Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.

// Create constructor functions with properties representing the following:
// Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
// Person - name, surname, date of birth
// Player - person, bet amount, country (instance of Country)
// Address - country, city, postal code, street and number
// BettingPlace - address and list of players (initially empty)
// BettingHouse - competition, list of betting places (initially empty) and number of players

// Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.

// Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

// Add a method to Address that returns a formatted string like the following one:
// 	Nemanjina 4, 11000 Beograd, SR

// Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
// SR, 1050.00 eur, Pera Peric, 29 years

// Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
// Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

// Add a method to BettingPlace that adds a player to the players list of a betting place. 

// Inside your immediately-invoking function, add a function that returns a created Player.

// Inside your immediately-invoking function, add a function that creates a BettingPlace.

// Create an instance of the BettingHouse that receives the name of competition.

// Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets
// 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia


const app = (() => {
    class Country {
        constructor(name,odds,continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
        getContinent() {
            let continentData;
            if(this.continent.includes(" ")) {
               let splitedContinent = this.continent.split(" ");
                continentData = `${splitedContinent[0][0].toUpperCase()}${splitedContinent[1][0].toUpperCase()}`;
            } else {
                continentData = `${this.continent[0].toUpperCase()}${this.continent[1].toUpperCase()}`
            }
            return continentData;
        }
        getData() {
            let countryAbbreviation = `${this.name[0].toUpperCase()}${this.name[1].toUpperCase()}`
            return countryAbbreviation;
        }
    }

    class Person {
        constructor(name, surname, birthDate) {
            this.name = name;
            this.surname = surname;
            this.birthDate = new Date(birthDate);
        }
        getData() {
            let formatedBirthDate = `${this.birthDate.getDate()}.${this.birthDate.getMonth()}.${this.birthDate.getFullYear()}.`
            return `Name: ${this.name} ${this.surname}, Birth date: ${formatedBirthDate}`
        }
    }

    class Player extends Person {
        constructor(name, surname, birthDate, betAmount, country) {
            super(name, surname, birthDate)
            this.betAmount = betAmount;
            this.country = new Country(country.name, country.odds, country.continent)
        }
        getData() {
           let expectedWin = `${(this.country.odds * this.betAmount).toFixed(2)}`
           let age = new Date().getFullYear() - this.birthDate.getFullYear();
           return `${this.country.getData()}, ${expectedWin} eur, ${this.name} ${this.surname}, ${age} years`
        }
    }

    class Address {
        constructor (country ,city , postalCode , street, streetNumber) {
            this.country = new Country(country.name, country.odds, country.continent)
            this.city = city ;
            this.postalCode = postalCode ;
            this.street = street;
            this.streetNumber = streetNumber
        }
        getData() {
            return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}, ${this.country.getData()}`
        }
    } 

    class BettingPlace {
        constructor (address) {
            this.address = new Address(address.country, address.city, address.postalCode, address.street, address.streetNumber);
            this.listOfPlayers = [];
        }
        getSUmOfAllBets() {
            let sumOfAllBets = 0;
            for(let i = 0; i < this.listOfPlayers.length; i++) {
                sumOfAllBets += this.listOfPlayers[i].betAmount;
            }
            return sumOfAllBets;
        }
        getData() {
            return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${this.getSUmOfAllBets()} eur`
        }
        addPlayer(player) {
            this.listOfPlayers.push(player);
            return this.listOfPlayers;
        }
    }

    class BettingHouse {
        constructor(competition) {
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPlayers = 0;
        }
    }
    let turkey = new Country("Turkey", 5, "europe")
    console.log(turkey.getContinent());
    let player1 = new Player("Pera", "Peric", "10/10/1986", 100, turkey)
    console.log(player1.getData());
    let address1 = new Address(turkey, "Istanbul", 11000, "Baskurt Sokak", 34)
    console.log(address1.getData());
    let bettingPlace1 = new BettingPlace(address1);
    bettingPlace1.addPlayer(player1);
    console.log(bettingPlace1.getData())
})();