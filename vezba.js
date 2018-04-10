var a = [4, 4, 8, 2, 0];

check = (array) => {

    var result = false;

    for(var i = 0; i < array.length; i++) {
        if(a[i] % 2 !== 0) {
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
   
    if(arr.length % 2 != 0) {

        var middleElement = arr[(arr.length - 1) / 2];
        for(var i = 0; i < arr.length; i++) {
       
            if(arr[i] < middleElement) {
                counter = counter + 1
            }
        }
    }
    else{
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
    for(var i = 0; i < arr.length; i++) {
        if(arr.length % 2 == 0) {
            return "pogresan niz";
        }
        else 
            if(arr[i] < arr[(arr.length-1) / 2]){
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
for(i = 0; i < a.length; i++) {
    if(a[i] < result.min) {
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
for(i=0; i<a.length; i++) {
if(a[i] < n) {
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
    for(i=0; i<a.length; i++) {
        if(Number.isInteger(a[i])) {
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
    for(i=0; i<a.length; i++) {
        if(a[i].startsWith("pro") || a[i].startsWith("Pro")) {
            b.push(a[i])
        }
    }
    return b
}
console.log(searcher(a))

//5.c
// var a = [1.6, 11.34, 9, 7, 3.11, 8];
// filterInteger = (a) => {
//     var i;
//     var b = [];
//     for(i=0; i<a.length; i++) {
//         if(Number.isInteger(a[i])) {
//             b.push(a[i])
//         }
//     }
//     return b
// }
// filterSomeElements = (a, filterInteger) => {
//     return filterInteger(a)
// }
// console.log(filterSomeElements(a, filterInteger(a)))

//11.a
var randomNumber = 5 + Math.floor(Math.random() * 16);
console.log(randomNumber);

var randomNumber = 50 + Math.floor(Math.random() * 51);
console.log(randomNumber);


