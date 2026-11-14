// const tinderUser = new Object();  // creates singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sami"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "yash@gmail.com",
    fullname : {
        userfullname : {
            firstName : "yash",
            lastname : "agrawal"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({} , obj1, obj2)  // assume {} as target and rest others as source , we can include more objects 

const obj3 = {...obj1 , ...obj2}  // most used

// console.log(obj3)

const users = [
    {
        id : 1,
        email : "yash@gmail.com"
    }, 
    {
        id : 1,
        email : "yash@gmail.com"
    }, 
    {
        id : 1,
        email : "yash@gmail.com"
    }, 
    {
        id : 1,
        email : "yash@gmail.com"
    }
]

console.log(users[1])
console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser));  // returns an array
console.log(Object.values(tinderUser));  // returns an array
console.log(Object.entries(tinderUser));  // returns an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))