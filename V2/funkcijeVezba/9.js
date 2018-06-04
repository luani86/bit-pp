
// Write a function to convert a string to its abbreviated form. 

//     "John Snow" ->     "John S."

shortedForm = (string) => {
    let shortned= string.split(' ');
    shortned[1] = shortned[1][0] + ".";
    return shortned.join(" ");
}
console.log (shortedForm('Ljubisa Beli'));