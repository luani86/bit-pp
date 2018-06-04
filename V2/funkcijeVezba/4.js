// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

celsiusToFarenheit = (tempInCelsius) => {
    let convertToFarenheit = tempInCelsius * 1.8 + 32;
    return convertToFarenheit;
}
console.log(celsiusToFarenheit(20));

farenheitToCelsius = (tempInFarenheit) => {
    let convertToCelsius = (tempInFarenheit - 32) * (5 / 9);
    return convertToCelsius;
}
console.log(farenheitToCelsius(68));