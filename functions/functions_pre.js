// 1. zadatak: Sabiranje cifara jednog broja

function sumofDigits(n) {
    var sum = 0;
    var lastDigit
    if(typeof n != "number"){
        return -1;
    }
    if(n < 0){
        n = -n;
    }
    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;
    }
    return sum;
}
console.log(sumofDigits("fff"));

// 4. zadatak: Prosek

function mean(a, b, c, d){
var result = (a + b + c + d) / 4;
return result;
}
console.log(mean(5, 10, 10, 5));

// 6. zadatak: Chart

// function chart(a,b,c){
//     var s = "*";
//     var n = 0;
//     for()
// }

// 9. zadatak: sum of odd elements


// function sumOdd() {
//     var i;
//     var sum = 0;
//     for (i = 0; i < arguments.length; i + 2) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sumOdd(1, 2, 3, 4, 5, 6, 7, 8))


//zadatak 9
//input: nwki niz
//output: zbir neparnih elemenata u nizu

function sumodd(a){
var sum = 0;
for(i = 0; i < a.length; i++){
if(a[i] % 2 == 1){
    sum = sum + a[i]
}
}
return sum;
}

console.log(sumodd([3, 4, 6, 7, 8, 9, 11, 13, 8, 9]));


//zadatak 10
function appear(string,a,b){
    
    var summ = 0
    for(i = 0; i < string.length; i++){
        if(string[i] == a ){
        summ = summ + 1;
        }
        else if(string[i] == b){
            summ = summ + 1;
        }

    }
return summ;
}
console.log(appear("AnnannjsadnasdbaskdjasAAkjadakjsJfdafAsssaaaaanAnn","a","A"));
//zadatak 10 resenje 2
function appear(string,a,b){
    
    var summ = 0
    for(i = 0; i < string.length; i++){
        if(string[i] == a || (string[i] == b) ){
        summ = summ + 1;
        }

    }
return summ;
}
console.log(appear("AnnannjsadnasdbaskdjasAAkjadakjsJfdafAsssaaaaanAnn","a","A"));

// zadatak 6
function chart(a){
    for(i = 0; i < a.length; i++){

    }
}

// zadatak 2





