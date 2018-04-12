var a = [4, 4, 8, 2, 0];

check = (array) => {

    var result = false;

    for (var i = 0; i < array.length; i++) {
        if (a[i] % 2 !== 0) {
            result = true;
        }
    }

    return result;
}
console.log(check(a));


//3. izgleda da radi kako treba
var arr = [1, 5, 3, 1, 1];

counts = (arr) => {
    var counter = 0;

    if (arr.length % 2 != 0) {

        var middleElement = arr[(arr.length - 1) / 2];
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] < middleElement) {
                counter = counter + 1
            }
        }
    }
    else {
        counter = "pogresan niz";
    }

    return counter;
}
console.log(counts(arr))

//3. drugi nacin izgleda da radi u slucaju da je neparan broj clanova niza ali taj uslov ne proverava!!!

var arr = [1, 13, 4, 5, 6];

counts = (arr) => {
    var counter;
    var b = [];
    var j;
    for (var i = 0; i < arr.length; i++) {
        if (arr.length % 2 == 0) {
            return "pogresan niz";
        }
        else
            if (arr[i] < arr[(arr.length - 1) / 2]) {
                b.push(arr[i])
            }
    }
    return b.length;
}
console.log(counts(arr))

// 4 radi
var a = [1, 4, -2, -11, 8, 1, -2, -3];

findSmallest = (a) => {
    var min = a[0];
    var i;
    var lastIndex = 0;
    var result = {
        min: min,
        lastIndex: 0
    };
    for (i = 0; i < a.length; i++) {
        if (a[i] < result.min) {
            //min = "MinValue: " + a[i];
            result.min = a[i];
            //lastIndex = "MinValueIndex: " + a.lastIndexOf(min)
            result.lastIndex = a.lastIndexOf(result.min);
        }
        //console.log(result.min)
    }
    return result;
}
console.log(findSmallest(a))

//5
var a = [2, 3, 8, -2, 11, 4];
var n = 1;

lessThan = (a, n) => {
    var i;
    var b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] < n) {
            b.push(a[i])
        }
    }
    return b;
}
console.log(lessThan(a, n))

//6 (es6)
var a = [1.6, 11.34, 9, 7, 3.11, 8];

filterInteger = (a) => {
    var i;
    var b = [];
    for (i = 0; i < a.length; i++) {
        if (Number.isInteger(a[i])) {
            b.push(a[i])
        }
    }
    return b
}
console.log(filterInteger(a));

//5.b
var a = ["JavaScript", "Programming", "fun", "product"];

searcher = (a) => {
    var i;
    var b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i].startsWith("pro") || a[i].startsWith("Pro")) {
            b.push(a[i])
        }
    }
    return b
}
console.log(searcher(a))

//5.c
var a = [1.6, 11.34, 9, 7, 3.11, 8];
filterInteger = (a) => {
    var i;
    var b = [];
    for (i = 0; i < a.length; i++) {
        if (Number.isInteger(a[i])) {
            b.push(a[i])
        }
    }
    return b
}
// console.log(filterInteger(a))
filterSomeElements = (someArray, callbackFunction) => {
    return callbackFunction(someArray)
}

console.log(filterSomeElements(a, filterInteger))

//11.a
var randomNumber1 = 5 + Math.floor(Math.random() * 15);
console.log(randomNumber1);

var randomNumber2 = 50 + Math.floor(Math.random() * 50);
console.log(randomNumber2);

//6.a
var shoppingList = [
    { name: "apples", price: 100.99 },
    { name: "milk", price: 200.66 },
    { name: "bananas", price: 336.5 }
]
totalPrice = (a) => {
    var i;
    var result = 0;
    for (i = 0; i < a.length; i++) {
        result = result + a[i].price
    }
    return result;
}
console.log(totalPrice(shoppingList));

averagePrice = (a) => {
    var i;
    var result = 0;
    for (i = 0; i < a.length; i++) {
        result = result + a[i].price
    }
    return (result / a.length).toFixed(3);
}
console.log(averagePrice(shoppingList));

