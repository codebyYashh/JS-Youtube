const userEmail = "yash@gmail.com"

if(userEmail){  // we are not making any comparsion here , just the string is assumed to be true ,this is known as truthy value
    console.log("Got user email");
}else{
    console.log("dont have user email");
}

// falsy values 
// false , 0 , -0 , BigInt 0n , ""(empty string) , null , undefined, NaN
// except these all are truthy values

// Truthy values
// "0" , "false" , [](empty array) , " ", {}(empty object) , function(){} (empty function)

// how to check for array 
const arr = [] // empty array
if(arr.length === 0){
    console.log("array is empty");
}

// how to check for empty objects 
const emptyobj = {}

if(Object.keys(emptyobj).length === 0){   // since Object.keys return an array of keys 
    console.log("object is empty");
    
}

// on browser console : these below statements give true 
// false == 0 
// false == ''
// 0 == ''


// Nullish Coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10   // it will take 5(first value) as it is a valid value
val1 = null ?? 10   // it will take second value in case of null at first value

// var1 = undefined ?? 15  
// var1 = undefined ?? null    // gives second value(null)
var1 = null ?? 20 ?? 10
console.log(var1);  // gives 15

console.log(val1)


// ternary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");

