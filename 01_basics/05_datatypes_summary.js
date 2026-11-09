/*
Primitives :
7 types : String, number, boolean null, undefined, symbol, bigint

js is dynamically typed language 


Referenced type(Non primitive)
Arrays , objects, functions
*/

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)  // gives false

const heros = ["shaktiman" , "naagraj" , "doga"]
let obj = {
    name : "yash",
    age : 22
}

const myfunc = function(){
    console.log("Hello world");
}

// typeof bigint gives undefined 
// typeof function gives function , also known as object function



// Stack(for primitives) and heap(for non primitives) 

let myname = "yash";
let newname = "rahul"
newname = "satyam"
console.log(newname)
console.log(myname)  // prints original value as in case of primitives copy of the variable is passed 

let userone = {
    email : "yash@gmail.com",
    upi : "yash@ybl"
}

let userTwo = userone
userTwo.email = "rahul@gmail.com"
console.log(userTwo.email)  
console.log(userone.email)  // its email also gets changed as in case of reference typed , reference of variable is passed , therefore value changed by one ref variable is changed for other ref variables also 