highestPrice = (a) => {
    var i;
    var result = "";
    var maxPrice = a[0].price;
    for (i = 0; i < a.length; i++) {
        if (a[i].price > maxPrice) {
            maxPrice = a[i].price;
            result = a[i].name
        }
    }
    return result.toUpperCase()

}
console.log(highestPrice(shoppingList));

//7.a

check = (str) => {
    var i;
    var result;
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
}
console.log(check("HH"))

//7.b Da li string sadrzi cifru?
check = (str) => {
    var i;
    var result = false
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var j;
    for (i = 0, j = 0; i < str.length, j < digits.length; i++ , j++) {
        if (str[i] == "0" || str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" || str[i] == "9") {
            result = true;
        }
    }
    return result;
}
console.log(check("gggggggggggggg"))

//7.b drugi nacin da li string sadrzi cifru? Ne radi
check = (str) => {
    for (var i = 0; i < str.length; i++) {
        var num = parseInt(str[i])
        if (!isNaN(num)) {
            return true;
        }
    }
    return false;
}
console.log(check("g5"))

//7.b treci nacin ne radi
check = (str) => {
    var i;
    var result = false;
    var numNiz = str.split("")
    for (i = 0; i < numNiz.length; i++) {
        if (parseInt(numNiz[i]) !== NaN) {
            result = true;
        }
    }
    return result;
}
console.log(check("yyy"))

//7.c da li je string validan heksadecimalni kod, drugi nacin???
var isOk = /^#[0-9A-F]{6}$/i.test('#ffffff')
console.log(isOk)

//7.c drugi nacin ne radi
checkHex = (a) => {
    for (var i = 0; i < a.length; i++) {
        if (a[0] !== "#") {
            return false;
        }

        for (i = 1; i < a.length; i++) {
            var intNumber = parseInt(a[i]);
            if (!isNaN(intNumber) || ['a', 'b', 'c', 'd', 'e', 'f'].indexOf(a[i].toLowerCase()) !== -1) {
                continue;
            }

            return false;
        }
    }

    return true;
}
console.log(checkHex("#ffffFFfFaD"));

//7.d
checkNum = (num) => {
    var result = false;
    if (num > 1900 && num < 2018) {
        result = true;
    }
    return result;
}
console.log(checkNum(1970))

//7.e

//12 ????????????
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var shuffled = array.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
console.log(shuffled)

//ES6 practicals
//1 capitalize first letter
capitalize = (str) => {
    var i;
    var capitalFirst = str.charAt(0).toUpperCase();
    str = capitalFirst + str.slice(1);
    return str
}
console.log(capitalize('hello'))

//1 capitalize first letter of array memb
capitalize = (str) => {
    var i;
    for (i = 0; i < str.length; i++) {
        var capitalFirst = str[i].charAt(0).toUpperCase();
        str[i] = capitalFirst + str[i].slice(1);
    }
    return str;
}
console.log(capitalize(['hello', 'there', 'ES']));

//2 Calculate tax
calculateTax = (price) => {
    const taxRate = 0.2;
    var tax = price * taxRate;
    return tax;
}
console.log(calculateTax(120))

//3 Increase number by a given value. If value is omitted, increase number by 1
increaseValue = (num, val) => {
    var result = num + val;
    if (val === undefined) {
        result = num + 1
    }
    return result;
}
console.log(increaseValue(4))

//3.1 Increase array element by a given value. If value is omitted, increase element by 1 ne radi drugi uslov??
increaseValue = (ar, val) => {
    var i;
    for (i = 0; i < ar.length; i++) {
        ar[i] = ar[i] + val;
    }
    if (val === undefined) {
        ar[i] = ar[i] + 1;
    }
    return ar
}
console.log(increaseValue([4, 6, 11, -9, 2.1]));

//4 filter even elements of the array
filterEven = (ar) => {
    var i;
    var filteredArray = [];
    for (i = 0; i < ar.length; i++) {
        if (ar[i] % 2 === 0) {
            filteredArray.push(ar[i])
        }
    }
    return filteredArray;
}
console.log(filterEven([6, 11, 9, 0, 3]))

