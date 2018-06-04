// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
    
//     "Republic Of Serbia" -> "Rbceilpu Of Sabeir"

alphabetize = (string) => {
    let separateStr = string.split(" ");
    let newString = []
    for(let i = 0; i < separateStr.length; i++) {
        separateStr[i] = separateStr[i].split("").sort().join("")
        newString.push(separateStr[i])
    }
    return newString.join(" ")
} 
console.log(alphabetize("Republic Of Serbia"))