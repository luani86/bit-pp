// zadatak 2
function multip(a){
    var res = a;
    for(i = 0; i < a.length; i++){
        if(a[i] > 0){
           a[i] = a[i] * 2     }
                res = a;
    }
    return res;
}
console.log(multip([-3, 11, 5, 3.4, -8]));

// zadatak 4

function element(a){
    var min1;
    var pos1;
    min1 = a[0];
    pos1 = 0;
    for(var i = 1 ; i < a.length ; i++){
        if(min1 > a[i]){
            min1 = a[i];
            pos1 = i;
        }
    }


    if( pos1 != 0 ){
        var min2 = a[0];
        var pos2 = 0; 
    }
    else{
        var min2 = a[1];
        var pos2 = 1;
    }

    for(var j = 1; j < a.length; j++){
        if( j == pos1){
            continue;
        }
        
        if(min2 > a[j]){
            min2 = a[j];
            pos2 = j;
        }

    }


    return min2;
}
console.log(element([4, 2 , 2 , -1, 5]));