var a = 60;
var b = 6;
var c = "/";
if(c == "/" && b == 0){
    console.log("You can not devide by zero!")
}
else{
switch (c) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
}
}