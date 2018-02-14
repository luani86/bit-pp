"use strict";

// 4. zadatak 

function digits(n) {
    var i = 0;
    var result = [];
    var last_digit;

    while (n > 0) {
        last_digit = n % 10;
        result[i] = last_digit;
        n = (n - n % 10) / 10;
        i++;
    }

    var a = [];
    var j = 0;

    for( i = result.length - 1; i >= 0; i--) {
        a[j] = result[i];
        j++;
    }
    return a;
}

console.log(digits(568));


// 7. zadatak

function findMax(a) {
var i;
    var max = [];
    var number = 0;

    for(i = 0; i < a.length; i++) {
        if(typeof a[i] == 'number') {
            if(a[i] > max) {
                max = a[i];
            }
        } else {
            continue;
        }
    }
    return max;

}
console.log(findMax([1, 4, 28, 'a', 9, 18]));











