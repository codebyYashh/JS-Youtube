// singleton  : means  only 1 object is created

// object literals

const mySymbol = Symbol("key1")

const obj1 = {
    name : "yash",  // name known as key and yash is the value of that key, keys are always processed as strings internally means name as "name"

    "full naam" : "yash agrawal",
    // mySymbol : "mykey1",
    [mySymbol] : "mykey1",  // now mySymbol will be stored as Symbol
    age : 20,
    location : "jaipur",
    email : "yash@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
} // this is how we can create object , this way does not create singleton object 

console.log(obj1.email)
console.log(obj1["email"])

// console.log(obj1.full naam)  // so this give error because of the space 
console.log(obj1["full naam"])   // this is valid

// console.log(obj1.mySymbol)
// console.log(typeof obj1.mySymbol)  // mySymbol is getting stored as string and not symbol

// console.log(obj1[mySymbol])
// console.log(typeof mySymbol)
// console.log(typeof obj1[mySymbol])


obj1.email = "yash123@gmail.com"
// Object.freeze(obj1) // now changes will be ignored 
obj1.email = "yash123456@gmail.com"
console.log(obj1)

obj1.greeting = function(){
    console.log("hello yash")
    
}
obj1.greetingtwo = function(){
    console.log(`hello yash, ${this["full naam"]}`)
    
}

console.log(obj1.greeting)
console.log(obj1.greeting())
console.log(obj1.greetingtwo())

// we can also create object using :  
// Object.create  // this creates a singleton object 