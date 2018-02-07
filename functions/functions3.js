function count(string, n) {

    var res = 0
    for(i=0; i < string.length ; i++){
        if(string[i] == n){
            res = res + 1;

        }

    }

    return res

}
console.log(count("My random string","z"))