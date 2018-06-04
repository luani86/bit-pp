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
    }

    class Person {
        constructor(name, surname, birthDate) {
            this.name = name;
            this.surname = surname;
            this.birthDate = new Date(birthDate);
        }
    }

    class Player extends Person {
        constructor(name, surname, betAmount, country) {
            super(name, surname)
            this.betAmount = betAmount;
            this.country = new Country(country.name, country.odds, country.continent)
        }
    }

    class Address {
        constructor (country ,city , postalCode , street, streetNumber) {
            this.country = country ;
            this.city = city ;
            this.postalCode = postalCode ;
            this.street = street;
            this.streetNumber = streetNumber
        }
    } 

    class BettingPlace {
        constructor (address) {
            this.address = new Address(address.country, address.city, address.postalCode, address.street, address.streetNumber);
            this.listOfPlayers = [];
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
    console.log(turkey.getContinent())
})();