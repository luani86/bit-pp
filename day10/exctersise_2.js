function merge(a,b){
var i = 0,
 j = 0,
 k = 0,
 c = [];


 
 // k = 0;
 
 
 for (i = 0; i < a.length; i++ ) {

        c[k] = a[i];
        k++;
}

// 5

for (j = 0; j< b.length; j++){

    c[k] = b[j];
    k++;
}


return c;
}

console.log(merge([1,3, 5, 2, 7], [6, 7, 9]));