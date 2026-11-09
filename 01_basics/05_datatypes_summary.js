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