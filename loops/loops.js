var message = "Message"
var i = 1;
for(i = 1; i < 4; i++){
    console.log(message);
}
console.log("Done");

var mesage = 'good morning';
i = 5;

while(i>0){
i--
console.log(i);
}
console.log(mesage);

var mesage = 'done';
var x= 0;

for (x =0; x<=10; x++){
    console.log(x);
}
console.log(mesage);

var mesage = 'done';
var i= 0;

for (i =0; i<=15; i++){
    if(i % 2 ==0){

    console.log('even');
    }
    else{
        console.log('odd');
    }
}
console.log(mesage);




var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var s = '';
for(i = 0; i < x.length; i++){
    s = s + x[i];
} 
console.log(s);

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];
    
    var x = '';
    for(i = 0; i < a.length; i++){
        x= x+a[i];
    }
    console.log(x);

    a = [
        [1, 2, 1, 24], 
        [8, 11, 9, 4], 
        [7, 0, 7, 27]
        ];
    var result = '\n';
    for (var i in a) {
        result = result + 'index' + i + 'value' + a[i] + '\n';

    }
    console.log(result);

    var a = [2, 7, 1, 5, 9, 4, 2, 6, 8];
    var min = a[0];
    var position = 0;
    var i;
    for(i = 1; i < a.length; i++){
        if( a[i] < min ){
            min = a[i];
            position = i;
        }

    }
    console.log(min + " is on the position " + position);
    
    var a = [2, 7, 1, 5, 9, 4, 2, 6, 8];
    var min = a[0];
    var max = a[8];
    var min_position = 0;
    var max_position = 8;
    var i;
    for(i=0; i< a.length; i++){

    if (a[i]< min){


    }
    }

    var n = 4;
    var s = "*";
}
   
    for(var r =0; r < n - 1; r++){
        if(r == 0 || r == n - 1){
            var line = "";
            for(var i = 0; i < n; i++){
                line += s;
                
        }
        else{

        }
    }

    var n = 5;
    var line = "";
    for(var i = 0; i < n; i++){
        line = line + "*";
    }
    line = line + "\n";
    
        
    




