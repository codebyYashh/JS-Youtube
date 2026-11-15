// console.log("Y")
// console.log("A")
// console.log("S")
// console.log("H")


// how to write functions 
function sayMyName(){   // this whole known as function definition
console.log("Y")
console.log("A")
console.log("S")
console.log("H")
}

// sayMyName() // execution of function 

// function addTwoNumbers (num1 ,num2){

//     console.log(num1 + num2);
    
// }

function addTwoNumbers (num1 ,num2){

    // let result = num1 + num2
    // return result

    return num1 + num2
    console.log("yash")  // never execute
}

const result = addTwoNumbers(3,5)
console.log(result);

// function loginUserMessage(username){
function loginUserMessage(username = "yash"){
    if(username ===undefined){
        console.log("please enter a username")
        return
    }
    return  `${username} just logged in`
}
const res = loginUserMessage("yash")
console.log(res);

console.log(loginUserMessage())

function calculateCarPrice(val1 , val2 , ...num1){  // ...num1 known as rest operator
    return num1  // returns an array
}
console.log(calculateCarPrice(200,400,600,300))

const user = {
    username : "yash",
    price : 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username : "mahima",
    price : 455
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,2,3]))