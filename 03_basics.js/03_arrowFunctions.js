const user = {
    username : "yash",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this); // prints the current object 
        
    }

}

// user.welcomeMessage
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)  // prints empty object as default global object is empty 
 
function chai(){
    let username = "yash"
    // console.log(this.username)  // gives undefined as this not applicable inside functions 
}

// chai()


// const chaii = function(){
//     let username = "yash"
//     console.log(this.username)
// }

const chaii =()=>{    // known as arrow function
    let username = "yash"
    console.log(this.username)  // gives undefined
    console.log(this)  // gives empty object
}

// chaii()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2   // this also means same as above, known as imlicit return

// const addtwo = (num1, num2) => (num1 + num2)   // this also means same as above 

// const addtwo = () => {
//     return {username : "yash"}
// } 

// OR 

const addtwo = () => ({username : "yash"})
   

// console.log(addtwo(3,4))
console.log(addtwo())

