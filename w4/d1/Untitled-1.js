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

function find(a){
    var i;
    var b=a[i]+a[i+1]+a[i+2];
    a.toLowerCase(a);
    for(i=0;i<a.length-2;i++){

        if(a[i]=="p"&&a[i+1]=="r"&&a[i+2]=="o"){
            b[j]=
        }
    }
}