//4 filter even elements of the array drugi nacin
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var even = (num) => {
    return num % 2 === 0;
}
var myEvenArray = myArray.filter(even);
console.log(myEvenArray);

//5 filter strings that contain js or JS
var array = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
var filterJS = (str) => {
    if (str.includes("js") || str.includes("JS")) {
        return true;
    }
}
var newArray = array.filter(filterJS);
console.log(newArray)


//10
check = (ar) => {
    var i;
    var result;
    var resultInt = true;
    var resultPositive = true;
    for (i = 0; i < ar.length; i++) {
        if (Number.isInteger(ar[i]) !== true) {
            return false;
        }
    }
    for (i = 0; i < ar.length; i++) {
        if (ar[i] <= 0) {
            return false;
        }
    }
    if (resultInt == true && resultPositive == true) {
        result = true;
    } else {
        return false;
    }
    return result;
}
console.log(check([3, 11, 9, 5, 6]))

//functions practical 6
//1 count vowels
countVowels = (str) => {
    var counter = 0;
    var low = str.toLowerCase()
    for (var i = 0; i < low.length; i++) {
        if (low[i] == "a" || low[i] == "e" || low[i] == "i" || low[i] == "o" || low[i] == "u") {
            counter = counter + 1
        }
    }
    return counter;
}
console.log(countVowels("ruKOc"))

//3 rotate array by a given value
rotate = (ar, k) => {
    var newAr = [];
    for (var i = k; i < ar.length; i++) {
        newAr.push(ar[i])
    }
    for (i = 0; i < k; i++) {
        newAr.push(ar[i])
    }
    if (k > ar.length) {
        return "K is too big!";
    }
    return newAr;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2))

//2 alternate array elements
alternate = (a, b) => {
    var i;
    var j;
    var ab = [];
    for (i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
        if (i % 2 == 0) {
            ab.push(a[i]);
            ab.push(b[j]);
        }
        if (j % 2 !== 0) {
            ab.push(a[i]);
            ab.push(b[j]);
        }
    }
    return ab;
}
console.log(alternate(["a", "b", "c", "d"], [1, 2, 3, 4]))

//4 return array of digits of a number
arrayOfDigits = (num) => {
    var stringDigit = num.toString().split("");
    var newArray = [];
    for(var i=0; i<stringDigit.length; i++) {
        var parsedString = parseInt(stringDigit[i]);
        newArray.push(parsedString);
    }
    return newArray;
}
console.log(arrayOfDigits(3457));

//5 multiplication table up to 12
multiplicationTable = () => {
    var result = "x ";
    for(var i=0; i<11; i++) {
        for(var j=0; j<11; j++ ) {
            if(i == 0 && j > 0) {
                result += "[" + i + "]"
            }
            else if(j == 0 && i > 0) {
                result += "[" + j + "]"
            }
            else if(i > 0 && j > 0) {
                result += (i * j) + " "
            }
        }
        result += "\n"
    }
    return result;
}
console.log(multiplicationTable())

//6 Centigrade to Fahrenheit
centToFahr = (temp) => {
    return (temp * 1.8 + 32) 
}
console.log(centToFahr(8))

//7 maximum number and filter non numbers
findMax = (ar) => {
    var max = ar[0]
    for(var i=0; i<ar.length; i++) {
        if(typeof ar[i] !== "number") {
            return "Wrong array"
        }
        else if(ar[i] > max) {
            max = ar[i];
        }
    }
    return max;
}
console.log(findMax([4, 6, 11, 29, 2.1]))

//8 find max and min
maxAndMin = (ar) => {
    var newAr = [];
    var max = ar[0];
    var min = ar[0];
    for(var i=0; i<ar.length; i++) {
       
        if(ar[i] > max) {
            max = ar[i];
        }
        if(ar[i] < min) {
            min = ar[i];
        }
    }
    return [min, max];
}
console.log(maxAndMin([4, 6, 11, 29, 2]));

