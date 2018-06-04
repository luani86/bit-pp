// Write a function to hide email addresses to protect them from unauthorized users.

//     "somerandomaddress@example.com" -> "somerand...@example.com"

const protectMail = (mail) => {
    if(!mail.includes("@")) {
        console.log("Enter valid email");
        return;
    }
    let splitedMail = mail.split('@');
    splitedMail[0] = splitedMail[0].slice(0,(splitedMail[0].length / 2)) + "...";
    splitedMail[1] = "@" + splitedMail[1];
    return  splitedMail.join("");
} 
console.log(protectMail("somerandom@addressexample.com"));