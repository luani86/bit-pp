// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

orderString = (string) => {
    let ordered = string.toLowerCase().split('').sort().join("")
    return ordered;
}
console.log(orderString("Webmaster"))