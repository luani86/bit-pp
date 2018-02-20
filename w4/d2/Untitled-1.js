//Write a functional expresson that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

function duble(a) {

    var i;
    var b = [];
    var j = 0;

    for (i = 0; i < a.length; i++ , j += 2) {
        b[j] = a[i];
        b[j + 1] = a[i];

    }
    return b;
}
console.log(duble([2, 4, 7, 11, -2, 1]));

//Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 


// [3, 5, 3, 7, 5, 11, 5]
// [3, 5, 7, 11]
function dupl(a) {
    var b = [];
    var j = 0;

    for (var i = 0; i < a.length; i++) {
        var n = b.indexOf(a[i]);
        if (n == -1) {
            b[j] = a[i];
            j++;
        }
    }
    return b;
}
console.log(dupl([3, 5, 3, 7, 5, 11, 5]));




function remove(a) {
    var duplicat = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] == duplicat) {
            duplicat = a[i];
            delete a[i];
        }
    }
    return a;
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
// NE RADI

//Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 

function r(a) {
    var i;
    var duplicate = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] == a[i++]) {
            delete a[i];
        }
    }
    return a;
}
var a = [1, 3, 4, 4, 5, 4, 6, 7, 4];
console.log(r(a));
// NE RADI

//Write a function that checks if a given array has odd number of elements.
//Input: [1, 2, 9, 2, 1]
//Output: true

function check(a) {
    var result;
    if (a.length % 2 != 0) {
        result = true;

    }
    else {
        result = false;
    }
    return result;
}
console.log(check([1, 2, 9, 2, 1, 5]));

//Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//Output: 4

function check(a) {
    var midle = a[a.length / 2 + 1];
    var result;
    var k = 0;
    if (a.length % 2 != 0) {
        result = true;
        for (i = 0; i < a.length; i++) {
            if (a[i] < midle) {
                k++;
            }

        }
        return k;
    }
    else {
        result = false;
        console.log("error")
    }
}
var a = [-1, 8.1, 3, 6, 2.3, 2.11];
console.log(check(a));
// drugi put

function count(a) {
    var counter = 0;
    if ((a.length % 2 == 0)) {
        console.log("error");
    }
    else {
        var middle = a[(a.length - 1) / 2];
        for (var i = 0; i < a.length; i++) {
            if (a[i] < middle) {
                counter = counter + 1;
            }
        }
    }
    return counter;
}
console.log(count([1, 21, 3, 4, 9, 6, 7, 1, 9]));

// Write a function that finds all the elements in a given array less than a given element

function find(a) {
    var min = a[0];
    var c = {
        minValue: min,
        indexValue: 0
    };

    for (i = 0; i < a.length; i++) {
        if (a[i] <= min) {
            min = a[i];
            //c = [min, i]; // {}
            c.minValue = min;
            c.indexValue = i;
        }
    }
    return c;
}

console.log(find([8, 13, 9, 12, 8, 1, 1, 4, 13]));

/*Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.
[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
*/
function find(a, e) {
    var b = [];
    var j = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] < e) {
            b[j] = a[i];
            j++;
        }
    }

    return b;
}

console.log(find([8, 13, 9, 12, 8, 1, 1, 4, 13], 8));


//Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 

function find(a) {
    var i;
    var j = 0;
    var c = [];
    //var b=a[i]+a[i+1]+a[i+2];

    for (i = 0; i < a.length; i++) {

        //a[2] - "zaprositi"
        //s "zaprositi"
        var s = a[i].toLowerCase();

        if (s[0] == "p" && s[1] == "r" && s[2] == "o") {
            c[j] = a[i];
            j++;
        }
    }
    return c;
}
console.log(find(["Profan", "prodati", "zaprositi"]));

/*Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
        {name: ‘apples’, price: 100}, 
        {name: ‘milk’, price: 80}, 
        {name:’bananas’, price: 150}
        ]
        */

var list = [a, b, c];

var a = {
    name: apples,
    price: 100
}
var b = {
    name: milk,
    price: 80
}
var b = {
    name: bananas,
    price: 150
}

function check(list) {
    for (var i = 0; i < list.length; i++) {

    }
}

// Write a function that calculates a number of days to your birthday.

function calc(birthday) {
    var bDay = new Date(birthday).getTime();
    var today = new Date().getTime();

    var daysLeftTilBDay = (bDay - today) / 1000 / 3600 / 24;


    return Math.round(daysLeftTilBDay);
}

console.log(calc("15 September 2018"));

// Write a function that for a given departure and arrival time calculates the time the trip takes.

function calc(departure, arrival) {
    var depDate = new Date(departure);
    var arrDate = new Date(arrival);
    var depHours = depDate.getHours();
    var depMinutes = depDate.getMinutes();
    var depSeconds = depDate.getSeconds();



    var arrHours = arrDate.getHours();
    var arrMinutes = arrDate.getMinutes();
    var arrSeconds = arrDate.getSeconds();

    var diffSeconds, diffMinutes;

    if(arrSeconds>depSeconds){
        diffSeconds = arrSeconds - depSeconds;
    }
    else{
        arrMinutes--;
        diffSeconds = 60 + arrSeconds - depSeconds;
    }

    if(arrMinutes>depMinutes){
        diffMinutes = arrMinutes - depMinutes;
    }
    else{
        arrHours--;
        diffMinutes = 60 + arrMinutes - depMinutes;
    }



    var result = [(arrHours - depHours + " hours"), (diffMinutes + " minutes"), (diffSeconds + " seconds")];

    return result;
}

console.log(calc('1 mar 2017 5:30:45', '1 mar 2017 6:32:50'));

//Write a constructor function that creates points in the space. Each point in the space has its own x, y, and z coordinate. For example, (3, 5, 1) can the point in the space
function distance(tacka_1, tacka_2){
    var tacka_1 = new Tacka_1(){
        x : 1,
        y : 2,
       z : 3
    }
    var result = Math.sqrt((tacka_1.x - tacka_2.x) * (tacka_1.x - tacka_2.x) + (tacka_1.y - tacka_2.y) * (tacka_1.y - tacka_2.y) + (tacka_1.z - tacka_2.z) * (tacka_1.z - tacka_2.z));
    return result;  
}
var tacka_1 = {};
tacka_1.x = 1;
tacka_1.y = 2;
tacka_1.z = 3;

var tacka_2 = {};
tacka_2.x = 4;
tacka_2.y = 5;
tacka_2.z = 6;

console.log(distance(tacka_1, tacka_2));



