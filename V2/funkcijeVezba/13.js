
// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

swapString = (string) => {
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