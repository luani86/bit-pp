
// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

    // 12345 -> 54321

    reverseNumbers = (num) => {
        let arr = num.toString().split("").reverse().join("")
        console.log(arr)
       }
       reverseNumbers(123);
       