//9 find median
findMedian = (ar) => {
    var sortedAr = ar.sort((a, b) => {return a - b});
    var newAr = [];
    var min = ar[0];
    var median;
    for(var i=0; i<ar.length; i++) {
        if(sortedAr.length % 2 !== 0) {
            median = sortedAr[(sortedAr.length+1) / 2]
        } else{median = (sortedAr[(sortedAr.length - 2) / 2 ] + sortedAr[(sortedAr.length) / 2]) / 2}
    }
    return median;
}
console.log(findMedian([4, 2, 5, 1, 3]));

//10 find mostFrequent??
//10 find ocuurance?
mostFrequent = (array) => {
    if(array.length === 0) {
        return "prazan niz"
    }
    var newArray = [];
    var maxElement = array[0];
    var maxCount = 1;
    for(var i=0; i<array.length; i++) {
        var element = array[i];
        if(newArray[element] == null) {
            newArray[element] = 1;
        } else {
            newArray[element]++
        }
        if(newArray[element] > maxCount) {
            maxElement = element
            maxCount = newArray[element];
        }
    }
    return maxElement;
}
console.log(mostFrequent(['pear', 'apple', 'orange', 'apple']))

//11 return first middle and last element
firstMiddleLast = (ar) => {
    var newArFirst = [ar[0], ar[(ar.length + 1) / 2], ar[ar.length -1]];
    var newArSecond = [ar[0], ar[ar.length -1]];
    if(ar.length % 2 !== 0) {
        return newArFirst;
    } else {return newArSecond}
}
console.log(firstMiddleLast([4, 6, 11, 29, 2]))

//12 find average element
findAverage = (ar) => {
    var sum = 0;
    var count = 0
    for(var i=0; i<ar.length; i++) {
        sum = sum + ar[i];
        count = count + 1;
    }
    return sum / count;
} 
console.log(findAverage([10, 20, 30]));

//13 greater than average
greaterAverage = (ar) => {
    var sum = 0;
    var count = 0
    var newAr = [];
    for(var i=0; i<ar.length; i++) {
        sum = sum + ar[i];
        count = count + 1;
        var averageValue = sum / count;
    }
    for(var i=0; i<ar.length; i++) {
       if (ar[i] > averageValue) {
           newAr.push(ar[i])
       }
    }
    return averageValue;
} 
console.log(greaterAverage([10, 20, 30, 40, 50, 150]));

//14 BMI
calculateBMI = (mass, height) => {
    var bmi = mass / (height * height);
    var result
    if(bmi <= 15) {
        result = "Starvation " + bmi;
    }
    else if(bmi > 15 && bmi <= 17.5) {
        result = "Anorexic " + bmi;
    }
    else if(bmi > 17.5 && bmi < 18.5) {
        result = "Underweight " + bmi;
    }
    else if(bmi >= 18.5 && bmi < 25) {
        result = "Ideal " + bmi;
    }
    else if(bmi >= 25 && bmi < 30) {
        result = "Overweight " + bmi;
    }
    else if(bmi >= 30 && bmi < 40) {
        result = "Obese " + bmi;
    }
    else if(bmi >= 40) {
        result = "Morbidly obese " + bmi;
    }
    return result;
}
console.log(calculateBMI(75, 2.6));

//15 print string per line in a rectangular form
frame = (ar) => {
    var line = "*********" 
 
    var newResult = ["*********"];
    
    var finalResult;
    for(var i=0; i<ar.length; i++) {
        var  result = "* " + ar[i] + " *" ;
         newResult.push(result)
         newResult.push('\n')
    }
    finalResult = newResult.push(line)
    return newResult.toString();
}
console.log(frame(["lknhikjhbvuihbvhbh", "World", "in", "a", "frame"]));

//15 print string per line in a rectangular form drugi nacin ???
frame = (ar) => {
    var line = "*********" 
    var finalResult;
    for(var i=0; i<ar.length; i++) {
        var  result = "* " + ar[i] + " *" ;
    }
    return result;
}
console.log(frame(["Hello", "World", "in", "a", "frame"]));

[1, 2, 3]
123