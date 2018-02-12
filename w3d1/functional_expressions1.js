function vowelCount(inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++) {
        if (vowelList.indexOf(inputString[x]) !== -1) {
            vowelCount += 1;
        }

    }
    return vowelCount;
}

console.log(vowelCount("The quick brown fox"));

//zadatak 1

function alter(a, b) {
    var i = 0;
    var j = 0;
    var k;
    var c = [];

    for (k = 0; k < a.length + b.length; k++) {
        if (k % 2 == 0) {
            c[k] = a[i];
            i++;
        } else {
            c[k] = b[j];
            j++;
        }
    }
    return c;
}

console.log(alter(["a", "b", "c"], [1, 2, 3]));

//zadatak 1

function rotat(a,k){


    c=[];
    j;
    for (i = 0; i < a.length; i++) {
        if(j == k){
        j = k + 1
        }
    }
    return j ;
}
console.log(rotat([1, 2, 3, 4, 5, 6],2));