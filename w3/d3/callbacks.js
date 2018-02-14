
//var b =[];

/*function addOne(n){
    return n + 1;
}
function multipByTwo(a){
    var b =[];
    
for (var i = 0; i < a.length ; i++) {
    b[i] = 2*a[i];

}

return b;

}



var r = multipByTwo(a)

for (var i = 0 ; i < r.length ; i++){
    r[i] = addOne(r[i])
}
console.log(r) */

//a - array
//f callback function - transforn the value
var a = [3, 4, 8, 2];
var b = [];
function addOne(n) {
    return n + 1;
}

function multipByTwoWithCallback(a, f) {

   
    


    for (var i = 0; i < a.length; i++) {
        b[i] = f(a[i]*2);

    }
    return b
}
var r = multipByTwoWithCallback(a, addOne);

console.log(r)






