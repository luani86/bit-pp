//zadatak 1

function chart(a) {
    var star = "";
    var i;
    for (i = 0; i < a; i++) {

        star += "*";
    }
    return console.log(star);
}

function prinstar(a, b, c) {
    chart(a);
    chart(b);
    chart(c);
}
prinstar(3, 5, 8);

//zadatak 2

function sym(a) {

    var i;
    var res;
    for (i = 0; i < a.length / 2; i++) {
        if (a[i] == a[a.length - 1 - i]) {
            res = true
        }
        else {
            res = false;
            break;
        }
        
    }
    return res;
}
console.log(sym([2, 4, -2, -2, 4, 2]));