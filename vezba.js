//Function practical 4
// zadatak 1

function provera(a, e) {
    var result;
    for (var i = 0; i < a.length; i++) {
        if (e == a[i]) {
            result = "Yes";
            break;
        } else {
            result = "No"
        }
    }
    return result;
}
console.log(provera([5, -4.2, 3, 8], 3));

// zadatak 2
function multiplies(x) {

    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = x[i] * 2;
        }
    }
    return x;
}
console.log(multiplies([-3, 11, 5, 3.4, -8]));

// zadatak 3
function minim(a) {
    var c = [];
    var k;
    var min = a[0];
    for (var i = 0; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i];
            c = [min, i];
        }
    }
    return c;
}
console.log(minim([4, 2, 2, -1, 6]));

// zadatak 4
function secondLargest(a) {
    var i;
    var max = a[0];
    for (i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
        if
    }

}

// zadatak 4

function secondL(arr) {
    arr.sort();
    return arr[arr.length - 2];
}

console.log(secondL([4, 2, 2, -1, 6]));

// zadatak 5

function positiveSum(arr) {
    result = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += arr[i]
        }

    }

    return result;
}

console.log(positiveSum([3, 11, -5, -3, 2]));

// zadatak 6

function symmetric(arr) {
    var a = arr;
    var j = arr.length - 1
    var result;
    for (var i = 0; i < a.length; i++) {
        if (a[j] === a[i]) {
            j--;
            result = "Yes";
        } else {
            result = "No";
        }

        /* if (b == a){
             return true;
         }else{
             return false;
         }*/
    }
    return result;
}

console.log(symmetric([2, 4, -2, -2, 4, 2]));

// zadatak 7

function inter(a, b) {
    var i = 0;
    var j = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}

console.log(inter([4, 5, 6, 2], [3, 8, 11, 9]))

// zadatak 8

function merge(a, b) {
    var i;
    var j;
    var c = [];
    var k = 0;
    for (i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
        c[k] = a[i];
        c[a.length++] = b[j];
        k++;
    }
    return c;
}
console.log(merge([4, 5, 6, 2], [3, 8, 11, 9]));

// zadatak 1 iz functions practical 2
function check(a) {
    if (typeof a == "string") {
        return true;
    } else {
        return false;
    }
}
console.log(check(6));

// zadatak 9

function deleteElement(arr, n) {
    var arr1 = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (n == arr[i]) {
            delete arr[i];
        }
        if (typeof arr[i] === "number") {
            arr1[j] = arr[i];
            j++
        }
    }
    return arr1;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 8))

// zadatak 10

function insert(arr, e, p) {
    var arr1 = [];

    for (var j=0, i = 0; i < arr.length; i++) {
        var positionValue = arr[i]

        if (p >= arr.length) {
            return "error";
        }

        if (i === p) {
            var elem = arr[i];
            arr1[j] = e;
            arr1[j + 1] = elem;

            console.log("if", j, arr[i], arr1[j]);
            console.log("if", j, arr[i], arr1[j + 1]);
            j += 2;
        } else {
            arr1[j] = arr[i];
            j++
            console.log("else", j, arr[i]);
        }

    }
    return arr1;
}
console.log(insert([2, -2, 33, 12, 5, 8], 78, 3));
