// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = (numberOfChildren, partnerName, location, job) => {
    console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.  `)
}

tellFortune(4,'Ljubisa','Babusnica','Dzokej');

// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = (dogAge, humanAge) => {
    let inHumansYears = dogAge * 7 ;
    let inDogYears = humanAge / 7
    console.log (inHumansYears);
    console.log (inDogYears);
}
calculateDogAge(3, 7);

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = (age , amountPerDay) => {
    const maxAge = 100 ;
    let lifetimeSupply = (maxAge - age) * amountPerDay * 365;
    return parseInt(lifetimeSupply);
}
console.log(calculateSupply(99, 1.5));

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const celsiusToFarenheit = (tempInCelsius) => {
    let convertToFarenheit = tempInCelsius * 1.8 + 32;
    return convertToFarenheit;
}
console.log(celsiusToFarenheit(20));

const farenheitToCelsius = (tempInFarenheit) => {
    let convertToCelsius = (tempInFarenheit - 32) * (5 / 9);
    return convertToCelsius;
}
console.log(farenheitToCelsius(68));


// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    // 12345 -> 54321

    const reverseNumbers = (num) => {
 let arr = num.toString().split("").reverse().join("")
 console.log(arr)
}
reverseNumbers(123);


// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

const orderString = (string) => {
    let ordered = string.toLowerCase().split('').sort().join("")
    return ordered;
}
console.log(orderString("Webmaster"))


// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
    
//     "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

const alphabetize = (string) => {
    let separateStr = string.split(" ");
    let newString = []
    for(let i = 0; i < separateStr.length; i++) {
        separateStr[i] = separateStr[i].split("").sort().join("")
        newString.push(separateStr[i])
    }
    return newString.join(" ")
} 
console.log(alphabetize("Republic Of Serbia"))


// Write a function to split a string and convert it into an array of words.

//     "John Snow" -> [ 'John', 'Snow' ]

const splitString = (string) => {
    let splitedString = string.split(' ');
    return splitedString;
}
console.log(splitString('Ljubisa Preletacevic Beli'));

// Write a function to convert a string to its abbreviated form. 

//     "John Snow" ->     "John S."

const shortedForm = (string) => {
    let shortned= string.split(' ');
    shortned[1] = shortned[1][0] + ".";
    return shortned.join(" ");
}
console.log (shortedForm('Ljubisa Beli'));

// Write a function that can pad (left, right) a string to get to a determined length.

//     '0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

const padString = (firstString, secondString, side) => {
    let newString = [];
    firstString = firstString.slice(secondString.length, firstString.length)
    if(side === "r") {
        newString.push(secondString);
        newString.push(firstString);
    }
    if(side === "l") {
        newString.push(firstString);
        newString.push(secondString);
    }
    return newString.join("");
}

console.log(padString("0000", "123", "r"));

// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

const capitalize = (string) => {
    const capitalized = string.split('');
    capitalized[0] = capitalized[0].toUpperCase();
    string = capitalized.join("");
    return string;
}
console.log(capitalize('dahaskjhdkashjdkash'));

// Write a function to hide email addresses to protect them from unauthorized users.

//     "somerandomaddress@example.com" -> "somerand...@example.com"

const protectMail = (mail) => {
    if(!mail.includes("@")) {
        console.log("Enter valid email");
        return;
    }
    let splitedMail = mail.split('@');
    splitedMail[0] = splitedMail[0].slice(0,(splitedMail[0].length / 2)) + "...";
    splitedMail[1] = "@" + splitedMail[1];
    return  splitedMail.join("");
} 
console.log(protectMail("somerandom@addressexample.com"));

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

const swapString = (string) => {
    let newString = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toLowerCase()) {
            newString.push(string[i].toUpperCase())
        }
        if(string[i] === string[i].toUpperCase()) {
            newString.push(string[i].toLowerCase())
        }
    }
    return newString.join("");
}
console.log(swapString("The Quick Brown Fox"));
