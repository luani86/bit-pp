// Write a function that can pad (left, right) a string to get to a determined length.

//     '0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

padString = (firstString, secondString, side) => {
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