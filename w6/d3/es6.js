// 1) Write a function that capitalizes the first letter of each string argument it receives.  
// Function arguments: ‘hello’, ‘there’, ‘ES’, 6
// Output: ‘Hello’, ‘There’, ‘ES’


function argument(...args) {
    var output = [];
    args.forEach(function (e, i) {
        var t = e[0].toUpperCase();
        t += e.substring(1, e.length);
        output.push(t);
    });
    return output;
}
console.log(argument("marko", 'jovan', "ivan"));

// 2) Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
//Input: 120
//Output: 24
const tax = {};
Object.defineProperty(tax, 'value', {
    value: 0.2,
    writable: false
});
function calculate(price) {

    return price * tax.value;
}

console.log(calculate(600));

// 3) Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
//Input: [4, 6, 11, -9, 2.1], 2
//Output: [6, 8, 13, -7, 4.1]

function increase(array, value) {
    array.forEach(function (e, i) {
        if (value == undefined) {
            value = 1;
        }
        array[i] = e + value;
    });
    return array;
}

console.log(increase([1, 2, 3, 4, 5]));


// 4) Write a function that filters all even elements of the array.
// // Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

function filt(array) {

    array = array.filter(e => e % 2 == 0);

    return array;
}
console.log(filt([1, 2, 3, 4, 5]));

// 5) Write a function that filters all the strings from the given array that contain substring JS or js.
function filterJs(array) {
    array = array.filter(e => e.includes('js') || e.includes('JS'));
    return array;
}
console.log(filterJs(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

// 6) Write a function that filters all integer numbers from the given array.

function filterInteger(array) {

    array = array.filter(e => Number.isInteger(e) == true);

    return array;
}
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

// 7) Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: 45, 553

function filterInt5(array) {
    array=array.toString();
    array = array.filter(e => parseInt(e) == number && e.includes("5"));
    return array;
}
console.log([23, 11.5, 9, 'abc', 45, 28, 553]);