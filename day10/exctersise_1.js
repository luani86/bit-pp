function merge(a, b) {
    //index of the element in the array a */
    var i;
    /* index b*/
    var j;
    /*final array*/
    var c = []
    /* index c */
    var k;

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {

        //a[i],b[j]
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        }
        else {
            c[k] = b[j];
            j++
        }

    }
    if (i == a.length) {
        for (; j < b.length; j++ , k++) {
            c[k] = b[j];
            k++;
        }
    }
    else {
        for (; i < a.length; i++) {
            c[k] = a[i];
            k++;
        }
        return c;
    }
}
var firstArray = [4, 6, 11, 18, 32];
var secondArray = [-1, 7, 13, 15];
var finalArray = merge(firstArray, secondArray);

console.log(finalArray);
