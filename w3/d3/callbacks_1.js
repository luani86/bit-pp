// zadatak da i je sifra korektna ili ne. Ako sadrzi bar 1 cifru ok je a ako ne onda nije. Ako jeste onda preko funkcije successCalback prikazemo poruku a ako nije onda errorCallback

function successCallback(){
    console.log("Password is OK!");
}

function errorCallback(){
    console.log("Password needs a digit!")
}

function checkPassword(password, success, error){
for (var i = 0; i < password.length; i++){
    var ind = false;
   var p = parseInt (password[i]);
   if(!isNaN(p)){
    ind = true;
    break;
   }

   if(ind == true){
       success();
   }
   else{
       error();
      
   }
}

}
checkPassword("ab4cdef", successCallback, errorCallback);

//zadatak 3 niz br i fja koja kvadrira vrednosti niza

function square(a){
var b = []
for(var i = 0; i < a.length; i++){
    b[i] = a[i] * a[i]
}
return b;
}
console.log(square([1, 2, 3, 4, 5]));

// zadatak 3 drugi put




function square(n){
    return n * n;
}

function squareArray(a, F){
    var b = [];

    for(var i = 0; i < a.length; i++){
        b[i] = F(a[i]);

      
    }

   // console.log(b);
   return b;

}
    

var r;
r = squareArray ([1, 2, 3, 4, 5], square);
console.log(r);


// zadatak 3

function small(){

}
generateNumber(f)

//1) napisati fiju koja sabira dva broja
//2. napisati fiju koja za dva zadata niza formira treci niz koji sadrzi zbirove pojedinacnih elemenata
//nulti element sabiramo sa nultim, prvi element sa prvim, .... 

//3. napisati fiju koja ocekuje dva niza kao parametre i callback funkciju zbir i vraca zbir ova dva niza 

function sum(a, b){
    return a + b 
}

function array2(a,b){

var c=[]

for(i = 0; i < a.length;i++){
    c[i]=a[i]+b[i]
}
return c;
}


function result(a,b,f){
   return f(a, b);
}

function result2(a, b, f){
    var c = [];

    for(i = 0; i < a.length;i++){
        c[i]=f(a[i],b[i]);
    }
    return c;
    

}

//console.log(result2([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], sum));
console.log(result([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], array2));