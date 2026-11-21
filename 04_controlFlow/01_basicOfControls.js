// if

// if(condition){   // syntax of if code
//     // code 
// }

const isUserLoggedIn = true
const temp = 41

// if(2 == "2"){
//     console.log("executed")
// }

// if(2 === "2"){
//     console.log("executed")
// }

// if(2 !== "2"){
//     console.log("executed")
// }

if(temp < 50){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}

console.log("always executed");


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`);   // not executed as out of scope
// comparsion  operators : < , > , <= , >= , == , != , === , !==


// short hand notation 
const balance = 1000
// if(balance>500) console.log("test"),   // implicit scope, we cant write multiple lines without comma 
// console.log("hello");


// nested if 
// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 700){
//     console.log("less than 700");
// } else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }



// Real life example
const userloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInFromEmail = true

if(userloggedIn && debitCard){
    console.log("you are allowed to buy course");
}

if(loggedInfromGoogle || loggedInFromEmail){
    console.log("you can continue your shopping");
}