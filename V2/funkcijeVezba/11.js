// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

capitalize = (string) => {
    const capitalized = string.split('');
    capitalized[0] = capitalized[0].toUpperCase();
    string = capitalized.join("");
    return string;
}
console.log(capitalize('dahaskjhdkashjdkash'));