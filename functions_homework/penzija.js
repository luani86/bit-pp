

function retire(birth, year) {
    var birth;
    var year;
    var ret = birth + 65 - year;
    if (ret <= 0) {
        console.log("You are already retired.");
    }
    else {
        return ret;
    }
}
console.log(retire(1986, 2019));