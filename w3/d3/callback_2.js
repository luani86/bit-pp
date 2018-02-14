function f(name,surname){

    //name.surname@gmail.com
    function n() {
        var suggestedEmail = name + "." + surname + "@gmail.com";
        return suggestedEmail;  
    }
    return n;
}

f("Luka", "Breberina")();

//u zadatoj niski zamenjuje svako slova "a" slovo zvezdicom (ispistati rezultat) i vraca broj zamena.


/* javascript -> j*v*script
2 */


(function (a,b){
    x = "";
    counter = 0;
    for (i = 0;i < a.length;i++){
        if(a[i] == b){
            x += "*";
            counter++;
        } else x+=a[i];
    }
    console.log(x);
    return counter;
    
})('javascript', 'v');